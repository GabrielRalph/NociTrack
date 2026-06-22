const ANSWER_IMAGES = {
  0: { src: "images/happy.png", alt: "Happy" },
  1: { src: "images/smile.png", alt: "Smile" },
  2: { src: "images/neutral.png", alt: "Neutral" },
  3: { src: "images/sad.png", alt: "Sad" },
  4: { src: "images/crying.png", alt: "Crying" },
};

let imageSrcResolver = (s) => s;

class DataClass {
    /**
     * Creates an instance of the class and populates its properties based on the provided arguments object.
    * @template {DataClass} T
    * @this {new() => T}
    * @param {Object} argsObject
    * @returns {T}
    */
    static make(argsObject) {
        const instance = new this();
        for (const key in instance) {
            if (!(instance[key] instanceof Function)) {
                if (key in argsObject) {
                    let parser = key + "_parser";
                    if (parser in this && this[parser] instanceof Function) {
                        instance[key] = this[parser](argsObject[key]);
                    } else {
                        instance[key] = argsObject[key];
                    }
                } else if (instance[key] === undefined) {
                    throw new Error(`${this.constructor.name}: Missing required property: ${key}`);
                }
            }
        }

        if ("validate" in instance && instance.validate instanceof Function) {
            instance.validate();
        }
        return instance;
    }


    /**
     * Creates an instance of the class and populates its properties based on the provided arguments object.
    * @template {DataClass} T
    * @this {new() => T}
    * @param {string} url - The URL to load the data from, which should return a JSON object.
    * @param {function(number):void} onprogress - An optional callback function that receives progress updates as a number between 0 and 1.
    * @returns {Promise<T>}
    */
    static async load(url, onprogress) {
        const data = await loadFile(url, "json", onprogress);
        return this.make(data);
    }
}

class ImageInfo extends DataClass {
    /** @type {?string} */
    src = null;
    
    /** @type {?string} */
    alt = null;

    static parser(value) {
        if (typeof value === "string") {
            return ImageInfo.make({ src: value });
        } else if (value && typeof value === "object") {
            return ImageInfo.make(value);
        }
        return null;
    }

    get resolvedSrc() {
        if (this.src) {
            return imageSrcResolver(this.src);
        }
        return null;
    }
}

class Scale extends DataClass {
    /** @type {("scale")} */
    type = "scale";
    static type_parser(t) { if (t !== "scale") throw new Error(`Invalid scale type: ${t}`); return t }

    /** @type {number} */
    min = 0;

    /** @type {number} */
    max = 0;

    /** @type {number} */
    step = 1;

    /** @type {Object} */
    labels = {};
    static labels_parser(l) { return l && typeof l === "object" ? l : {} }

    /** @type {Object} */
    titles = {};
    static labels_parser(l) { return l && typeof l === "object" ? l : {} }

    /** @type {ImageInfo} */
    images = null;
    static images_parser(i) { 
        return i && typeof i === "object" ? 
            Object.fromEntries(
                Object.entries(i).map(
                    ([k,v]) => [k, ImageInfo.parser(v)]
                )
            ) : null 
    }

    validate() {
        if (this.min > this.max) {
            throw new Error("Scale validation error: min cannot be greater than max");
        }
        if (this.step <= 0) {
            throw new Error("Scale validation error: step must be a positive number");
        }
    }

    get options() {
        let options = [];
        for (let v = this.min; v <= this.max; v += this.step) {
            options.push({
                value: v,
                label: this.labels[v] ?? null,
                title: this.titles[v] ?? v.toString(),
                image: this.images ? this.images[v] : null
            });
        }
        return options;
    }
}

class Option extends DataClass {
    /** @type {?string|number} */
    value = null;

    /** @type {?string} */
    label = null;

    /** @type {?string} */
    title = null;

    /** @type {ImageInfo | string} */
    image = null;
    static image_parser(i) { return ImageInfo.parser(i) }
}

/**@typedef {Option[]|Scale} Options */

/** Store question-bank data for one question. */
class Question extends DataClass {
    /**@type {string} */
    title = null;

    /**@type {string} */
    description = null;

    /**@type {string} */
    customUtterance = null;

    /**@type {ImageInfo | string} */
    image = null;
    static image_parser(i) { return ImageInfo.parser(i) }

    /**@type {?string|Options} */
    options = null;
    static options_parser(o) {
        if (typeof o === "string") {
            return o;
        } else if (Array.isArray(o)) {
            return o.map(i => Option.make(i));
        } else if (o && typeof o === "object" && "type" in o && o.type === "scale") {
            return Scale.make(o);
        }
        return null;
    }

    /**@type {Question[]|null} */
    questions = null; // for nested questions, not yet implemented
    static questions_parser(q) { return Array.isArray(q) ? q.map(i => Question.make(i)) : null }


    updateOptions(assessment) {
        const {options} = this;
        if (typeof options === "string" && options in assessment.optionFormats) {
            this.options = assessment.optionFormats[options];
        }

        for (let question of this.questions ?? []) {
            question.updateOptions(assessment);
        }
    }

    get optionList() {
        let optionsList = null;
        if (this.options instanceof Scale) {
            optionsList = this.options.options;
        } else if (Array.isArray(this.options)) {
            optionsList = this.options;
        }
        return optionsList;
    }

    get utterance() {
        return this.customUtterance ?? this.question;
    }
}


class Assessment extends DataClass {
    /** Create an assessment with question models and answer state. */

    /**@type {string} */
    title;
    static title_parser(t) { if (!t) throw new Error("Assessment must have a title"); return t }

    /**@type {string} */
    description = "";

    /**@type {string} */
    version = "";

    /** @type {Question[]} */
    questions = [];
    static questions_parser(q) { return Array.isArray(q) ? q.map(i => 
        i && typeof i === "object" ? Question.make(i) : null
    ).filter(i=>i) : [] }

    /** @type {Object<string, Options>} */
    optionFormats = {};
    static optionFormats_parser(of) {
        let formats = {};
        if (of && typeof of === "object") {
            for (let key in of) {
                let value = of[key];
                let options = null;
                if (Array.isArray(value)) {
                    options = value.map(i => Option.make(i));
                } else if (value && typeof value === "object" && "type" in value && value.type === "scale") {
                    options = Scale.make(value);
                }

                if (options) {
                    formats[key] = options;
                }
            }
        }
        return formats;
    }

    get flattenedQuestions() {
        let questions = [];
        let flatten = (root, path) => {
            if (root.questions && root.questions.length > 0) {
                root.questions.forEach(q => flatten(q, [root, ...path]));
            } else {
                questions.push([root,...path]);
            }
        }
        flatten(this, []);
        return questions;
    }

    validate() {
        this.questions.forEach(q => q.updateOptions(this));
    }
}

function setImageSourceResolver(resolver) {
    if (resolver instanceof Function) {
        imageSrcResolver = resolver;
    }
}

export {Scale, Option, Question, Assessment, setImageSourceResolver}

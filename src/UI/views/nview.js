import { AccessEvent, GridIcon, GridLayout, ShadowElement, SvgPlus } from "../../Utilities/squidly-utils.js";
import { Assessment } from "../../DataModels/models.js";

const SYMBOLS = {
    home: {svg: `<svg class = "noci icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 10.5 12 3l9 7.5"></path><path d="M5 10v10h5v-6h4v6h5V10"></path></svg>`},
    left: {svg: `<svg class = "noci icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15 18 9 12l6-6"></path></svg>`},
    right: {svg: `<svg class = "noci icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 18l6-6-6-6"></path></svg>`},
    results: {svg: `<svg class = "noci icon" viewBox="-3 -3 30 30" aria-hidden="true" focusable="false"><path d="M17.198,12.038c0,2.871-2.327,5.198-5.198,5.198s-5.198-2.327-5.198-5.198,2.327-5.198,5.198-5.198"/><path d="M22.024,11.772c0,5.536-4.488,10.024-10.024,10.024S1.976,17.308,1.976,11.772,6.464,1.748,12,1.748"/><polyline points="22.024 1.748 12 12.237 12.555 10.223 14.065 11.901 12 12.237" /></svg>`},
    speak: {svg: `<svg class = "noci icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8.121.933c.183.456.36.914.518,1.377.219.641-.113,1.114-.422,1.624-.523.865-.571,1.699-.023,2.602.429.707,1.025,1.289,1.63,1.879.641.625,1.362,1.2,1.8,1.946.485.826.148,1.196-.667,1.458-.262.085-.538.149-.805.205-1.011.212-1.172.828-.922,1.465.444,1.133.359,1.254-1.075,1.58-.58.132-1.292.129-1.607.69,0,0,.453.635,1.002.701.436.053.861.127,1.271.268.646.221.826.556.391.914-1.067.877-1.138,1.944-.826,3.024.136.47-.069.648-.434.872-.557.341-1.225.389-1.873.419-.932.044-1.87.015-2.805.007-.154-.001-.296-.022-.472-.039-.661-.065-1.174-.025-1.674.36"/><path d="M14.043,18.488c.69-.895,1.118-2.003,1.118-3.221s-.427-2.326-1.118-3.221"/><path d="M16.901,20.967c1.158-1.579,1.854-3.552,1.855-5.7s-.695-4.121-1.852-5.701"/><path d="M19.77,22.898c1.63-2.114,2.61-4.755,2.61-7.631s-.98-5.517-2.61-7.631"/></svg>`},
    save: {svg: `<svg class = "noci icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="19.671 19.633 4.329 19.633 4.329 4.291 16.17 4.291 19.671 7.792 19.671 19.633" stroke-linecap="round"/><path d="M7.135,4.291h7.376v2.909c0,.91-.739,1.649-1.649,1.649h-4.079c-.91,0-1.649-.739-1.649-1.649v-2.909h0Z"/><path d="M7.703,12.419h8.379v5.003c0,1.22-.991,2.211-2.211,2.211h-3.957c-1.22,0-2.211-.991-2.211-2.211v-5.003h0Z" transform="translate(23.786 32.052) rotate(-180)"/><line x1="12" y1="4.291" x2="12" y2="6.397"/></svg>`},
}

class NociButton extends GridIcon {
    constructor(info, g) {
        info.type = {theme: info.theme || "noci", card: false}
        super(info, g)
        this.displayValueElement?.adjustFS();
    }

    onresize(...args) {
        super.onresize(...args);
        this.displayValueElement?.adjustFS();
    }

    set selected(bool) {
        this.toggleAttribute("selected", bool)
    }
}

class OptionSelectedEvent extends AccessEvent {
    constructor(e, option) {
        super("option-selected", e, {bubbles: true});
        this.option = option;
    }
}


class QuestionOption extends NociButton {
    constructor(option) {
        super({
            theme: "noci-answer",
            displayValue: option.title,
            symbol: option.image ? option.image.resolvedSrc : null,
            events: {
                "access-click": (e) => {
                    this.dispatchEvent(new OptionSelectedEvent(e, option));
                }
            }
        }, "options");

        this.option = option;
    }
}

class QuestionLabel extends SvgPlus {
    constructor(option) {
        super("div");
        this.class = "question-label";
        this.textContent = option.label;
    }
}

class QuestionOptions extends SvgPlus {
    constructor(optionsList) {
        super("question-options");
        this.labelsGrid = this.createChild(GridLayout, {class: "labels-grid"}, 1, 1);
        this.buttonsGrid = this.createChild(GridLayout, {class: "buttons-grid"}, 1, 0);
        this.optionsList = optionsList;

        this.events = {
            "option-selected": (e) => {
                this.select(e.option.index);
            }
        }
    }

    set optionsList(optionsList) {
        this.buttonsGrid.innerHTML = "";
        this.labelsGrid.innerHTML = "";
        if (Array.isArray(optionsList)) {
            this.buttonsGrid.size = [1, optionsList.length];
            this.labelsGrid.size = [1, optionsList.length];
            optionsList = optionsList.map((o, index) => ({...o, index}))
            this.buttonsGrid.addItemInstances(QuestionOption, optionsList, 0,0);
            this.labelsGrid.addItemInstances(QuestionLabel, optionsList, 0,0);
            this.toggleAttribute("invalid", false);
        } else {
            this.toggleAttribute("invalid", true);
        }
    }

    select(index) {
        [...this.buttonsGrid.children].forEach((child, i) => {
            child.selected = i === index;
        });
    }


}

class QuestionPath extends GridLayout {
    constructor() {
        super(3,1);
        
        this.questionOptions = this.add(new QuestionOptions([]), 2, 0);
    }

    set path(path) {
        
    }
}

const gridStyles = GridIcon.styleSheet.replace(import.meta.resolve("../../Utilities"), "https://session.squidly.com.au/main")

class AssessmentView extends ShadowElement {
    #assessment = null;
    #state = {
        index: 0,
        answers: []
    }

    constructor() {
        super("assessment-view", new GridLayout(4,1));

        this.navIcons = this.root.add(new GridLayout(1,5), 0, 0);
        const infoArea =this.root.add(new SvgPlus("div"), [1,2], 0);
        infoArea.class = "col";
        this.progress = infoArea.createChild("div", {class: "assessment-progress"});
        this.questionInfo = infoArea.createChild("div", {class: "question-info"});
        this.questionOptions = this.root.add(new QuestionOptions([]), 3, 0);
        this.questionOptions.addEventListener("option-selected", (e) => {
            this.#state.answers[this.questionIndex] = e.option.index;
        });
    }

    updateProgress() {
        const p = this.progress;
        p.innerHTML = "";
        p.createChild("h1", {content: `${this.assessmentTitle} ${this.questionIndex + 1}/${this.totalQuestions}`});
        p.createChild("div", {
            class: "progress-bar", 
            role:"progressbar", 
            "aria-label": "Assessment progress",
            "aria-valuemin":"1",
            "aria-valuemax": this.totalQuestions,
            "aria-valuenow": this.questionIndex + 1,
            "aria-valuetext": "Question 1 of 13"
        }).createChild("div", {
            style: {width: (100 * (this.questionIndex + 1) / this.totalQuestions) + "%"}
        })
    }

    updateNavIcons() {
        this.navIcons.innerHTML = "";
        this.navIcons.addItemInstances(NociButton, [
            [
                null,
                {symbol: SYMBOLS.speak, displayValue: "speak", events: {"access-click": () => console.log("speak")}},
                {symbol: SYMBOLS.left, displayValue: "previous", events: {"access-click":  (e) => this.questionIndex--}},
                {symbol: SYMBOLS.home, displayValue: "home", events: {"access-click": () => console.log("home")}},
                this.questionIndex == this.totalQuestions - 1 ? 
                    {symbol: SYMBOLS.results, theme:"noci-invert", displayValue: "results", events: {"access-click": (e) => console.log("results")}} :
                    {symbol: SYMBOLS.right, displayValue: "next", events: {"access-click": (e) => this.questionIndex++}},
            ]
        ]);
    }

    updateQuestionPath(path) {
        this.questionOptions.optionsList = path[0].optionList;
        this.questionOptions.select(this.#state.answers[this.questionIndex]);
        this.questionInfo.innerHTML = "";
        let n = path.length;
        let cat;
        path.slice(0, -1).reverse().forEach((node, i) => {
            cat = this.questionInfo.createChild("div", {class: "category", depth: n - i - 2});
            if (node.title) cat.createChild("div", {content: node.title, class: "title"});
            if (node.description) cat.createChild("div", {content: node.description, class: "description"});
        })
        if (path[0].image) {
            this.questionInfo.createChild("div", {class: "image-container"})
                .createChild("img", {src: path[0].image.resolvedSrc, alt: path[0].image.alt});            
        }
    }

    /**
     * @param {?Assessment} value
     */
    set assessment(value) {
        if (value) {
            this.#assessment = value;
            let questions = value.flattenedQuestions;
            if (Array.isArray(questions) && questions.length > 0) {
                this.#state.answers = new Array(questions.length).fill(null);
                this.totalQuestions = questions.length;
                this.questionList = questions;
                this.questionIndex = 0;
            }
        }
    }
    get assessment() {
        return this.#assessment;
    }
    get assessmentTitle() {
        return this.#assessment?.title ?? null;
    }

    set questionIndex(index) {
        if (typeof index === "number" && index >= 0 && index < this.totalQuestions) {
            this.#state.index = index;
            this.updateQuestionPath(this.questionList[index]);
            this.updateNavIcons();
            this.updateProgress();
        }
    }

    get questionIndex() {
        return this.#state.index ?? 0;
    }

    set state(state) {
        if (state && typeof state === "object") {
            // TODO: no change then don't update
            this.#state.answers = Array.isArray(state.answers) ? state.answers : this.#state.answers;
            this.questionIndex = state.index ?? 0;
        }
    }

    get state() {
        return {
            index: this.questionIndex,
            answers: [...this.#state.answers]
        }
    }

    static get usedStyleSheets() {
        return [
            gridStyles,
            import.meta.resolve("./nview.css")
        ]
    }
}

export {AssessmentView}
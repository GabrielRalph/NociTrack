import { ShadowElement, SvgPlus } from "./Utilities/squidly-utils.js";
import { YAMLEditor } from "./Utilities/yaml-editor/yaml-editor.js";
import { Assessment } from "./DataModels/models.js";
import { AssessmentView } from "./UI/views/nview.js";

export class NociCMS extends ShadowElement {
    #selected = null;
    #assessment = null;
    #assessmentYAML = null;
    #changed = false;
    #data = null;
    EDITOR_TOOLS = [
        {
            name: "", 
            action: () => this.root.setAttribute("mode", "viewer"),
            class: "view icon"
        },
        {
            name: "", 
            class: "save icon",
            action: () => this.save()
        },
        {
            name: "", 
            class: "delete icon",
            action: () => this.delete()
        },
    ]
    VIEWER_TOOLS = [
        {
            name: "", 
            action: () => this.root.setAttribute("mode", "editor"),
            class: "edit icon"
        },
    ]

    constructor(el) {
        super(el, "div");

        this.header = this.createChild("div", {class: "header", innerHTML: `
            <h1>Noci CMS</h1>
        `});

        const main = this.createChild("div", {class: "main"});
        this.fileList = main.createChild("div", {
            class: "list",
            events: {
                click: () => this.select(null, true)
            }
        });
        
        const workSection = main.createChild("div", {class: "work-section"});

        this.editor = workSection.createChild("div", {class: "editor"});
        const editorTools = this.editor.createChild("div", {class: "editor-tools"});
        this.EDITOR_TOOLS.forEach(tool =>
            editorTools.createChild("button", {
                content: tool.name,
                class: tool.class ?? "",
                events: {click: tool.action}
            })
        );

        this.yamlEditor = this.editor.createChild(YAMLEditor, {
            events: {
                input: () => {
                    try {
                        const {jsonValue, value} = this.yamlEditor;
                        if (!jsonValue) return;
                        if (typeof jsonValue !== "object") throw new Error("YAML must resolve to an objects");
                        let assessment = Assessment.make(jsonValue);
                        this.#assessment = assessment;
                        this.#assessmentYAML = value.trim();
                        let isChange = this.#selected ? 
                            this.#data && this.#data[this.#selected] && this.#data[this.#selected].yaml !== this.#assessmentYAML
                            : true;
                        this.editor.toggleAttribute("no-change", !isChange);
                        this.editor.toggleAttribute("invalid", false);

                        if (this.assessmentView) {
                            this.assessmentView.assessment = assessment;
                        }
                        this.#changed = isChange;
                        this.triggerAutoSave();
                    } catch (e) {
                        this.#assessment = null;
                        this.#assessmentYAML = null;
                        this.editor.toggleAttribute("invalid", true);
                        this.editor.toggleAttribute("no-change", false);
                        this.#changed = true;
                        console.log("Invalid assessment, assessment must have a title.");
                        this.yamlEditor.showError(1,1,`Invalid assessment, assessment must have a title.`);
                    }
                }
            }
        });
        
        const viewer = workSection.createChild("div", {class: "viewer"});
        const viewerTools = viewer.createChild("div", {class: "viewer-tools"});
        this.VIEWER_TOOLS.forEach(tool =>
            viewerTools.createChild("button", {
                content: tool.name,
                events: {click: tool.action},
                class: tool.class ?? "",
            })
        );
        this.assessmentView = viewer.createChild(AssessmentView);

        this.root.setAttribute("mode", "editor");
        this.select(null);
    }


    triggerAutoSave() {
        if (this.autoSaveTimeout) {
            clearTimeout(this.autoSaveTimeout);
        }
        this.autoSaveTimeout = setTimeout(() => {
            this.autoSaveTimeout = null;
            if (this.#assessment && this.#selected && this.#changed) {
                this.save();
            }
        }, 3000);
    }

    async delete() {
        if (this.#selected) {
            await this.onDelete(this.#selected);
            this.select(null);
        }
    }

    async save() {
        if (!this.#assessment) {
            console.log("Cannot save invalid assessment");
        } else {
            console.log("Saving assessment", this.#assessment);
            const data = {
                title: this.#assessment.title,
                description: this.#assessment.description,
                yaml: this.#assessmentYAML
            }
            
            let key = this.#selected;
            if (!key) {
                key = Date.now().toString(36) + crypto.randomUUID();
            }
            await this.onSave(key, data);
            this.select(key);
        }
    }

    set data(data) {
        data = data || {};
        this.#data = data;
        this.fileList.innerHTML = "";
        for (const key in data) {
            this.fileList.createChild("div", {
                class: "list-item", 
                innerHTML: data[key].title,
                key: key,
                events: {click: (e) => {this.select(key, true); e.stopImmediatePropagation();}}
            });
        }

        if (this.#selected) {
            let selected = this.fileList.querySelector(`[key="${this.#selected}"]`);
            let selectedKey = this.#selected;
            if (!selected) {
                selectedKey = Object.keys(data)[0]
            } 
            this.select(selectedKey);
        }
    }

    select(key, allowToggle = false) {
        if (allowToggle && this.#selected === key) {
            key = null;
        }

        this.#selected = key;
        let selected = this.fileList.querySelector(`[key="${key}"]`);
        [...this.fileList.children].forEach(child => child.toggleAttribute("selected", child === selected));

        if (key && this.#data[key]) {
            const {yaml} = this.#data[key];
            this.yamlEditor.value = yaml + "\n\n";
            this.editor.toggleAttribute("no-change", true);
            this.editor.toggleAttribute("invalid", false);
            this.editor.toggleAttribute("new-file", false);
        } else {
            this.yamlEditor.value = "";
            this.editor.toggleAttribute("no-change", false);
            this.editor.toggleAttribute("invalid", true);
            this.editor.toggleAttribute("new-file", true);
            this.root.setAttribute("mode", "editor");
        }
    }

    static get usedStyleSheets() {
        return [
            import.meta.resolve("./noci-cms.css")
        ];
    }

    static define() {
        SvgPlus.defineHTMLElement(this, "noci-cms");
    }

    static async load() {
        await Promise.all([
            this.loadStyleSheets(),
            YAMLEditor.loadStyleSheets()
        ]); 
    }
}
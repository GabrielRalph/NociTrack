import * as ace from "../ace/ace-build-esm/index.js"
import "../ace/ace-build-esm/ext/language_tools.js";
import { ShadowElement } from "../squidly-utils.js";
import * as yaml from "./yaml.js"
import { images } from "../images.js";

const imagePathCompleter = {
  identifierRegexps: [/[a-zA-Z0-9_./-]/],
  triggerCharacters: ["/", ".", '"', "'"],

  getCompletions(editor, session, pos, prefix, callback) {
    const line = session.getLine(pos.row);
    const beforeCursor = line.slice(0, pos.column);

    const isImageField = /^\s*image\s*:\s*["']?[^"']*$/.test(beforeCursor);
    if (!isImageField) {
      callback(null, []);
      return;
    }

    callback(null, images.map((value) => ({
      caption: value,
      value,
      meta: "image"
    })));
  }
};

// langTools.addCompleter(imagePathCompleter);


export class YAMLEditor extends ShadowElement {
	/**
	 * @param {string|HTMLElement} el - The element or selector to initialize the editor in.
	 * @param {Partial<import("ace-code").Ace.EditorOptions>} options - Ace editor options.
	 * @example
	 */
	constructor(el = "yaml-editor", options) {
		super(el, "div");
		const context = ace.edit(this.root, options);
    	this.context = context;

		context.completers = [imagePathCompleter];
		context.renderer.attachToShadowRoot();
		context.setTheme("ace/theme/dawn");
		context.setKeyboardHandler("ace/keyboard/sublime");
		context.setOptions({
			enableBasicAutocompletion: true,
			enableLiveAutocompletion: true,
		});
		context.session.setMode("ace/mode/yaml2");
		context.session.on("change", () => this.onEditorChange());
	}

	onEditorChange() {
		try {
			this._json = yaml.load(this.value);
			this.clearError();
		} catch (e) {
			const line = e?.mark?.line ?? 1;
			const column = e?.mark?.column ?? 0;
			const reason = e?.reason ?? e?.message ?? "Invalid YAML";
			this._json = null;
			this.showError(line, column, reason);
		}

		this.dispatchEvent(new CustomEvent("input", { bubbles: true }));
	}

	showError(line, column, reason) {
		this.context.session.setAnnotations([{
			row: line - 1,
			column: column,
			text: reason,
			type: "error"
		}]);
	}

	clearError() {
		this.context.session.clearAnnotations();
	}


  get jsonValue() {
    return this._json;
  }

	set value(value) {
		if (value.trim() !== this.value.trim()) {
			this.context.setValue(value, -1);
		}
	}
	get value() {
		return this.context.getValue();
	}

	static get usedStyleSheets() {
		return [
			import.meta.resolve("./yaml-editor.css"),
			import.meta.resolve("./yaml-dawn-override.css")
		];
	}
}


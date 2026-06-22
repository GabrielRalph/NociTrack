import {
  require_javascript_highlight_rules
} from "./chunk-IWXN4N2Q.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/typescript_highlight_rules.js
var require_typescript_highlight_rules = __commonJS({
  "src/mode/typescript_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var JavaScriptHighlightRules = require_javascript_highlight_rules().JavaScriptHighlightRules;
    var TypeScriptHighlightRules = function(options) {
      var tsRules = [
        // Match stuff like: function name: return type)
        {
          token: ["storage.type", "text", "entity.name.function.ts"],
          regex: "(function)(\\s+)([a-zA-Z0-9$_\xA1-\uFFFF][a-zA-Z0-9d$_\xA1-\uFFFF]*)"
        },
        {
          token: "keyword",
          regex: "(?:\\b(constructor|declare|interface|as|AS|public|private|extends|export|super|readonly|module|namespace|abstract|implements)\\b)"
        },
        {
          token: ["keyword", "storage.type.variable.ts"],
          regex: "(class|type)(\\s+[a-zA-Z0-9_?.$][\\w?.$]*)"
        },
        {
          token: "keyword",
          regex: "\\b(?:super|export|import|keyof|infer)\\b"
        },
        {
          token: ["storage.type.variable.ts"],
          regex: "(?:\\b(this\\.|string\\b|bool\\b|boolean\\b|number\\b|true\\b|false\\b|undefined\\b|any\\b|null\\b|(?:unique )?symbol\\b|object\\b|never\\b|enum\\b))"
        }
      ];
      var JSRules = new JavaScriptHighlightRules({ jsx: (options && options.jsx) == true }).getRules();
      JSRules.no_regex = tsRules.concat(JSRules.no_regex);
      this.$rules = JSRules;
    };
    oop.inherits(TypeScriptHighlightRules, JavaScriptHighlightRules);
    exports.TypeScriptHighlightRules = TypeScriptHighlightRules;
  }
});

export {
  require_typescript_highlight_rules
};

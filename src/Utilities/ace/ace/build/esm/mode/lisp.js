import {
  require_text,
  require_text_highlight_rules
} from "../chunk-QXTEMBPD.js";
import "../chunk-VVYM7U3C.js";
import "../chunk-GLBKRGPE.js";
import "../chunk-WVZ3WZY2.js";
import "../chunk-ZYSXI253.js";
import "../chunk-BPTL7YIQ.js";
import "../chunk-MF4T7I5J.js";
import {
  require_oop
} from "../chunk-WAWTRYJW.js";
import "../chunk-CVMYQKGX.js";
import "../chunk-NNGFYYI3.js";
import "../chunk-3SNEZHBJ.js";
import "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/lisp_highlight_rules.js
var require_lisp_highlight_rules = __commonJS({
  "src/mode/lisp_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var LispHighlightRules = function() {
      var keywordControl = "case|do|let|loop|if|else|when";
      var keywordOperator = "eq|neq|and|or";
      var constantLanguage = "null|nil";
      var supportFunctions = "cons|car|cdr|cond|lambda|format|setq|setf|quote|eval|append|list|listp|memberp|t|load|progn";
      var keywordMapper = this.createKeywordMapper({
        "keyword.control": keywordControl,
        "keyword.operator": keywordOperator,
        "constant.language": constantLanguage,
        "support.function": supportFunctions
      }, "identifier", true);
      this.$rules = {
        "start": [
          {
            token: "comment",
            regex: ";.*$"
          },
          {
            token: ["storage.type.function-type.lisp", "text", "entity.name.function.lisp"],
            regex: "(?:\\b(?:(defun|defmethod|defmacro))\\b)(\\s+)((?:\\w|\\-|\\!|\\?)*)"
          },
          {
            token: ["punctuation.definition.constant.character.lisp", "constant.character.lisp"],
            regex: `(#)((?:\\w|[\\\\+-=<>'"&#])+)`
          },
          {
            token: ["punctuation.definition.variable.lisp", "variable.other.global.lisp", "punctuation.definition.variable.lisp"],
            regex: "(\\*)(\\S*)(\\*)"
          },
          {
            token: "constant.numeric",
            // hex
            regex: "0[xX][0-9a-fA-F]+(?:L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"
          },
          {
            token: "constant.numeric",
            // float
            regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(?:L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"
          },
          {
            token: keywordMapper,
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
          },
          {
            token: "string",
            regex: '"(?=.)',
            next: "qqstring"
          }
        ],
        "qqstring": [
          {
            token: "constant.character.escape.lisp",
            regex: "\\\\."
          },
          {
            token: "string",
            regex: '[^"\\\\]+'
          },
          {
            token: "string",
            regex: "\\\\$",
            next: "qqstring"
          },
          {
            token: "string",
            regex: '"|$',
            next: "start"
          }
        ]
      };
    };
    oop.inherits(LispHighlightRules, TextHighlightRules);
    exports.LispHighlightRules = LispHighlightRules;
  }
});

// src/mode/lisp.js
var require_lisp = __commonJS({
  "src/mode/lisp.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var LispHighlightRules = require_lisp_highlight_rules().LispHighlightRules;
    var Mode = function() {
      this.HighlightRules = LispHighlightRules;
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = ";";
      this.$id = "ace/mode/lisp";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_lisp();

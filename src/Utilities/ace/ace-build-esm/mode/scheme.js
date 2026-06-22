import {
  require_matching_parens_outdent
} from "../chunk-6Y7R52PD.js";
import {
  require_text,
  require_text_highlight_rules
} from "../chunk-LMYBRGOM.js";
import "../chunk-VVYM7U3C.js";
import "../chunk-GLBKRGPE.js";
import "../chunk-7QZ52OVG.js";
import "../chunk-V24LW3SD.js";
import "../chunk-BPTL7YIQ.js";
import "../chunk-MF4T7I5J.js";
import {
  require_oop
} from "../chunk-WAWTRYJW.js";
import "../chunk-MUUMEFKV.js";
import "../chunk-NNGFYYI3.js";
import "../chunk-3SNEZHBJ.js";
import "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/scheme_highlight_rules.js
var require_scheme_highlight_rules = __commonJS({
  "src/mode/scheme_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var SchemeHighlightRules = function() {
      var keywordControl = "case|do|let|loop|if|else|when";
      var keywordOperator = "eq?|eqv?|equal?|and|or|not|null?";
      var constantLanguage = "#t|#f";
      var supportFunctions = "cons|car|cdr|cond|lambda|lambda*|syntax-rules|format|set!|quote|eval|append|list|list?|member?|load";
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
            "token": ["storage.type.function-type.scheme", "text", "entity.name.function.scheme"],
            "regex": "(?:\\b(?:(define|define-syntax|define-macro))\\b)(\\s+)((?:\\w|\\-|\\!|\\?)*)"
          },
          {
            "token": "punctuation.definition.constant.character.scheme",
            "regex": "#:\\S+"
          },
          {
            "token": ["punctuation.definition.variable.scheme", "variable.other.global.scheme", "punctuation.definition.variable.scheme"],
            "regex": "(\\*)(\\S*)(\\*)"
          },
          {
            "token": "constant.numeric",
            // hex
            "regex": "#[xXoObB][0-9a-fA-F]+"
          },
          {
            "token": "constant.numeric",
            // float
            "regex": "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?"
          },
          {
            "token": keywordMapper,
            "regex": "[a-zA-Z_#][a-zA-Z0-9_\\-\\?\\!\\*]*"
          },
          {
            "token": "string",
            "regex": '"(?=.)',
            "next": "qqstring"
          }
        ],
        "qqstring": [
          {
            "token": "constant.character.escape.scheme",
            "regex": "\\\\."
          },
          {
            "token": "string",
            "regex": '[^"\\\\]+',
            "merge": true
          },
          {
            "token": "string",
            "regex": "\\\\$",
            "next": "qqstring",
            "merge": true
          },
          {
            "token": "string",
            "regex": '"|$',
            "next": "start",
            "merge": true
          }
        ]
      };
    };
    oop.inherits(SchemeHighlightRules, TextHighlightRules);
    exports.SchemeHighlightRules = SchemeHighlightRules;
  }
});

// src/mode/scheme.js
var require_scheme = __commonJS({
  "src/mode/scheme.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var SchemeHighlightRules = require_scheme_highlight_rules().SchemeHighlightRules;
    var MatchingParensOutdent = require_matching_parens_outdent().MatchingParensOutdent;
    var Mode = function() {
      this.HighlightRules = SchemeHighlightRules;
      this.$outdent = new MatchingParensOutdent();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = ";";
      this.minorIndentFunctions = ["define", "lambda", "define-macro", "define-syntax", "syntax-rules", "define-record-type", "define-structure"];
      this.$toIndent = function(str) {
        return str.split("").map(function(ch) {
          if (/\s/.exec(ch)) {
            return ch;
          } else {
            return " ";
          }
        }).join("");
      };
      this.$calculateIndent = function(line, tab) {
        var baseIndent = this.$getIndent(line);
        var delta = 0;
        var isParen, ch;
        for (var i = line.length - 1; i >= 0; i--) {
          ch = line[i];
          if (ch === "(") {
            delta--;
            isParen = true;
          } else if (ch === "(" || ch === "[" || ch === "{") {
            delta--;
            isParen = false;
          } else if (ch === ")" || ch === "]" || ch === "}") {
            delta++;
          }
          if (delta < 0) {
            break;
          }
        }
        if (delta < 0 && isParen) {
          i += 1;
          var iBefore = i;
          var fn = "";
          while (true) {
            ch = line[i];
            if (ch === " " || ch === "	") {
              if (this.minorIndentFunctions.indexOf(fn) !== -1) {
                return this.$toIndent(line.substring(0, iBefore - 1) + tab);
              } else {
                return this.$toIndent(line.substring(0, i + 1));
              }
            } else if (ch === void 0) {
              return this.$toIndent(line.substring(0, iBefore - 1) + tab);
            }
            fn += line[i];
            i++;
          }
        } else if (delta < 0 && !isParen) {
          return this.$toIndent(line.substring(0, i + 1));
        } else if (delta > 0) {
          baseIndent = baseIndent.substring(0, baseIndent.length - tab.length);
          return baseIndent;
        } else {
          return baseIndent;
        }
      };
      this.getNextLineIndent = function(state, line, tab) {
        return this.$calculateIndent(line, tab);
      };
      this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
      };
      this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
      };
      this.$id = "ace/mode/scheme";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_scheme();

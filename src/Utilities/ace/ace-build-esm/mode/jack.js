import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
import "../chunk-JEWW6F7O.js";
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

// src/mode/jack_highlight_rules.js
var require_jack_highlight_rules = __commonJS({
  "src/mode/jack_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var JackHighlightRules = function() {
      this.$rules = {
        "start": [
          {
            token: "string",
            regex: '"',
            next: "string2"
          },
          {
            token: "string",
            regex: "'",
            next: "string1"
          },
          {
            token: "constant.numeric",
            // hex
            regex: "-?0[xX][0-9a-fA-F]+\\b"
          },
          {
            token: "constant.numeric",
            // float
            regex: "(?:0|[-+]?[1-9][0-9]*)\\b"
          },
          {
            token: "constant.binary",
            regex: "<[0-9A-Fa-f][0-9A-Fa-f](\\s+[0-9A-Fa-f][0-9A-Fa-f])*>"
          },
          {
            token: "constant.language.boolean",
            regex: "(?:true|false)\\b"
          },
          {
            token: "constant.language.null",
            regex: "null\\b"
          },
          {
            token: "storage.type",
            regex: "(?:Integer|Boolean|Null|String|Buffer|Tuple|List|Object|Function|Coroutine|Form)\\b"
          },
          {
            token: "keyword",
            regex: "(?:return|abort|vars|for|delete|in|is|escape|exec|split|and|if|elif|else|while)\\b"
          },
          {
            token: "language.builtin",
            regex: "(?:lines|source|parse|read-stream|interval|substr|parseint|write|print|range|rand|inspect|bind|i-values|i-pairs|i-map|i-filter|i-chunk|i-all\\?|i-any\\?|i-collect|i-zip|i-merge|i-each)\\b"
          },
          {
            token: "comment",
            regex: "--.*$"
          },
          {
            token: "paren.lparen",
            regex: "[[({]"
          },
          {
            token: "paren.rparen",
            regex: "[\\])}]"
          },
          {
            token: "storage.form",
            regex: "@[a-z]+"
          },
          {
            token: "constant.other.symbol",
            regex: ":+[a-zA-Z_]([-]?[a-zA-Z0-9_])*[?!]?"
          },
          {
            token: "variable",
            regex: "[a-zA-Z_]([-]?[a-zA-Z0-9_])*[?!]?"
          },
          {
            token: "keyword.operator",
            regex: "\\|\\||\\^\\^|&&|!=|==|<=|<|>=|>|\\+|-|\\*|\\/|\\^|\\%|\\#|\\!"
          },
          {
            token: "text",
            regex: "\\s+"
          }
        ],
        "string1": [
          {
            token: "constant.language.escape",
            regex: /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|['"\\\/bfnrt])/
          },
          {
            token: "string",
            regex: "[^'\\\\]+"
          },
          {
            token: "string",
            regex: "'",
            next: "start"
          },
          {
            token: "string",
            regex: "",
            next: "start"
          }
        ],
        "string2": [
          {
            token: "constant.language.escape",
            regex: /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|['"\\\/bfnrt])/
          },
          {
            token: "string",
            regex: '[^"\\\\]+'
          },
          {
            token: "string",
            regex: '"',
            next: "start"
          },
          {
            token: "string",
            regex: "",
            next: "start"
          }
        ]
      };
    };
    oop.inherits(JackHighlightRules, TextHighlightRules);
    exports.JackHighlightRules = JackHighlightRules;
  }
});

// src/mode/jack.js
var require_jack = __commonJS({
  "src/mode/jack.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var HighlightRules = require_jack_highlight_rules().JackHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = HighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = this.$defaultBehaviour;
      this.foldingRules = new CStyleFoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "--";
      this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        if (state == "start") {
          var match = line.match(/^.*[\{\(\[]\s*$/);
          if (match) {
            indent += tab;
          }
        }
        return indent;
      };
      this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
      };
      this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
      };
      this.$id = "ace/mode/jack";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_jack();

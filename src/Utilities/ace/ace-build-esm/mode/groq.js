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

// src/mode/groq_highlight_rules.js
var require_groq_highlight_rules = __commonJS({
  "src/mode/groq_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var KNOWN_FUNCTIONS = "after|before|boost|coalesce|count|dateTime|defined|identity|length|lower|now|order|path|references|round|score|select|string|upper";
    var KEYWORD_OPERATORS = "in|match|asc|desc";
    var GroqHighlightRules = function() {
      this.$rules = {
        "start": [
          {
            token: "comment.line",
            regex: /\/\/.*$/
          },
          {
            token: "string.quoted.double",
            regex: /"/,
            next: "string_double"
          },
          {
            token: "string.quoted.single",
            regex: /'/,
            next: "string_single"
          },
          {
            token: "constant.numeric",
            regex: /-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?(?!\w)/
          },
          {
            token: "constant.language",
            regex: /\b(?:true|false|null)\b/
          },
          {
            token: "keyword.control",
            regex: new RegExp("\\b(?:" + KEYWORD_OPERATORS + ")\\b")
          },
          {
            token: ["entity.name.tag", "punctuation.namespace", "support.function"],
            regex: /(\b[a-zA-Z_]\w*)(::)([a-zA-Z_]\w*(?=\s*\())/
          },
          {
            token: "support.function",
            regex: new RegExp("\\b(?:" + KNOWN_FUNCTIONS + ")\\b(?=\\s*\\()")
          },
          {
            token: "variable",
            regex: /\$[a-zA-Z_]\w*/
          },
          {
            token: "variable.language",
            regex: /@|\^+/
          },
          {
            token: "constant.language.wildcard",
            regex: /\*(?=\s*[\[{|)\],}]|\s*$)/
          },
          {
            token: "keyword.operator.spread",
            regex: /\.\.\./
          },
          {
            token: "keyword.operator.dereference",
            regex: /->/
          },
          {
            token: "keyword.operator.range",
            regex: /\.\.(?!\.)/
          },
          {
            token: "keyword.operator.pipe",
            regex: /\|(?!\|)/
          },
          {
            token: "keyword.operator.arrow",
            regex: /=>/
          },
          {
            token: "keyword.operator",
            regex: /[!=<>]=|&&|\|\||[!+\-*/%]|\*\*/
          },
          {
            token: "punctuation.accessor",
            regex: /\.(?!\.)/
          },
          {
            token: "paren.lparen",
            regex: /[\[{(]/
          },
          {
            token: "paren.rparen",
            regex: /[\]})]/
          },
          {
            token: "punctuation",
            regex: /[,:;]/
          },
          {
            token: "identifier",
            regex: /[a-zA-Z_]\w*/
          }
        ],
        "string_double": [
          {
            token: "constant.character.escape",
            regex: /\\(?:[\\/"'bfnrt]|u[0-9a-fA-F]{4}|u\{[0-9a-fA-F]+\})/
          },
          {
            token: "string.quoted.double",
            regex: /"/,
            next: "start"
          },
          {
            defaultToken: "string.quoted.double"
          }
        ],
        "string_single": [
          {
            token: "constant.character.escape",
            regex: /\\(?:[\\/"'bfnrt]|u[0-9a-fA-F]{4}|u\{[0-9a-fA-F]+\})/
          },
          {
            token: "string.quoted.single",
            regex: /'/,
            next: "start"
          },
          {
            defaultToken: "string.quoted.single"
          }
        ]
      };
      this.normalizeRules();
    };
    oop.inherits(GroqHighlightRules, TextHighlightRules);
    exports.GroqHighlightRules = GroqHighlightRules;
  }
});

// src/mode/groq.js
var require_groq = __commonJS({
  "src/mode/groq.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var HighlightRules = require_groq_highlight_rules().GroqHighlightRules;
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
      this.lineCommentStart = "//";
      this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
      };
      this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
      };
      this.$id = "ace/mode/groq";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_groq();

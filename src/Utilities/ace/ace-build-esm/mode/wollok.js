import {
  require_javascript3 as require_javascript
} from "../chunk-WK3XC3NH.js";
import "../chunk-U2RKG7VZ.js";
import "../chunk-IWXN4N2Q.js";
import "../chunk-5GQPFTLG.js";
import {
  require_doc_comment_highlight_rules
} from "../chunk-KWFYXSQI.js";
import "../chunk-67VAGNRS.js";
import "../chunk-5O3J7W3G.js";
import "../chunk-JEWW6F7O.js";
import {
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

// src/mode/wollok_highlight_rules.js
var require_wollok_highlight_rules = __commonJS({
  "src/mode/wollok_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var DocCommentHighlightRules = require_doc_comment_highlight_rules().DocCommentHighlightRules;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var WollokHighlightRules = function() {
      var keywords = "test|describe|package|inherits|false|import|else|or|class|and|not|native|override|program|self|try|const|var|catch|object|super|throw|if|null|return|true|new|constructor|method|mixin";
      var buildinConstants = "null|assert|console";
      var langClasses = "Object|Pair|String|Boolean|Number|Integer|Double|Collection|Set|List|Exception|Range|StackTraceElement";
      var keywordMapper = this.createKeywordMapper({
        "variable.language": "self",
        "keyword": keywords,
        "constant.language": buildinConstants,
        "support.function": langClasses
      }, "identifier");
      this.$rules = {
        "start": [
          {
            token: "comment",
            regex: "\\/\\/.*$"
          },
          DocCommentHighlightRules.getStartRule("doc-start"),
          {
            token: "comment",
            // multi line comment
            regex: "\\/\\*",
            next: "comment"
          },
          {
            token: "string",
            // single line
            regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
          },
          {
            token: "string",
            // single line
            regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
          },
          {
            token: "constant.numeric",
            // hex
            regex: /0(?:[xX][0-9a-fA-F][0-9a-fA-F_]*|[bB][01][01_]*)[LlSsDdFfYy]?\b/
          },
          {
            token: "constant.numeric",
            // float
            regex: /[+-]?\d[\d_]*(?:(?:\.[\d_]*)?(?:[eE][+-]?[\d_]+)?)?[LlSsDdFfYy]?\b/
          },
          {
            token: "constant.language.boolean",
            regex: "(?:true|false)\\b"
          },
          {
            token: keywordMapper,
            // TODO: Unicode escape sequences
            // TODO: Unicode identifiers
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
          },
          {
            token: "keyword.operator",
            regex: "===|&&|\\*=|\\.\\.|\\*\\*|#|!|%|\\*|\\?:|\\+|\\/|,|\\+=|\\-|\\.\\.<|!==|:|\\/=|\\?\\.|\\+\\+|>|=|<|>=|=>|==|\\]|\\[|\\-=|\\->|\\||\\-\\-|<>|!=|%=|\\|"
          },
          {
            token: "lparen",
            regex: "[[({]"
          },
          {
            token: "rparen",
            regex: "[\\])}]"
          },
          {
            token: "text",
            regex: "\\s+"
          }
        ],
        "comment": [
          {
            token: "comment",
            // closing comment
            regex: ".*?\\*\\/",
            next: "start"
          },
          {
            token: "comment",
            // comment spanning whole line
            regex: ".+"
          }
        ]
      };
      this.embedRules(
        DocCommentHighlightRules,
        "doc-",
        [DocCommentHighlightRules.getEndRule("start")]
      );
    };
    oop.inherits(WollokHighlightRules, TextHighlightRules);
    exports.WollokHighlightRules = WollokHighlightRules;
  }
});

// src/mode/wollok.js
var require_wollok = __commonJS({
  "src/mode/wollok.js"(exports) {
    var oop = require_oop();
    var JavaScriptMode = require_javascript().Mode;
    var WollokHighlightRules = require_wollok_highlight_rules().WollokHighlightRules;
    var Mode = function() {
      JavaScriptMode.call(this);
      this.HighlightRules = WollokHighlightRules;
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, JavaScriptMode);
    (function() {
      this.createWorker = function(session) {
        return null;
      };
      this.$id = "ace/mode/wollok";
      this.snippetFileId = "ace/snippets/wollok";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_wollok();

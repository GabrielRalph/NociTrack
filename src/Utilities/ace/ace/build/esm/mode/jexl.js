import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
import "../chunk-JEWW6F7O.js";
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

// src/mode/jexl_highlight_rules.js
var require_jexl_highlight_rules = __commonJS({
  "src/mode/jexl_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var JexlHighlightRules = function() {
      var keywords = "return|var|function|and|or|not|if|for|while|do|continue|break";
      var buildinConstants = "null";
      var supportFunc = "empty|size|new";
      var keywordMapper = this.createKeywordMapper({
        "keyword": keywords,
        "constant.language": buildinConstants,
        "support.function": supportFunc
      }, "identifier");
      var escapedRe = "\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}||.)";
      this.$rules = {
        "start": [
          {
            token: "comment",
            regex: "\\/\\/.*$"
          },
          {
            token: "comment",
            regex: "##.*$"
          },
          {
            token: "comment",
            // multi line comment
            regex: "\\/\\*",
            next: "comment"
          },
          {
            token: ["comment", "text"],
            regex: "(#pragma)(\\s.*$)"
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
            token: "string",
            // multi line string
            regex: "`",
            push: [
              {
                token: "constant.language.escape",
                regex: escapedRe
              },
              {
                token: "string",
                regex: "`",
                next: "pop"
              },
              {
                token: "lparen",
                //interpolation
                regex: "\\${",
                push: [
                  {
                    token: "rparen",
                    regex: "}",
                    next: "pop"
                  },
                  {
                    include: "start"
                  }
                ]
              },
              {
                defaultToken: "string"
              }
            ]
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
            token: "string.regexp",
            regex: "~/",
            push: [
              {
                token: "constant.language.escape",
                regex: "\\\\/"
              },
              {
                token: "string.regexp",
                regex: "$|/",
                next: "pop"
              },
              {
                defaultToken: "string.regexp"
              }
            ]
          },
          {
            token: keywordMapper,
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
          },
          {
            token: "keyword.operator",
            regex: "&&|\\|\\||!|&|\\||\\^|~|\\?|:|\\?\\?|==|!=|<|<=|>|>=|=~|!~|=\\^|=\\$|!\\$|\\+|\\-|\\*|%|\\/|="
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
          },
          {
            token: "punctuation",
            regex: "[,.]"
          },
          {
            token: "storage.type.annotation",
            regex: "@[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
          }
        ],
        "comment": [
          {
            token: "comment",
            regex: "\\*\\/",
            next: "start"
          },
          {
            defaultToken: "comment"
          }
        ]
      };
      this.normalizeRules();
    };
    oop.inherits(JexlHighlightRules, TextHighlightRules);
    exports.JexlHighlightRules = JexlHighlightRules;
  }
});

// src/mode/jexl.js
var require_jexl = __commonJS({
  "src/mode/jexl.js"(exports) {
    var oop = require_oop();
    var JexlHighlightRules = require_jexl_highlight_rules().JexlHighlightRules;
    var TextMode = require_text().Mode;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = JexlHighlightRules;
      this.$behaviour = this.$defaultBehaviour;
      this.foldingRules = new CStyleFoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = ["//", "##"];
      this.blockComment = { start: "/*", end: "*/" };
      this.$id = "ace/mode/jexl";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_jexl();

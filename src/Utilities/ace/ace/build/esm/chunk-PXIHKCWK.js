import {
  require_text_highlight_rules
} from "./chunk-QXTEMBPD.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/json_highlight_rules.js
var require_json_highlight_rules = __commonJS({
  "src/mode/json_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var JsonHighlightRules = function() {
      this.$rules = {
        "start": [
          {
            token: "variable",
            // single line
            regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'
          },
          {
            token: "string",
            // single line
            regex: '"',
            next: "string"
          },
          {
            token: "constant.numeric",
            // hex
            regex: "0[xX][0-9a-fA-F]+\\b"
          },
          {
            token: "constant.numeric",
            // float
            regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
          },
          {
            token: "constant.language.boolean",
            regex: "(?:true|false)\\b"
          },
          {
            token: "text",
            // single quoted strings are not allowed
            regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
          },
          {
            token: "comment",
            // comments are not allowed, but who cares?
            regex: "\\/\\/.*$"
          },
          {
            token: "comment.start",
            // comments are not allowed, but who cares?
            regex: "\\/\\*",
            next: "comment"
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
            token: "punctuation.operator",
            regex: /[,]/
          },
          {
            token: "text",
            regex: "\\s+"
          }
        ],
        "string": [
          {
            token: "constant.language.escape",
            regex: /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/
          },
          {
            token: "string",
            regex: '"|$',
            next: "start"
          },
          {
            defaultToken: "string"
          }
        ],
        "comment": [
          {
            token: "comment.end",
            // comments are not allowed, but who cares?
            regex: "\\*\\/",
            next: "start"
          },
          {
            defaultToken: "comment"
          }
        ]
      };
    };
    oop.inherits(JsonHighlightRules, TextHighlightRules);
    exports.JsonHighlightRules = JsonHighlightRules;
  }
});

export {
  require_json_highlight_rules
};

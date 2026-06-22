import {
  require_tex_highlight_rules
} from "./chunk-FKWH2OFK.js";
import {
  require_text_highlight_rules
} from "./chunk-LMYBRGOM.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  require_lang
} from "./chunk-NNGFYYI3.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/r_highlight_rules.js
var require_r_highlight_rules = __commonJS({
  "src/mode/r_highlight_rules.js"(exports) {
    var oop = require_oop();
    var lang = require_lang();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var TexHighlightRules = require_tex_highlight_rules().TexHighlightRules;
    var RHighlightRules = function() {
      var keywords = lang.arrayToMap(
        "function|if|in|break|next|repeat|else|for|return|switch|while|try|tryCatch|stop|warning|require|library|attach|detach|source|setMethod|setGeneric|setGroupGeneric|setClass".split("|")
      );
      var buildinConstants = lang.arrayToMap(
        "NULL|NA|TRUE|FALSE|T|F|Inf|NaN|NA_integer_|NA_real_|NA_character_|NA_complex_".split("|")
      );
      this.$rules = {
        "start": [
          {
            // Roxygen
            token: "comment.sectionhead",
            regex: "#+(?!').*(?:----|====|####)\\s*$"
          },
          {
            // Roxygen
            token: "comment",
            regex: "#+'",
            next: "rd-start"
          },
          {
            token: "comment",
            regex: "#.*$"
          },
          {
            token: "string",
            // multi line string start
            regex: '["]',
            next: "qqstring"
          },
          {
            token: "string",
            // multi line string start
            regex: "[']",
            next: "qstring"
          },
          {
            token: "constant.numeric",
            // hex
            regex: "0[xX][0-9a-fA-F]+[Li]?\\b"
          },
          {
            token: "constant.numeric",
            // explicit integer
            regex: "\\d+L\\b"
          },
          {
            token: "constant.numeric",
            // number
            regex: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b"
          },
          {
            token: "constant.numeric",
            // number with leading decimal
            regex: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b"
          },
          {
            token: "constant.language.boolean",
            regex: "(?:TRUE|FALSE|T|F)\\b"
          },
          {
            token: "identifier",
            regex: "`.*?`"
          },
          {
            onMatch: function(value) {
              if (keywords[value])
                return "keyword";
              else if (buildinConstants[value])
                return "constant.language";
              else if (value == "..." || value.match(/^\.\.\d+$/))
                return "variable.language";
              else
                return "identifier";
            },
            regex: "[a-zA-Z.][a-zA-Z0-9._]*\\b"
          },
          {
            token: "keyword.operator",
            regex: "%%|>=|<=|==|!=|\\->|<\\-|\\|\\||&&|=|\\+|\\-|\\*|/|\\^|>|<|!|&|\\||~|\\$|:"
          },
          {
            token: "keyword.operator",
            // infix operators
            regex: "%.*?%"
          },
          {
            // Obviously these are neither keywords nor operators, but
            // labelling them as such was the easiest way to get them
            // to be colored distinctly from regular text
            token: "paren.keyword.operator",
            regex: "[[({]"
          },
          {
            // Obviously these are neither keywords nor operators, but
            // labelling them as such was the easiest way to get them
            // to be colored distinctly from regular text
            token: "paren.keyword.operator",
            regex: "[\\])}]"
          },
          {
            token: "text",
            regex: "\\s+"
          }
        ],
        "qqstring": [
          {
            token: "string",
            regex: '(?:(?:\\\\.)|(?:[^"\\\\]))*?"',
            next: "start"
          },
          {
            token: "string",
            regex: ".+"
          }
        ],
        "qstring": [
          {
            token: "string",
            regex: "(?:(?:\\\\.)|(?:[^'\\\\]))*?'",
            next: "start"
          },
          {
            token: "string",
            regex: ".+"
          }
        ]
      };
      var rdRules = new TexHighlightRules("comment").getRules();
      for (var i = 0; i < rdRules["start"].length; i++) {
        rdRules["start"][i].token += ".virtual-comment";
      }
      this.addRules(rdRules, "rd-");
      this.$rules["rd-start"].unshift({
        token: "text",
        regex: "^",
        next: "start"
      });
      this.$rules["rd-start"].unshift({
        token: "keyword",
        regex: "@(?!@)[^ ]*"
      });
      this.$rules["rd-start"].unshift({
        token: "comment",
        regex: "@@"
      });
      this.$rules["rd-start"].push({
        token: "comment",
        regex: "[^%\\\\[({\\])}]+"
      });
    };
    oop.inherits(RHighlightRules, TextHighlightRules);
    exports.RHighlightRules = RHighlightRules;
  }
});

export {
  require_r_highlight_rules
};

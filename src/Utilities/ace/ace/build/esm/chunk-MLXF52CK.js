import {
  require_text_highlight_rules
} from "./chunk-QXTEMBPD.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  require_lang
} from "./chunk-NNGFYYI3.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/tex_highlight_rules.js
var require_tex_highlight_rules = __commonJS({
  "src/mode/tex_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var lang = require_lang();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var TexHighlightRules = function(textClass) {
      if (!textClass)
        textClass = "text";
      this.$rules = {
        "start": [
          {
            token: "comment",
            regex: "%.*$"
          },
          {
            token: textClass,
            // non-command
            regex: "\\\\[$&%#\\{\\}]"
          },
          {
            token: "keyword",
            // command
            regex: "\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\b",
            next: "nospell"
          },
          {
            token: "keyword",
            // command
            regex: "\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])"
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
            token: textClass,
            regex: "\\s+"
          }
        ],
        // This mode is necessary to prevent spell checking, but to keep the
        // same syntax highlighting behavior. The list of commands comes from
        // Texlipse.
        "nospell": [
          {
            token: "comment",
            regex: "%.*$",
            next: "start"
          },
          {
            token: "nospell." + textClass,
            // non-command
            regex: "\\\\[$&%#\\{\\}]"
          },
          {
            token: "keyword",
            // command
            regex: "\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\b"
          },
          {
            token: "keyword",
            // command
            regex: "\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])",
            next: "start"
          },
          {
            token: "paren.keyword.operator",
            regex: "[[({]"
          },
          {
            token: "paren.keyword.operator",
            regex: "[\\])]"
          },
          {
            token: "paren.keyword.operator",
            regex: "}",
            next: "start"
          },
          {
            token: "nospell." + textClass,
            regex: "\\s+"
          },
          {
            token: "nospell." + textClass,
            regex: "\\w+"
          }
        ]
      };
    };
    oop.inherits(TexHighlightRules, TextHighlightRules);
    exports.TexHighlightRules = TexHighlightRules;
  }
});

export {
  require_tex_highlight_rules
};

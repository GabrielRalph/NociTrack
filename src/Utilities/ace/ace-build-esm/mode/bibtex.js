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

// src/mode/bibtex_highlight_rules.js
var require_bibtex_highlight_rules = __commonJS({
  "src/mode/bibtex_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var BibTeXHighlightRules = function() {
      this.$rules = {
        start: [
          {
            token: "comment",
            regex: /@Comment\{/,
            stateName: "bibtexComment",
            push: [
              {
                token: "comment",
                regex: /}/,
                next: "pop"
              },
              {
                token: "comment",
                regex: /\{/,
                push: "bibtexComment"
              },
              {
                defaultToken: "comment"
              }
            ]
          },
          {
            token: [
              "keyword",
              "text",
              "paren.lparen",
              "text",
              "variable",
              "text",
              "keyword.operator"
            ],
            regex: /(@String)(\s*)(\{)(\s*)([a-zA-Z]*)(\s*)(=)/,
            push: [
              {
                token: "paren.rparen",
                regex: /\}/,
                next: "pop"
              },
              {
                include: "#misc"
              },
              {
                defaultToken: "text"
              }
            ]
          },
          {
            token: [
              "keyword",
              "text",
              "paren.lparen",
              "text",
              "variable",
              "text",
              "keyword.operator"
            ],
            regex: /(@String)(\s*)(\()(\s*)([a-zA-Z]*)(\s*)(=)/,
            push: [
              {
                token: "paren.rparen",
                regex: /\)/,
                next: "pop"
              },
              {
                include: "#misc"
              },
              {
                defaultToken: "text"
              }
            ]
          },
          {
            token: [
              "keyword",
              "text",
              "paren.lparen"
            ],
            regex: /(@preamble)(\s*)(\()/,
            push: [
              {
                token: "paren.rparen",
                regex: /\)/,
                next: "pop"
              },
              {
                include: "#misc"
              },
              {
                defaultToken: "text"
              }
            ]
          },
          {
            token: [
              "keyword",
              "text",
              "paren.lparen"
            ],
            regex: /(@preamble)(\s*)(\{)/,
            push: [
              {
                token: "paren.rparen",
                regex: /\}/,
                next: "pop"
              },
              {
                include: "#misc"
              },
              {
                defaultToken: "text"
              }
            ]
          },
          {
            token: [
              "keyword",
              "text",
              "paren.lparen",
              "text",
              "support.class"
            ],
            regex: /(@[a-zA-Z]+)(\s*)(\{)(\s*)([\w-]+)/,
            push: [
              {
                token: "paren.rparen",
                regex: /\}/,
                next: "pop"
              },
              {
                token: [
                  "variable",
                  "text",
                  "keyword.operator"
                ],
                regex: /([a-zA-Z0-9\!\$\&\*\+\-\.\/\:\;\<\>\?\[\]\^\_\`\|]+)(\s*)(=)/,
                push: [
                  {
                    token: "text",
                    regex: /(?=[,}])/,
                    next: "pop"
                  },
                  {
                    include: "#misc"
                  },
                  {
                    include: "#integer"
                  },
                  {
                    defaultToken: "text"
                  }
                ]
              },
              {
                token: "punctuation",
                regex: /,/
              },
              {
                defaultToken: "text"
              }
            ]
          },
          {
            defaultToken: "comment"
          }
        ],
        "#integer": [
          {
            token: "constant.numeric.bibtex",
            regex: /\d+/
          }
        ],
        "#misc": [
          {
            token: "string",
            regex: /"/,
            push: "#string_quotes"
          },
          {
            token: "paren.lparen",
            regex: /\{/,
            push: "#string_braces"
          },
          {
            token: "keyword.operator",
            regex: /#/
          }
        ],
        "#string_braces": [
          {
            token: "paren.rparen",
            regex: /\}/,
            next: "pop"
          },
          {
            token: "invalid.illegal",
            regex: /@/
          },
          {
            include: "#misc"
          },
          {
            defaultToken: "string"
          }
        ],
        "#string_quotes": [
          {
            token: "string",
            regex: /"/,
            next: "pop"
          },
          {
            include: "#misc"
          },
          {
            defaultToken: "string"
          }
        ]
      };
      this.normalizeRules();
    };
    oop.inherits(BibTeXHighlightRules, TextHighlightRules);
    exports.BibTeXHighlightRules = BibTeXHighlightRules;
  }
});

// src/mode/bibtex.js
var require_bibtex = __commonJS({
  "src/mode/bibtex.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var BibTeXHighlightRules = require_bibtex_highlight_rules().BibTeXHighlightRules;
    var FoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = BibTeXHighlightRules;
      this.foldingRules = new FoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.$id = "ace/mode/bibtex";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_bibtex();

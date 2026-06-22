import {
  require_latex_highlight_rules
} from "../chunk-4CFSM6ZU.js";
import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
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
import {
  require_lang
} from "../chunk-NNGFYYI3.js";
import "../chunk-3SNEZHBJ.js";
import "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/rdoc_highlight_rules.js
var require_rdoc_highlight_rules = __commonJS({
  "src/mode/rdoc_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var lang = require_lang();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var LaTeXHighlightRules = require_latex_highlight_rules();
    var RDocHighlightRules = function() {
      this.$rules = {
        "start": [
          {
            token: "comment",
            regex: "%.*$"
          },
          {
            token: "text",
            // non-command
            regex: "\\\\[$&%#\\{\\}]"
          },
          {
            token: "keyword",
            // command
            regex: "\\\\(?:name|alias|method|S3method|S4method|item|code|preformatted|kbd|pkg|var|env|option|command|author|email|url|source|cite|acronym|href|code|preformatted|link|eqn|deqn|keyword|usage|examples|dontrun|dontshow|figure|if|ifelse|Sexpr|RdOpts|inputencoding|usepackage)\\b",
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
            token: "text",
            regex: "\\s+"
          }
        ],
        // This mode is necessary to prevent spell checking, but to keep the
        // same syntax highlighting behavior. 
        "nospell": [
          {
            token: "comment",
            regex: "%.*$",
            next: "start"
          },
          {
            token: "nospell.text",
            // non-command
            regex: "\\\\[$&%#\\{\\}]"
          },
          {
            token: "keyword",
            // command
            regex: "\\\\(?:name|alias|method|S3method|S4method|item|code|preformatted|kbd|pkg|var|env|option|command|author|email|url|source|cite|acronym|href|code|preformatted|link|eqn|deqn|keyword|usage|examples|dontrun|dontshow|figure|if|ifelse|Sexpr|RdOpts|inputencoding|usepackage)\\b"
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
            token: "nospell.text",
            regex: "\\s+"
          },
          {
            token: "nospell.text",
            regex: "\\w+"
          }
        ]
      };
    };
    oop.inherits(RDocHighlightRules, TextHighlightRules);
    exports.RDocHighlightRules = RDocHighlightRules;
  }
});

// src/mode/rdoc.js
var require_rdoc = __commonJS({
  "src/mode/rdoc.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var RDocHighlightRules = require_rdoc_highlight_rules().RDocHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var Mode = function(suppressHighlighting) {
      this.HighlightRules = RDocHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.getNextLineIndent = function(state, line, tab) {
        return this.$getIndent(line);
      };
      this.$id = "ace/mode/rdoc";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_rdoc();

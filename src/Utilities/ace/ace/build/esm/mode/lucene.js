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

// src/mode/lucene_highlight_rules.js
var require_lucene_highlight_rules = __commonJS({
  "src/mode/lucene_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var LuceneHighlightRules = function() {
      this.$rules = {
        "start": [
          {
            token: "constant.language.escape",
            regex: /\\[\-+&|!(){}\[\]^"~*?:\\]/
          },
          {
            token: "constant.character.negation",
            regex: "\\-"
          },
          {
            token: "constant.character.interro",
            regex: "\\?"
          },
          {
            token: "constant.character.required",
            regex: "\\+"
          },
          {
            token: "constant.character.asterisk",
            regex: "\\*"
          },
          {
            token: "constant.character.proximity",
            regex: "~(?:0\\.[0-9]+|[0-9]+)?"
          },
          {
            token: "keyword.operator",
            regex: "(AND|OR|NOT|TO)\\b"
          },
          {
            token: "paren.lparen",
            regex: "[\\(\\{\\[]"
          },
          {
            token: "paren.rparen",
            regex: "[\\)\\}\\]]"
          },
          {
            token: "keyword.operator",
            regex: /[><=^]/
          },
          {
            token: "constant.numeric",
            regex: /\d[\d.-]*/
          },
          {
            token: "string",
            regex: /"(?:\\"|[^"])*"/
          },
          {
            token: "keyword",
            regex: /(?:\\.|[^\s\-+&|!(){}\[\]^"~*?:\\])+:/,
            next: "maybeRegex"
          },
          {
            token: "term",
            regex: /\w+/
          },
          {
            token: "text",
            regex: /\s+/
          }
        ],
        "maybeRegex": [{
          token: "text",
          regex: /\s+/
        }, {
          token: "string.regexp.start",
          regex: "/",
          next: "regex"
        }, {
          regex: "",
          next: "start"
        }],
        "regex": [
          {
            token: "regexp.keyword.operator",
            regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
          },
          {
            // flag
            token: "string.regexp.end",
            regex: "/[sxngimy]*",
            next: "start"
          },
          {
            // invalid operators
            token: "invalid",
            regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
          },
          {
            // operators
            token: "constant.language.escape",
            regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
          },
          {
            // optional operators
            token: "constant.language.escape",
            regex: "<d+-d+>|[~&@]"
          },
          {
            token: "constant.language.delimiter",
            regex: /\|/
          },
          {
            token: "constant.language.escape",
            regex: /\[\^?/,
            next: "regex_character_class"
          },
          {
            token: "empty",
            regex: "$",
            next: "start"
          },
          {
            defaultToken: "string.regexp"
          }
        ],
        "regex_character_class": [
          {
            token: "regexp.charclass.keyword.operator",
            regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
          },
          {
            token: "constant.language.escape",
            regex: "]",
            next: "regex"
          },
          {
            token: "constant.language.escape",
            regex: "-"
          },
          {
            token: "empty",
            regex: "$",
            next: "start"
          },
          {
            defaultToken: "string.regexp.characterclass"
          }
        ]
      };
    };
    oop.inherits(LuceneHighlightRules, TextHighlightRules);
    exports.LuceneHighlightRules = LuceneHighlightRules;
  }
});

// src/mode/lucene.js
var require_lucene = __commonJS({
  "src/mode/lucene.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var LuceneHighlightRules = require_lucene_highlight_rules().LuceneHighlightRules;
    var Mode = function() {
      this.HighlightRules = LuceneHighlightRules;
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.$id = "ace/mode/lucene";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_lucene();

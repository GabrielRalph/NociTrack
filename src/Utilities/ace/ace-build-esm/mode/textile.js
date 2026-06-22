import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
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

// src/mode/textile_highlight_rules.js
var require_textile_highlight_rules = __commonJS({
  "src/mode/textile_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var TextileHighlightRules = function() {
      this.$rules = {
        "start": [
          {
            token: function(value) {
              if (value.charAt(0) == "h")
                return "markup.heading." + value.charAt(1);
              else
                return "markup.heading";
            },
            regex: "h1|h2|h3|h4|h5|h6|bq|p|bc|pre",
            next: "blocktag"
          },
          {
            token: "keyword",
            regex: "[\\*]+|[#]+"
          },
          {
            token: "text",
            regex: ".+"
          }
        ],
        "blocktag": [
          {
            token: "keyword",
            regex: "\\. ",
            next: "start"
          },
          {
            token: "keyword",
            regex: "\\(",
            next: "blocktagproperties"
          }
        ],
        "blocktagproperties": [
          {
            token: "keyword",
            regex: "\\)",
            next: "blocktag"
          },
          {
            token: "string",
            regex: "[a-zA-Z0-9\\-_]+"
          },
          {
            token: "keyword",
            regex: "#"
          }
        ]
      };
    };
    oop.inherits(TextileHighlightRules, TextHighlightRules);
    exports.TextileHighlightRules = TextileHighlightRules;
  }
});

// src/mode/textile.js
var require_textile = __commonJS({
  "src/mode/textile.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var TextileHighlightRules = require_textile_highlight_rules().TextileHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var Mode = function() {
      this.HighlightRules = TextileHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.type = "text";
      this.getNextLineIndent = function(state, line, tab) {
        if (state == "intag")
          return tab;
        return "";
      };
      this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
      };
      this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
      };
      this.$id = "ace/mode/textile";
      this.snippetFileId = "ace/snippets/textile";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_textile();

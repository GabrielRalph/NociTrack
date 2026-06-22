import {
  require_ruby_highlight_rules
} from "../chunk-TSBBTMR5.js";
import {
  require_html_highlight_rules
} from "../chunk-2TRMU5AT.js";
import "../chunk-VGQVSYAP.js";
import "../chunk-ELLQ4DAZ.js";
import "../chunk-KDDWKWK4.js";
import {
  require_coffee
} from "../chunk-2I2EWIJ7.js";
import "../chunk-JEWW6F7O.js";
import {
  require_text
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

// src/mode/haml_highlight_rules.js
var require_haml_highlight_rules = __commonJS({
  "src/mode/haml_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    var RubyExports = require_ruby_highlight_rules();
    var RubyHighlightRules = RubyExports.RubyHighlightRules;
    var HamlHighlightRules = function() {
      HtmlHighlightRules.call(this);
      this.$rules = {
        "start": [
          {
            token: "comment.block",
            // multiline HTML comment
            regex: /^\/$/,
            next: "comment"
          },
          {
            token: "comment.block",
            // multiline HAML comment
            regex: /^\-#$/,
            next: "comment"
          },
          {
            token: "comment.line",
            // HTML comment
            regex: /\/\s*.*/
          },
          {
            token: "comment.line",
            // HAML comment
            regex: /-#\s*.*/
          },
          {
            token: "keyword.other.doctype",
            regex: "^!!!\\s*(?:[a-zA-Z0-9-_]+)?"
          },
          RubyExports.qString,
          RubyExports.qqString,
          RubyExports.tString,
          {
            token: "meta.tag.haml",
            regex: /(%[\w:\-]+)/
          },
          {
            token: "keyword.attribute-name.class.haml",
            regex: /\.[\w-]+/
          },
          {
            token: "keyword.attribute-name.id.haml",
            regex: /#[\w-]+/,
            next: "element_class"
          },
          RubyExports.constantNumericHex,
          RubyExports.constantNumericFloat,
          RubyExports.constantOtherSymbol,
          {
            token: "text",
            regex: /=|-|~/,
            next: "embedded_ruby"
          }
        ],
        "element_class": [
          {
            token: "keyword.attribute-name.class.haml",
            regex: /\.[\w-]+/
          },
          {
            token: "punctuation.section",
            regex: /\{/,
            next: "element_attributes"
          },
          RubyExports.constantOtherSymbol,
          {
            token: "empty",
            regex: "$|(?!\\.|#|\\{|\\[|=|-|~|\\/])",
            next: "start"
          }
        ],
        "element_attributes": [
          RubyExports.constantOtherSymbol,
          RubyExports.qString,
          RubyExports.qqString,
          RubyExports.tString,
          RubyExports.constantNumericHex,
          RubyExports.constantNumericFloat,
          {
            token: "punctuation.section",
            regex: /$|\}/,
            next: "start"
          }
        ],
        "embedded_ruby": [
          RubyExports.constantNumericHex,
          RubyExports.constantNumericFloat,
          RubyExports.instanceVariable,
          RubyExports.qString,
          RubyExports.qqString,
          RubyExports.tString,
          {
            token: "support.class",
            // class name
            regex: "[A-Z][a-zA-Z_\\d]+"
          },
          {
            token: new RubyHighlightRules().getKeywords(),
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
          },
          {
            token: ["keyword", "text", "text"],
            regex: "(?:do|\\{)(?: \\|[^|]+\\|)?$",
            next: "start"
          },
          {
            token: ["text"],
            regex: "^$",
            next: "start"
          },
          {
            token: ["text"],
            regex: "^(?!.*\\|\\s*$)",
            next: "start"
          }
        ],
        "comment": [
          {
            token: "comment.block",
            regex: /^$/,
            next: "start"
          },
          {
            token: "comment.block",
            // comment spanning the whole line
            regex: /\s+.*/
          }
        ]
      };
      this.normalizeRules();
    };
    oop.inherits(HamlHighlightRules, HtmlHighlightRules);
    exports.HamlHighlightRules = HamlHighlightRules;
  }
});

// src/mode/haml.js
var require_haml = __commonJS({
  "src/mode/haml.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var HamlHighlightRules = require_haml_highlight_rules().HamlHighlightRules;
    var FoldMode = require_coffee().FoldMode;
    var Mode = function() {
      this.HighlightRules = HamlHighlightRules;
      this.foldingRules = new FoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.$id = "ace/mode/haml";
      this.snippetFileId = "ace/snippets/haml";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_haml();

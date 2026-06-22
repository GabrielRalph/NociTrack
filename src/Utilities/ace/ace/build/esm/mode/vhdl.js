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

// src/mode/vhdl_highlight_rules.js
var require_vhdl_highlight_rules = __commonJS({
  "src/mode/vhdl_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var VHDLHighlightRules = function() {
      var keywords = "access|after|alias|all|architecture|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|context|disconnect|downto|else|elsif|end|entity|exit|file|for|force|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|of|on|or|open|others|out|package|parameter|port|postponed|procedure|process|protected|pure|range|record|register|reject|release|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with";
      var storageType = "bit|bit_vector|boolean|character|integer|line|natural|positive|real|register|signed|std_logic|std_logic_vector|string||text|time|unsigned";
      var storageModifiers = "array|constant";
      var keywordOperators = "abs|and|mod|nand|nor|not|rem|rol|ror|sla|sll|srasrl|xnor|xor";
      var builtinConstants = "true|false|null";
      var keywordMapper = this.createKeywordMapper({
        "keyword.operator": keywordOperators,
        "keyword": keywords,
        "constant.language": builtinConstants,
        "storage.modifier": storageModifiers,
        "storage.type": storageType
      }, "identifier", true);
      this.$rules = {
        "start": [{
          token: "comment",
          regex: "--.*$"
        }, {
          token: "string",
          // " string
          regex: '".*?"'
        }, {
          token: "string",
          // ' string
          regex: "'.*?'"
        }, {
          token: "constant.numeric",
          // float
          regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
        }, {
          token: "keyword",
          // pre-compiler directives
          regex: "\\s*(?:library|package|use)\\b"
        }, {
          token: keywordMapper,
          regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        }, {
          token: "keyword.operator",
          regex: "&|\\*|\\+|\\-|\\/|<|=|>|\\||=>|\\*\\*|:=|\\/=|>=|<=|<>"
        }, {
          token: "punctuation.operator",
          regex: "\\'|\\:|\\,|\\;|\\."
        }, {
          token: "paren.lparen",
          regex: "[[(]"
        }, {
          token: "paren.rparen",
          regex: "[\\])]"
        }, {
          token: "text",
          regex: "\\s+"
        }]
      };
    };
    oop.inherits(VHDLHighlightRules, TextHighlightRules);
    exports.VHDLHighlightRules = VHDLHighlightRules;
  }
});

// src/mode/vhdl.js
var require_vhdl = __commonJS({
  "src/mode/vhdl.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var VHDLHighlightRules = require_vhdl_highlight_rules().VHDLHighlightRules;
    var Mode = function() {
      this.HighlightRules = VHDLHighlightRules;
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "--";
      this.$id = "ace/mode/vhdl";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_vhdl();

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
import {
  require_range
} from "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/gcode_highlight_rules.js
var require_gcode_highlight_rules = __commonJS({
  "src/mode/gcode_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var GcodeHighlightRules = function() {
      var keywords = "IF|DO|WHILE|ENDWHILE|CALL|ENDIF|SUB|ENDSUB|GOTO|REPEAT|ENDREPEAT|CALL";
      var builtinConstants = "PI";
      var builtinFunctions = "ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN";
      var keywordMapper = this.createKeywordMapper({
        "support.function": builtinFunctions,
        "keyword": keywords,
        "constant.language": builtinConstants
      }, "identifier", true);
      this.$rules = {
        "start": [{
          token: "comment",
          regex: "\\(.*\\)"
        }, {
          token: "comment",
          // block number
          regex: "([N])([0-9]+)"
        }, {
          token: "string",
          // " string
          regex: "([G])([0-9]+\\.?[0-9]?)"
        }, {
          token: "string",
          // ' string
          regex: "([M])([0-9]+\\.?[0-9]?)"
        }, {
          token: "constant.numeric",
          // float
          regex: "([-+]?([0-9]*\\.?[0-9]+\\.?))|(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"
        }, {
          token: keywordMapper,
          regex: "[A-Z]"
        }, {
          token: "keyword.operator",
          regex: "EQ|LT|GT|NE|GE|LE|OR|XOR"
        }, {
          token: "paren.lparen",
          regex: "[\\[]"
        }, {
          token: "paren.rparen",
          regex: "[\\]]"
        }, {
          token: "text",
          regex: "\\s+"
        }]
      };
    };
    oop.inherits(GcodeHighlightRules, TextHighlightRules);
    exports.GcodeHighlightRules = GcodeHighlightRules;
  }
});

// src/mode/gcode.js
var require_gcode = __commonJS({
  "src/mode/gcode.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var GcodeHighlightRules = require_gcode_highlight_rules().GcodeHighlightRules;
    var Range = require_range().Range;
    var Mode = function() {
      this.HighlightRules = GcodeHighlightRules;
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.$id = "ace/mode/gcode";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_gcode();

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

// src/mode/cobol_highlight_rules.js
var require_cobol_highlight_rules = __commonJS({
  "src/mode/cobol_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var CobolHighlightRules = function() {
      var keywords = "ACCEPT|MERGE|SUM|ADD||MESSAGE|TABLE|ADVANCING|MODE|TAPE|AFTER|MULTIPLY|TEST|ALL|NEGATIVE|TEXT|ALPHABET|NEXT|THAN|ALSO|NO|THEN|ALTERNATE|NOT|THROUGH|AND|NUMBER|THRU|ANY|OCCURS|TIME|ARE|OF|TO|AREA|OFF|TOP||ASCENDING|OMITTED|TRUE|ASSIGN|ON|TYPE|AT|OPEN|UNIT|AUTHOR|OR|UNTIL|BEFORE|OTHER|UP|BLANK|OUTPUT|USE|BLOCK|PAGE|USING|BOTTOM|PERFORM|VALUE|BY|PIC|VALUES|CALL|PICTURE|WHEN|CANCEL|PLUS|WITH|CD|POINTER|WRITE|CHARACTER|POSITION||ZERO|CLOSE|POSITIVE|ZEROS|COLUMN|PROCEDURE|ZEROES|COMMA|PROGRAM|COMMON|PROGRAM-ID|COMMUNICATION|QUOTE|COMP|RANDOM|COMPUTE|READ|CONTAINS|RECEIVE|CONFIGURATION|RECORD|CONTINUE|REDEFINES|CONTROL|REFERENCE|COPY|REMAINDER|COUNT|REPLACE|DATA|REPORT|DATE|RESERVE|DAY|RESET|DELETE|RETURN|DESTINATION|REWIND|DISABLE|REWRITE|DISPLAY|RIGHT|DIVIDE|RUN|DOWN|SAME|ELSE|SEARCH|ENABLE|SECTION|END|SELECT|ENVIRONMENT|SENTENCE|EQUAL|SET|ERROR|SIGN|EXIT|SEQUENTIAL|EXTERNAL|SIZE|FLASE|SORT|FILE|SOURCE|LENGTH|SPACE|LESS|STANDARD|LIMIT|START|LINE|STOP|LOCK|STRING|LOW-VALUE|SUBTRACT";
      var builtinConstants = "true|false|null";
      var builtinFunctions = "count|min|max|avg|sum|rank|now|coalesce|main";
      var keywordMapper = this.createKeywordMapper({
        "support.function": builtinFunctions,
        "keyword": keywords,
        "constant.language": builtinConstants
      }, "identifier", true);
      this.$rules = {
        "start": [{
          token: "comment",
          regex: "\\*.*$"
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
          token: keywordMapper,
          regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        }, {
          token: "keyword.operator",
          regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
        }, {
          token: "paren.lparen",
          regex: "[\\(]"
        }, {
          token: "paren.rparen",
          regex: "[\\)]"
        }, {
          token: "text",
          regex: "\\s+"
        }]
      };
    };
    oop.inherits(CobolHighlightRules, TextHighlightRules);
    exports.CobolHighlightRules = CobolHighlightRules;
  }
});

// src/mode/cobol.js
var require_cobol = __commonJS({
  "src/mode/cobol.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var CobolHighlightRules = require_cobol_highlight_rules().CobolHighlightRules;
    var Mode = function() {
      this.HighlightRules = CobolHighlightRules;
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "*";
      this.$id = "ace/mode/cobol";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_cobol();

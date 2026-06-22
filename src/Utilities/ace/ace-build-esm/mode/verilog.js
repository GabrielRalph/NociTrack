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

// src/mode/verilog_highlight_rules.js
var require_verilog_highlight_rules = __commonJS({
  "src/mode/verilog_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var VerilogHighlightRules = function() {
      var keywords = "always|and|assign|automatic|begin|buf|bufif0|bufif1|case|casex|casez|cell|cmos|config|deassign|default|defparam|design|disable|edge|else|end|endcase|endconfig|endfunction|endgenerate|endmodule|endprimitive|endspecify|endtable|endtask|event|for|force|forever|fork|function|generate|genvar|highz0|highz1|if|ifnone|incdir|include|initial|inout|input|instance|integer|join|large|liblist|library|localparam|macromodule|medium|module|nand|negedge|nmos|nor|noshowcancelled|not|notif0|notif1|or|output|parameter|pmos|posedge|primitive|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|rcmos|real|realtime|reg|release|repeat|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|showcancelled|signed|small|specify|specparam|strong0|strong1|supply0|supply1|table|task|time|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|unsigned|use|vectored|wait|wand|weak0|weak1|while|wire|wor|xnor|xorbegin|bufif0|bufif1|case|casex|casez|config|else|end|endcase|endconfig|endfunction|endgenerate|endmodule|endprimitive|endspecify|endtable|endtask|for|forever|function|generate|if|ifnone|macromodule|module|primitive|repeat|specify|table|task|while";
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
          regex: "//.*$"
        }, {
          token: "comment.start",
          regex: "/\\*",
          next: [
            { token: "comment.end", regex: "\\*/", next: "start" },
            { defaultToken: "comment" }
          ]
        }, {
          token: "string.start",
          regex: '"',
          next: [
            { token: "constant.language.escape", regex: /\\(?:[ntvfa\\"]|[0-7]{1,3}|\x[a-fA-F\d]{1,2}|)/, consumeLineEnd: true },
            { token: "string.end", regex: '"|$', next: "start" },
            { defaultToken: "string" }
          ]
        }, {
          token: "string",
          regex: "'^[']'"
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
      this.normalizeRules();
    };
    oop.inherits(VerilogHighlightRules, TextHighlightRules);
    exports.VerilogHighlightRules = VerilogHighlightRules;
  }
});

// src/mode/verilog.js
var require_verilog = __commonJS({
  "src/mode/verilog.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var VerilogHighlightRules = require_verilog_highlight_rules().VerilogHighlightRules;
    var Range = require_range().Range;
    var Mode = function() {
      this.HighlightRules = VerilogHighlightRules;
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.blockComment = { start: "/*", end: "*/" };
      this.$quotes = { '"': '"' };
      this.$id = "ace/mode/verilog";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_verilog();

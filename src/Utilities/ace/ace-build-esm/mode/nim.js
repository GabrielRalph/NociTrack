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

// src/mode/nim_highlight_rules.js
var require_nim_highlight_rules = __commonJS({
  "src/mode/nim_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var NimHighlightRules = function() {
      var keywordMapper = this.createKeywordMapper({
        "variable": "var|let|const",
        "keyword": "assert|parallel|spawn|export|include|from|template|mixin|bind|import|concept|raise|defer|try|finally|except|converter|proc|func|macro|method|and|or|not|xor|shl|shr|div|mod|in|notin|is|isnot|of|static|if|elif|else|case|of|discard|when|return|yield|block|break|while|echo|continue|asm|using|cast|addr|unsafeAddr|type|ref|ptr|do|declared|defined|definedInScope|compiles|sizeOf|is|shallowCopy|getAst|astToStr|spawn|procCall|for|iterator|as",
        "storage.type": "newSeq|int|int8|int16|int32|int64|uint|uint8|uint16|uint32|uint64|float|char|bool|string|set|pointer|float32|float64|enum|object|cstring|array|seq|openArray|varargs|UncheckedArray|tuple|set|distinct|void|auto|openarray|range",
        "support.function": "lock|ze|toU8|toU16|toU32|ord|low|len|high|add|pop|contains|card|incl|excl|dealloc|inc",
        "constant.language": "nil|true|false"
      }, "identifier");
      var hexNumber = "(?:0[xX][\\dA-Fa-f][\\dA-Fa-f_]*)";
      var decNumber = "(?:[0-9][\\d_]*)";
      var octNumber = "(?:0o[0-7][0-7_]*)";
      var binNumber = "(?:0[bB][01][01_]*)";
      var intNumber = "(?:" + hexNumber + "|" + decNumber + "|" + octNumber + "|" + binNumber + ")(?:'?[iIuU](?:8|16|32|64)|u)?\\b";
      var exponent = "(?:[eE][+-]?[\\d][\\d_]*)";
      var floatNumber = "(?:[\\d][\\d_]*(?:[.][\\d](?:[\\d_]*)" + exponent + "?)|" + exponent + ")";
      var floatNumberExt = "(?:" + hexNumber + "(?:'(?:(?:[fF](?:32|64)?)|[dD])))|(?:" + floatNumber + "|" + decNumber + "|" + octNumber + "|" + binNumber + ")(?:'(?:(?:[fF](?:32|64)?)|[dD]))";
      var stringEscape = `\\\\([abeprcnlftv\\"']|x[0-9A-Fa-f]{2}|[0-2][0-9]{2}|u[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})`;
      var identifier = "[a-zA-Z][a-zA-Z0-9_]*";
      this.$rules = {
        "start": [{
          token: ["identifier", "keyword.operator", "support.function"],
          regex: "(" + identifier + ")([.]{1})(" + identifier + ")(?=\\()"
        }, {
          //pragmas
          token: "paren.lparen",
          regex: "(\\{\\.)",
          next: [{
            token: "paren.rparen",
            regex: "(\\.\\}|\\})",
            next: "start"
          }, {
            include: "methods"
          }, {
            token: "identifier",
            regex: identifier
          }, {
            token: "punctuation",
            regex: /[,]/
          }, {
            token: "keyword.operator",
            regex: /[=:.]/
          }, {
            token: "paren.lparen",
            regex: /[[(]/
          }, {
            token: "paren.rparen",
            regex: /[\])]/
          }, {
            include: "math"
          }, {
            include: "strings"
          }, {
            defaultToken: "text"
          }]
        }, {
          token: "comment.doc.start",
          regex: /##\[(?!])/,
          push: "docBlockComment"
        }, {
          token: "comment.start",
          regex: /#\[(?!])/,
          push: "blockComment"
        }, {
          token: "comment.doc",
          regex: "##.*$"
        }, {
          token: "comment",
          regex: "#.*$"
        }, {
          include: "strings"
        }, {
          // character
          token: "string",
          regex: "'(?:\\\\(?:[abercnlftv]|x[0-9A-Fa-f]{2}|[0-2][0-9]{2}|u[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})|.{1})?'"
        }, {
          include: "methods"
        }, {
          token: keywordMapper,
          regex: "[a-zA-Z][a-zA-Z0-9_]*\\b"
        }, {
          token: ["keyword.operator", "text", "storage.type"],
          regex: "([:])(\\s+)(" + identifier + ")(?=$|\\)|\\[|,|\\s+=|;|\\s+\\{)"
        }, {
          token: "paren.lparen",
          regex: /\[\.|{\||\(\.|\[:|[[({`]/
        }, {
          token: "paren.rparen",
          regex: /\.\)|\|}|\.]|[\])}]/
        }, {
          token: "keyword.operator",
          regex: /[=+\-*\/<>@$~&%|!?^.:\\]/
        }, {
          token: "punctuation",
          regex: /[,;]/
        }, {
          include: "math"
        }],
        blockComment: [{
          regex: /#\[]/,
          token: "comment"
        }, {
          regex: /#\[(?!])/,
          token: "comment.start",
          push: "blockComment"
        }, {
          regex: /]#/,
          token: "comment.end",
          next: "pop"
        }, {
          defaultToken: "comment"
        }],
        docBlockComment: [{
          regex: /##\[]/,
          token: "comment.doc"
        }, {
          regex: /##\[(?!])/,
          token: "comment.doc.start",
          push: "docBlockComment"
        }, {
          regex: /]##/,
          token: "comment.doc.end",
          next: "pop"
        }, {
          defaultToken: "comment.doc"
        }],
        math: [{
          token: "constant.float",
          regex: floatNumberExt
        }, {
          token: "constant.float",
          regex: floatNumber
        }, {
          token: "constant.integer",
          regex: intNumber
        }],
        methods: [{
          token: "support.function",
          regex: "(\\w+)(?=\\()"
        }],
        strings: [{
          token: "string",
          regex: "(\\b" + identifier + ')?"""',
          push: [{
            token: "string",
            regex: '"""',
            next: "pop"
          }, {
            defaultToken: "string"
          }]
        }, {
          token: "string",
          regex: "\\b" + identifier + '"(?=.)',
          push: [{
            token: "string",
            regex: '"|$',
            next: "pop"
          }, {
            defaultToken: "string"
          }]
        }, {
          token: "string",
          regex: '"',
          push: [{
            token: "string",
            regex: '"|$',
            next: "pop"
          }, {
            token: "constant.language.escape",
            regex: stringEscape
          }, {
            defaultToken: "string"
          }]
        }]
      };
      this.normalizeRules();
    };
    oop.inherits(NimHighlightRules, TextHighlightRules);
    exports.NimHighlightRules = NimHighlightRules;
  }
});

// src/mode/nim.js
var require_nim = __commonJS({
  "src/mode/nim.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var NimHighlightRules = require_nim_highlight_rules().NimHighlightRules;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      TextMode.call(this);
      this.HighlightRules = NimHighlightRules;
      this.foldingRules = new CStyleFoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "#";
      this.blockComment = { start: "#[", end: "]#", nestable: true };
      this.$id = "ace/mode/nim";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_nim();

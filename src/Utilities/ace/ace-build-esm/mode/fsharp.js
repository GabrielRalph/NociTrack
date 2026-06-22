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

// src/mode/fsharp_highlight_rules.js
var require_fsharp_highlight_rules = __commonJS({
  "src/mode/fsharp_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var FSharpHighlightRules = function() {
      var keywordMapper = this.createKeywordMapper({
        "variable": "this",
        "keyword": "abstract|assert|base|begin|class|default|delegate|done|downcast|downto|elif|else|exception|extern|false|finally|function|global|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|open|or|override|private|public|rec|return|return!|select|static|struct|then|to|true|try|typeof|upcast|use|use!|val|void|when|while|with|yield|yield!|__SOURCE_DIRECTORY__|as|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile|and|do|end|for|fun|if|in|let|let!|new|not|null|of|endif",
        "constant": "true|false"
      }, "identifier");
      var floatNumber = "(?:(?:(?:(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.))|(?:\\d+))(?:[eE][+-]?\\d+))|(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.)))";
      this.$rules = {
        "start": [
          {
            token: "variable.classes",
            regex: "\\[\\<[.]*\\>\\]"
          },
          {
            token: "comment",
            regex: "//.*$"
          },
          {
            token: "comment.start",
            regex: /\(\*(?!\))/,
            push: "blockComment"
          },
          {
            token: "string",
            regex: "'.'"
          },
          {
            token: "string",
            regex: '"""',
            next: [{
              token: "constant.language.escape",
              regex: /\\./,
              next: "qqstring"
            }, {
              token: "string",
              regex: '"""',
              next: "start"
            }, {
              defaultToken: "string"
            }]
          },
          {
            token: "string",
            regex: '"',
            next: [{
              token: "constant.language.escape",
              regex: /\\./,
              next: "qqstring"
            }, {
              token: "string",
              regex: '"',
              next: "start"
            }, {
              defaultToken: "string"
            }]
          },
          {
            token: ["verbatim.string", "string"],
            regex: '(@?)(")',
            stateName: "qqstring",
            next: [{
              token: "constant.language.escape",
              regex: '""'
            }, {
              token: "string",
              regex: '"',
              next: "start"
            }, {
              defaultToken: "string"
            }]
          },
          {
            token: "constant.float",
            regex: "(?:" + floatNumber + "|\\d+)[jJ]\\b"
          },
          {
            token: "constant.float",
            regex: floatNumber
          },
          {
            token: "constant.integer",
            regex: "(?:(?:(?:[1-9]\\d*)|(?:0))|(?:0[oO]?[0-7]+)|(?:0[xX][\\dA-Fa-f]+)|(?:0[bB][01]+))\\b"
          },
          {
            token: ["keyword.type", "variable"],
            regex: "(type\\s)([a-zA-Z0-9_$-]*\\b)"
          },
          {
            token: keywordMapper,
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
          },
          {
            token: "keyword.operator",
            regex: "\\+\\.|\\-\\.|\\*\\.|\\/\\.|#|;;|\\+|\\-|\\*|\\*\\*\\/|\\/\\/|%|<<|>>|&|\\||\\^|~|<|>|<=|=>|==|!=|<>|<-|=|\\(\\*\\)"
          },
          {
            token: "paren.lparen",
            regex: "[[({]"
          },
          {
            token: "paren.rparen",
            regex: "[\\])}]"
          }
        ],
        blockComment: [{
          regex: /\(\*\)/,
          token: "comment"
        }, {
          regex: /\(\*(?!\))/,
          token: "comment.start",
          push: "blockComment"
        }, {
          regex: /\*\)/,
          token: "comment.end",
          next: "pop"
        }, {
          defaultToken: "comment"
        }]
      };
      this.normalizeRules();
    };
    oop.inherits(FSharpHighlightRules, TextHighlightRules);
    exports.FSharpHighlightRules = FSharpHighlightRules;
  }
});

// src/mode/fsharp.js
var require_fsharp = __commonJS({
  "src/mode/fsharp.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var FSharpHighlightRules = require_fsharp_highlight_rules().FSharpHighlightRules;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      TextMode.call(this);
      this.HighlightRules = FSharpHighlightRules;
      this.foldingRules = new CStyleFoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.blockComment = { start: "(*", end: "*)", nestable: true };
      this.$id = "ace/mode/fsharp";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_fsharp();

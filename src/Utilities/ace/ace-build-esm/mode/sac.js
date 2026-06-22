import {
  require_doc_comment_highlight_rules
} from "../chunk-KWFYXSQI.js";
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

// src/mode/sac_highlight_rules.js
var require_sac_highlight_rules = __commonJS({
  "src/mode/sac_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var DocCommentHighlightRules = require_doc_comment_highlight_rules().DocCommentHighlightRules;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var sacHighlightRules = function() {
      var keywordControls = "break|continue|do|else|for|if|return|with|while|use|class|all|void";
      var storageType = "bool|char|complex|double|float|byte|int|short|long|longlong|ubyte|uint|ushort|ulong|ulonglong|struct|typedef";
      var storageModifiers = "inline|external|specialize";
      var keywordOperators = "step|width";
      var builtinConstants = "true|false";
      var keywordMapper = this.$keywords = this.createKeywordMapper({
        "keyword.control": keywordControls,
        "storage.type": storageType,
        "storage.modifier": storageModifiers,
        "keyword.operator": keywordOperators,
        "constant.language": builtinConstants
      }, "identifier");
      var identifierRe = "[a-zA-Z\\$_\xA1-\uFFFF][a-zA-Z\\d\\$_\xA1-\uFFFF]*\\b";
      var escapeRe = /\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source;
      var formatRe = "%" + /(\d+\$)?/.source + /[#0\- +']*/.source + /[,;:_]?/.source + /((-?\d+)|\*(-?\d+\$)?)?/.source + /(\.((-?\d+)|\*(-?\d+\$)?)?)?/.source + /(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?/.source + /(\[[^"\]]+\]|[diouxXDOUeEfFgGaACcSspn%])/.source;
      this.$rules = {
        "start": [
          {
            token: "comment",
            regex: "//$",
            next: "start"
          },
          {
            token: "comment",
            regex: "//",
            next: "singleLineComment"
          },
          DocCommentHighlightRules.getStartRule("doc-start"),
          {
            token: "comment",
            // multi line comment
            regex: "\\/\\*",
            next: "comment"
          },
          {
            token: "string",
            // character
            regex: "'(?:" + escapeRe + "|.)?'"
          },
          {
            token: "string.start",
            regex: '"',
            stateName: "qqstring",
            next: [
              { token: "string", regex: /\\\s*$/, next: "qqstring" },
              { token: "constant.language.escape", regex: escapeRe },
              { token: "constant.language.escape", regex: formatRe },
              { token: "string.end", regex: '"|$', next: "start" },
              { defaultToken: "string" }
            ]
          },
          {
            token: "string.start",
            regex: 'R"\\(',
            stateName: "rawString",
            next: [
              { token: "string.end", regex: '\\)"', next: "start" },
              { defaultToken: "string" }
            ]
          },
          {
            token: "constant.numeric",
            // hex
            regex: "0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"
          },
          {
            token: "constant.numeric",
            // float
            regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"
          },
          {
            token: "keyword",
            // pre-compiler directives
            regex: "#\\s*(?:include|import|pragma|line|define|undef)\\b",
            next: "directive"
          },
          {
            token: "keyword",
            // special case pre-compiler directive
            regex: "#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b"
          },
          {
            token: "support.function",
            regex: "fold|foldfix|genarray|modarray|propagate"
          },
          {
            token: keywordMapper,
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*"
          },
          {
            token: "keyword.operator",
            regex: /--|\+\+|<<=|>>=|>>>=|<>|&&|\|\||\?:|[*%\/+\-&\^|~!<>=]=?/
          },
          {
            token: "punctuation.operator",
            regex: "\\?|\\:|\\,|\\;|\\."
          },
          {
            token: "paren.lparen",
            regex: "[[({]"
          },
          {
            token: "paren.rparen",
            regex: "[\\])}]"
          },
          {
            token: "text",
            regex: "\\s+"
          }
        ],
        "comment": [
          {
            token: "comment",
            // closing comment
            regex: "\\*\\/",
            next: "start"
          },
          {
            defaultToken: "comment"
          }
        ],
        "singleLineComment": [
          {
            token: "comment",
            regex: /\\$/,
            next: "singleLineComment"
          },
          {
            token: "comment",
            regex: /$/,
            next: "start"
          },
          {
            defaultToken: "comment"
          }
        ],
        "directive": [
          {
            token: "constant.other.multiline",
            regex: /\\/
          },
          {
            token: "constant.other.multiline",
            regex: /.*\\/
          },
          {
            token: "constant.other",
            regex: "\\s*<.+?>",
            next: "start"
          },
          {
            token: "constant.other",
            // single line
            regex: '\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',
            next: "start"
          },
          {
            token: "constant.other",
            // single line
            regex: "\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",
            next: "start"
          },
          // "\" implies multiline, while "/" implies comment
          {
            token: "constant.other",
            regex: /[^\\\/]+/,
            next: "start"
          }
        ]
      };
      this.embedRules(
        DocCommentHighlightRules,
        "doc-",
        [DocCommentHighlightRules.getEndRule("start")]
      );
      this.normalizeRules();
    };
    oop.inherits(sacHighlightRules, TextHighlightRules);
    exports.sacHighlightRules = sacHighlightRules;
  }
});

// src/mode/sac.js
var require_sac = __commonJS({
  "src/mode/sac.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var SaCHighlightRules = require_sac_highlight_rules().sacHighlightRules;
    var FoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = SaCHighlightRules;
      this.foldingRules = new FoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.blockComment = { start: "/*", end: "*/" };
      this.$id = "ace/mode/sac";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_sac();

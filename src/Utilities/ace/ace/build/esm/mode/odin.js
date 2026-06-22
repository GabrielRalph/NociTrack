import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
import {
  require_doc_comment_highlight_rules
} from "../chunk-XTXP6FMQ.js";
import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
import "../chunk-JEWW6F7O.js";
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

// src/mode/odin_highlight_rules.js
var require_odin_highlight_rules = __commonJS({
  "src/mode/odin_highlight_rules.js"(exports) {
    var oop = require_oop();
    var DocCommentHighlightRules = require_doc_comment_highlight_rules().DocCommentHighlightRules;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var OdinHighlightRules = function() {
      var keywords = "using|transmute|cast|distinct|opaque|where|struct|enum|union|bit_field|bit_set|if|when|else|do|switch|case|break|fallthrough|size_of|offset_of|type_info_if|typeid_of|type_of|align_of|or_return|or_else|inline|no_inline|import|package|foreign|defer|auto_cast|map|matrix|proc|for|continue|not_in|in";
      const cartesian = (...a) => a.reduce((a2, b) => a2.flatMap((d) => b.map((e) => [d, e].flat()))).map((parts) => parts.join(""));
      var builtinTypes = [
        "int",
        "uint",
        "uintptr",
        "typeid",
        "rawptr",
        "string",
        "cstring",
        "i8",
        "u8",
        "any",
        "byte",
        "rune",
        "bool",
        "b8",
        "b16",
        "b32",
        "b64",
        ...cartesian(["i", "u"], ["16", "32", "64", "128"], ["", "le", "be"]),
        ...cartesian(["f"], ["16", "32", "64"], ["", "le", "be"]),
        ...cartesian(["complex"], ["32", "64", "128"]),
        ...cartesian(["quaternion"], ["64", "128", "256"])
      ].join("|");
      var operators = [
        "\\*",
        "/",
        "%",
        "%%",
        "<<",
        ">>",
        "&",
        "&~",
        "\\+",
        "\\-",
        "~",
        "\\|",
        ">",
        "<",
        "<=",
        ">=",
        "==",
        "!="
      ].concat(":").map((operator) => operator + "=").concat("=", ":=", "::", "->", "\\^", "&", ":").join("|");
      var builtinFunctions = "new|cap|copy|panic|len|make|delete|append|free";
      var builtinConstants = "nil|true|false";
      var keywordMapper = this.createKeywordMapper(
        {
          keyword: keywords,
          "constant.language": builtinConstants,
          "support.function": builtinFunctions,
          "support.type": builtinTypes
        },
        ""
      );
      var stringEscapeRe = `\\\\(?:[0-7]{3}|x\\h{2}|u{4}|U\\h{6}|[abfnrtv'"\\\\])`.replace(
        /\\h/g,
        "[a-fA-F\\d]"
      );
      this.$rules = {
        start: [
          {
            token: "comment",
            regex: /\/\/.*$/
          },
          DocCommentHighlightRules.getStartRule("doc-start"),
          {
            token: "comment.start",
            // multi line comment
            regex: "\\/\\*",
            next: "comment"
          },
          {
            token: "string",
            // single line
            regex: /"(?:[^"\\]|\\.)*?"/
          },
          {
            token: "string",
            // raw
            regex: "`",
            next: "bqstring"
          },
          {
            token: "support.constant",
            regex: /#[a-z_]+/
          },
          {
            token: "constant.numeric",
            // rune
            regex: "'(?:[^\\'\uD800-\uDBFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|" + stringEscapeRe.replace('"', "") + ")'"
          },
          {
            token: "constant.numeric",
            // hex
            regex: "0[xX][0-9a-fA-F]+\\b"
          },
          {
            token: "constant.numeric",
            // float
            regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
          },
          {
            token: [
              "entity.name.function",
              "text",
              "keyword.operator",
              "text",
              "keyword"
            ],
            regex: "([a-zA-Z_$][a-zA-Z0-9_$]*)(\\s+)(::)(\\s+)(proc)\\b"
          },
          {
            token: function(val) {
              if (val[val.length - 1] == "(") {
                return [
                  {
                    type: keywordMapper(val.slice(0, -1)) || "support.function",
                    value: val.slice(0, -1)
                  },
                  {
                    type: "paren.lparen",
                    value: val.slice(-1)
                  }
                ];
              }
              return keywordMapper(val) || "identifier";
            },
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b\\(?"
          },
          {
            token: "keyword.operator",
            regex: operators
          },
          {
            token: "punctuation.operator",
            regex: "\\?|\\,|\\;|\\."
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
        comment: [
          {
            token: "comment.end",
            regex: "\\*\\/",
            next: "start"
          },
          {
            defaultToken: "comment"
          }
        ],
        bqstring: [
          {
            token: "string",
            regex: "`",
            next: "start"
          },
          {
            defaultToken: "string"
          }
        ]
      };
      this.embedRules(DocCommentHighlightRules, "doc-", [
        DocCommentHighlightRules.getEndRule("start")
      ]);
    };
    oop.inherits(OdinHighlightRules, TextHighlightRules);
    exports.OdinHighlightRules = OdinHighlightRules;
  }
});

// src/mode/odin.js
var require_odin = __commonJS({
  "src/mode/odin.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var OdinHighlightRules = require_odin_highlight_rules().OdinHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = OdinHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.foldingRules = new CStyleFoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.blockComment = { start: "/*", end: "*/" };
      this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;
        if (tokens.length && tokens[tokens.length - 1].type == "comment") {
          return indent;
        }
        if (state == "start") {
          var match = line.match(/^.*[\{\(\[:]\s*$/);
          if (match) {
            indent += tab;
          }
        }
        return indent;
      };
      this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
      };
      this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
      };
      this.$id = "ace/mode/odin";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_odin();

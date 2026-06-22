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
import {
  require_range
} from "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/golang_highlight_rules.js
var require_golang_highlight_rules = __commonJS({
  "src/mode/golang_highlight_rules.js"(exports) {
    var oop = require_oop();
    var DocCommentHighlightRules = require_doc_comment_highlight_rules().DocCommentHighlightRules;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var GolangHighlightRules = function() {
      var keywords = "else|break|case|return|goto|if|const|select|continue|struct|default|switch|for|range|func|import|package|chan|defer|fallthrough|go|interface|map|range|select|type|var";
      var builtinTypes = "string|uint8|uint16|uint32|uint64|int8|int16|int32|int64|float32|float64|complex64|complex128|byte|rune|uint|int|uintptr|bool|error";
      var builtinFunctions = "new|close|cap|copy|panic|panicln|print|println|len|make|delete|real|recover|imag|append";
      var builtinConstants = "nil|true|false|iota";
      var keywordMapper = this.createKeywordMapper({
        "keyword": keywords,
        "constant.language": builtinConstants,
        "support.function": builtinFunctions,
        "support.type": builtinTypes
      }, "");
      var stringEscapeRe = `\\\\(?:[0-7]{3}|x\\h{2}|u{4}|U\\h{6}|[abfnrtv'"\\\\])`.replace(/\\h/g, "[a-fA-F\\d]");
      this.$rules = {
        "start": [
          {
            token: "comment",
            regex: "\\/\\/.*$"
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
            token: ["keyword", "text", "entity.name.function"],
            regex: "(func)(\\s+)([a-zA-Z_$][a-zA-Z0-9_$]*)\\b"
          },
          {
            token: function(val) {
              if (val[val.length - 1] == "(") {
                return [{
                  type: keywordMapper(val.slice(0, -1)) || "support.function",
                  value: val.slice(0, -1)
                }, {
                  type: "paren.lparen",
                  value: val.slice(-1)
                }];
              }
              return keywordMapper(val) || "identifier";
            },
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b\\(?"
          },
          {
            token: "keyword.operator",
            regex: "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^="
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
            token: "comment.end",
            regex: "\\*\\/",
            next: "start"
          },
          {
            defaultToken: "comment"
          }
        ],
        "bqstring": [
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
      this.embedRules(
        DocCommentHighlightRules,
        "doc-",
        [DocCommentHighlightRules.getEndRule("start")]
      );
    };
    oop.inherits(GolangHighlightRules, TextHighlightRules);
    exports.GolangHighlightRules = GolangHighlightRules;
  }
});

// src/mode/golang.js
var require_golang = __commonJS({
  "src/mode/golang.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var GolangHighlightRules = require_golang_highlight_rules().GolangHighlightRules;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Range = require_range().Range;
    var Mode = function() {
      this.HighlightRules = GolangHighlightRules;
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
        var endState = tokenizedLine.state;
        if (tokens.length && tokens[tokens.length - 1].type == "comment") {
          return indent;
        }
        if (state == "start") {
          var match = line.match(/^.*[\{\(\[]\s*$/);
          if (match) {
            indent += tab;
          }
        }
        return indent;
      };
      this.checkOutdent = function(state, line, input) {
        if (!/^\s+$/.test(line))
          return false;
        return /^\s*[})]/.test(input);
      };
      this.autoOutdent = function(state, doc, row) {
        var line = doc.getLine(row);
        var match = line.match(/^(\s*[})])/);
        if (!match) return 0;
        var column = match[1].length;
        var openBracePos = doc.findMatchingBracket({
          row,
          column
        });
        if (!openBracePos || openBracePos.row == row) return 0;
        var indent = this.$getIndent(doc.getLine(openBracePos.row));
        doc.replace(new Range(row, 0, row, column - 1), indent);
      };
      this.$id = "ace/mode/golang";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_golang();

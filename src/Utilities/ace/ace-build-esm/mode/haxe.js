import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
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

// src/mode/haxe_highlight_rules.js
var require_haxe_highlight_rules = __commonJS({
  "src/mode/haxe_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var DocCommentHighlightRules = require_doc_comment_highlight_rules().DocCommentHighlightRules;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var HaxeHighlightRules = function() {
      var keywords = "break|case|cast|catch|class|continue|default|else|enum|extends|for|function|if|implements|import|in|inline|interface|new|override|package|private|public|return|static|super|switch|this|throw|trace|try|typedef|untyped|var|while|Array|Void|Bool|Int|UInt|Float|Dynamic|String|List|Hash|IntHash|Error|Unknown|Type|Std";
      var buildinConstants = "null|true|false";
      var keywordMapper = this.createKeywordMapper({
        "variable.language": "this",
        "keyword": keywords,
        "constant.language": buildinConstants
      }, "identifier");
      this.$rules = {
        "start": [
          {
            token: "comment",
            regex: "\\/\\/.*$"
          },
          DocCommentHighlightRules.getStartRule("doc-start"),
          {
            token: "comment",
            // multi line comment
            regex: "\\/\\*",
            next: "comment"
          },
          {
            token: "string.regexp",
            regex: "[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"
          },
          {
            token: "string",
            // single line
            regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
          },
          {
            token: "string",
            // single line
            regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
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
            token: "constant.language.boolean",
            regex: "(?:true|false)\\b"
          },
          {
            token: keywordMapper,
            // TODO: Unicode escape sequences
            // TODO: Unicode identifiers
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
          },
          {
            token: "keyword.operator",
            regex: "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"
          },
          {
            token: "punctuation.operator",
            regex: "\\?|\\:|\\,|\\;|\\."
          },
          {
            token: "paren.lparen",
            regex: "[[({<]"
          },
          {
            token: "paren.rparen",
            regex: "[\\])}>]"
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
        ]
      };
      this.embedRules(
        DocCommentHighlightRules,
        "doc-",
        [DocCommentHighlightRules.getEndRule("start")]
      );
    };
    oop.inherits(HaxeHighlightRules, TextHighlightRules);
    exports.HaxeHighlightRules = HaxeHighlightRules;
  }
});

// src/mode/haxe.js
var require_haxe = __commonJS({
  "src/mode/haxe.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var HaxeHighlightRules = require_haxe_highlight_rules().HaxeHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = HaxeHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = this.$defaultBehaviour;
      this.foldingRules = new CStyleFoldMode();
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
          var match = line.match(/^.*[\{\(\[]\s*$/);
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
      this.$id = "ace/mode/haxe";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_haxe();

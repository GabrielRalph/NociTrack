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
import {
  require_lang
} from "../chunk-NNGFYYI3.js";
import "../chunk-3SNEZHBJ.js";
import "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/scad_highlight_rules.js
var require_scad_highlight_rules = __commonJS({
  "src/mode/scad_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var lang = require_lang();
    var DocCommentHighlightRules = require_doc_comment_highlight_rules().DocCommentHighlightRules;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var scadHighlightRules = function() {
      var keywordMapper = this.createKeywordMapper({
        "variable.language": "this",
        "keyword": "module|if|else|for",
        "constant.language": "NULL"
      }, "identifier");
      this.$rules = {
        "start": [
          {
            token: "comment",
            regex: "\\/\\/.*$"
          },
          DocCommentHighlightRules.getStartRule("start"),
          {
            token: "comment",
            // multi line comment
            regex: "\\/\\*",
            next: "comment"
          },
          {
            token: "string",
            // single line
            regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
          },
          {
            token: "string",
            // multi line string start
            regex: '["].*\\\\$',
            next: "qqstring"
          },
          {
            token: "string",
            // single line
            regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
          },
          {
            token: "string",
            // multi line string start
            regex: "['].*\\\\$",
            next: "qstring"
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
            token: "constant",
            // <CONSTANT>
            regex: "<[a-zA-Z0-9.]+>"
          },
          {
            token: "keyword",
            // pre-compiler directivs
            regex: "(?:use|include)"
          },
          {
            token: keywordMapper,
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
          },
          {
            token: "keyword.operator",
            regex: "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|new|delete|typeof|void)"
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
        "qqstring": [
          {
            token: "string",
            regex: '(?:(?:\\\\.)|(?:[^"\\\\]))*?"',
            next: "start"
          },
          {
            token: "string",
            regex: ".+"
          }
        ],
        "qstring": [
          {
            token: "string",
            regex: "(?:(?:\\\\.)|(?:[^'\\\\]))*?'",
            next: "start"
          },
          {
            token: "string",
            regex: ".+"
          }
        ]
      };
      this.embedRules(
        DocCommentHighlightRules,
        "doc-",
        [DocCommentHighlightRules.getEndRule("start")]
      );
    };
    oop.inherits(scadHighlightRules, TextHighlightRules);
    exports.scadHighlightRules = scadHighlightRules;
  }
});

// src/mode/scad.js
var require_scad = __commonJS({
  "src/mode/scad.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var scadHighlightRules = require_scad_highlight_rules().scadHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = scadHighlightRules;
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
        var endState = tokenizedLine.state;
        if (tokens.length && tokens[tokens.length - 1].type == "comment") {
          return indent;
        }
        if (state == "start") {
          var match = line.match(/^.*[\{\(\[]\s*$/);
          if (match) {
            indent += tab;
          }
        } else if (state == "doc-start") {
          if (endState == "start") {
            return "";
          }
          var match = line.match(/^\s*(\/?)\*/);
          if (match) {
            if (match[1]) {
              indent += " ";
            }
            indent += "* ";
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
      this.$id = "ace/mode/scad";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_scad();

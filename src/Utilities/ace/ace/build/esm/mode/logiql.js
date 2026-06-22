import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
import {
  require_coffee
} from "../chunk-2I2EWIJ7.js";
import "../chunk-JEWW6F7O.js";
import {
  require_text,
  require_text_highlight_rules
} from "../chunk-QXTEMBPD.js";
import "../chunk-VVYM7U3C.js";
import {
  require_token_iterator
} from "../chunk-GLBKRGPE.js";
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
import {
  require_range
} from "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/logiql_highlight_rules.js
var require_logiql_highlight_rules = __commonJS({
  "src/mode/logiql_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var LogiQLHighlightRules = function() {
      this.$rules = { start: [
        {
          token: "comment.block",
          regex: "/\\*",
          push: [
            { token: "comment.block", regex: "\\*/", next: "pop" },
            { defaultToken: "comment.block" }
          ]
          //A block comment.
        },
        {
          token: "comment.single",
          regex: "//.*"
          //A single line comment.
        },
        {
          token: "constant.numeric",
          regex: "\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?[fd]?"
          //An integer constant.
          //Or a Real number.
        },
        {
          token: "string",
          regex: '"',
          push: [
            { token: "string", regex: '"', next: "pop" },
            { defaultToken: "string" }
          ]
          //Strings
        },
        {
          token: "constant.language",
          regex: "\\b(true|false)\\b"
          //Boolean values.
        },
        {
          token: "entity.name.type.logicblox",
          regex: "`[a-zA-Z_:]+(\\d|\\a)*\\b"
          //LogicBlox Symbol
        },
        { token: "keyword.start", regex: "->", comment: "Constraint" },
        { token: "keyword.start", regex: "-->", comment: "Level 1 Constraint" },
        { token: "keyword.start", regex: "<-", comment: "Rule" },
        { token: "keyword.start", regex: "<--", comment: "Level 1 Rule" },
        { token: "keyword.end", regex: "\\.", comment: "Terminator" },
        { token: "keyword.other", regex: "!", comment: "Negation" },
        { token: "keyword.other", regex: ",", comment: "Conjunction" },
        { token: "keyword.other", regex: ";", comment: "Disjunction" },
        { token: "keyword.operator", regex: "<=|>=|!=|<|>", comment: "Equality" },
        { token: "keyword.other", regex: "@", comment: "Equality" },
        { token: "keyword.operator", regex: "\\+|-|\\*|/", comment: "Arithmetic operations" },
        { token: "keyword", regex: "::", comment: "Colon colon" },
        {
          token: "support.function",
          regex: "\\b(agg\\s*<<)",
          push: [
            { include: "$self" },
            {
              token: "support.function",
              regex: ">>",
              next: "pop"
            }
          ]
          //Aggregations
        },
        {
          token: "storage.modifier",
          regex: "\\b(lang:[\\w:]*)"
          //All the lang system predicates
        },
        {
          token: ["storage.type", "text"],
          regex: "(export|sealed|clauses|block|alias|alias_all)(\\s*\\()(?=`)"
          //Module keywords
        },
        {
          token: "entity.name",
          regex: "[a-zA-Z_][a-zA-Z_0-9:]*(@prev|@init|@final)?(?=(\\(|\\[))"
          //A predicate name.
        },
        {
          token: "variable.parameter",
          regex: "([a-zA-Z][a-zA-Z_0-9]*|_)\\s*(?=(,|\\.|<-|->|\\)|\\]|=))"
          //A variable to a functional predicate.
        }
      ] };
      this.normalizeRules();
    };
    oop.inherits(LogiQLHighlightRules, TextHighlightRules);
    exports.LogiQLHighlightRules = LogiQLHighlightRules;
  }
});

// src/mode/logiql.js
var require_logiql = __commonJS({
  "src/mode/logiql.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var LogiQLHighlightRules = require_logiql_highlight_rules().LogiQLHighlightRules;
    var FoldMode = require_coffee().FoldMode;
    var TokenIterator = require_token_iterator().TokenIterator;
    var Range = require_range().Range;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var Mode = function() {
      this.HighlightRules = LogiQLHighlightRules;
      this.foldingRules = new FoldMode();
      this.$outdent = new MatchingBraceOutdent();
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
        if (/comment|string/.test(endState))
          return indent;
        if (tokens.length && tokens[tokens.length - 1].type == "comment.single")
          return indent;
        var match = line.match();
        if (/(-->|<--|<-|->|{)\s*$/.test(line))
          indent += tab;
        return indent;
      };
      this.checkOutdent = function(state, line, input) {
        if (this.$outdent.checkOutdent(line, input))
          return true;
        if (input !== "\n" && input !== "\r\n")
          return false;
        if (!/^\s+/.test(line))
          return false;
        return true;
      };
      this.autoOutdent = function(state, doc, row) {
        if (this.$outdent.autoOutdent(doc, row))
          return;
        var prevLine = doc.getLine(row);
        var match = prevLine.match(/^\s+/);
        var column = prevLine.lastIndexOf(".") + 1;
        if (!match || !row || !column) return 0;
        var line = doc.getLine(row + 1);
        var startRange = this.getMatching(doc, { row, column });
        if (!startRange || startRange.start.row == row) return 0;
        column = match[0].length;
        var indent = this.$getIndent(doc.getLine(startRange.start.row));
        doc.replace(new Range(row + 1, 0, row + 1, column), indent);
      };
      this.getMatching = function(session, row, column) {
        if (row == void 0)
          row = session.selection.lead;
        if (typeof row == "object") {
          column = row.column;
          row = row.row;
        }
        var startToken = session.getTokenAt(row, column);
        var KW_START = "keyword.start", KW_END = "keyword.end";
        var tok;
        if (!startToken)
          return;
        if (startToken.type == KW_START) {
          var it = new TokenIterator(session, row, column);
          it.step = it.stepForward;
        } else if (startToken.type == KW_END) {
          var it = new TokenIterator(session, row, column);
          it.step = it.stepBackward;
        } else
          return;
        while (tok = it.step()) {
          if (tok.type == KW_START || tok.type == KW_END)
            break;
        }
        if (!tok || tok.type == startToken.type)
          return;
        var col = it.getCurrentTokenColumn();
        var row = it.getCurrentTokenRow();
        return new Range(row, col, row, col + tok.value.length);
      };
      this.$id = "ace/mode/logiql";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_logiql();

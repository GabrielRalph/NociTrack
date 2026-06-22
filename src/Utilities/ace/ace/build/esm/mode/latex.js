import {
  require_latex_highlight_rules
} from "../chunk-4CFSM6ZU.js";
import {
  require_fold_mode
} from "../chunk-JEWW6F7O.js";
import {
  require_cstyle,
  require_text
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

// src/mode/folding/latex.js
var require_latex = __commonJS({
  "src/mode/folding/latex.js"(exports) {
    "use strict";
    var oop = require_oop();
    var BaseFoldMode = require_fold_mode().FoldMode;
    var Range = require_range().Range;
    var TokenIterator = require_token_iterator().TokenIterator;
    var keywordLevels = {
      "\\subparagraph": 1,
      "\\paragraph": 2,
      "\\subsubsubsection": 3,
      "\\subsubsection": 4,
      "\\subsection": 5,
      "\\section": 6,
      "\\chapter": 7,
      "\\part": 8,
      "\\begin": 9,
      "\\end": 10
    };
    var FoldMode = exports.FoldMode = function() {
    };
    oop.inherits(FoldMode, BaseFoldMode);
    (function() {
      this.foldingStartMarker = /^\s*\\(begin)|\s*\\(part|chapter|(?:sub)*(?:section|paragraph))\b|{\s*$/;
      this.foldingStopMarker = /^\s*\\(end)\b|^\s*}/;
      this.getFoldWidgetRange = function(session, foldStyle, row) {
        var line = session.doc.getLine(row);
        var match = this.foldingStartMarker.exec(line);
        if (match) {
          if (match[1])
            return this.latexBlock(session, row, match[0].length - 1);
          if (match[2])
            return this.latexSection(session, row, match[0].length - 1);
          return this.openingBracketBlock(session, "{", row, match.index);
        }
        var match = this.foldingStopMarker.exec(line);
        if (match) {
          if (match[1])
            return this.latexBlock(session, row, match[0].length - 1);
          return this.closingBracketBlock(session, "}", row, match.index + match[0].length);
        }
      };
      this.latexBlock = function(session, row, column, returnRange) {
        var keywords = {
          "\\begin": 1,
          "\\end": -1
        };
        var stream = new TokenIterator(session, row, column);
        var token = stream.getCurrentToken();
        if (!token || !(token.type == "storage.type" || token.type == "constant.character.escape"))
          return;
        var val = token.value;
        var dir = keywords[val];
        var getType = function() {
          var token2 = stream.stepForward();
          var type2 = token2 && token2.type == "lparen" ? stream.stepForward().value : "";
          if (dir === -1) {
            stream.stepBackward();
            if (type2)
              stream.stepBackward();
          }
          return type2;
        };
        var stack = [getType()];
        var startColumn = dir === -1 ? stream.getCurrentTokenColumn() : session.getLine(row).length;
        var startRow = row;
        stream.step = dir === -1 ? stream.stepBackward : stream.stepForward;
        while (token = stream.step()) {
          if (!token || !(token.type == "storage.type" || token.type == "constant.character.escape"))
            continue;
          var level = keywords[token.value];
          if (!level)
            continue;
          var type = getType();
          if (level === dir)
            stack.unshift(type);
          else if (stack.shift() !== type || !stack.length)
            break;
        }
        if (stack.length)
          return;
        if (dir == 1) {
          stream.stepBackward();
          stream.stepBackward();
        }
        if (returnRange)
          return stream.getCurrentTokenRange();
        var row = stream.getCurrentTokenRow();
        if (dir === -1)
          return new Range(row, session.getLine(row).length, startRow, startColumn);
        else
          return new Range(startRow, startColumn, row, stream.getCurrentTokenColumn());
      };
      this.latexSection = function(session, row, column) {
        var stream = new TokenIterator(session, row, column);
        var token = stream.getCurrentToken();
        if (!token || token.type != "storage.type")
          return;
        var startLevel = keywordLevels[token.value] || 0;
        var stackDepth = 0;
        var endRow = row;
        while (token = stream.stepForward()) {
          if (token.type !== "storage.type")
            continue;
          var level = keywordLevels[token.value] || 0;
          if (level >= 9) {
            if (!stackDepth)
              endRow = stream.getCurrentTokenRow() - 1;
            stackDepth += level == 9 ? 1 : -1;
            if (stackDepth < 0)
              break;
          } else if (level >= startLevel)
            break;
        }
        if (!stackDepth)
          endRow = stream.getCurrentTokenRow() - 1;
        while (endRow > row && !/\S/.test(session.getLine(endRow)))
          endRow--;
        return new Range(
          row,
          session.getLine(row).length,
          endRow,
          session.getLine(endRow).length
        );
      };
    }).call(FoldMode.prototype);
  }
});

// src/mode/latex.js
var require_latex2 = __commonJS({
  "src/mode/latex.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var LatexHighlightRules = require_latex_highlight_rules().LatexHighlightRules;
    var CstyleBehaviour = require_cstyle().CstyleBehaviour;
    var LatexFoldMode = require_latex().FoldMode;
    var Mode = function() {
      this.HighlightRules = LatexHighlightRules;
      this.foldingRules = new LatexFoldMode();
      this.$behaviour = new CstyleBehaviour({ braces: true });
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.type = "text";
      this.lineCommentStart = "%";
      this.$id = "ace/mode/latex";
      this.getMatching = function(session, row, column) {
        if (row == void 0)
          row = session.selection.lead;
        if (typeof row == "object") {
          column = row.column;
          row = row.row;
        }
        var startToken = session.getTokenAt(row, column);
        if (!startToken)
          return;
        if (startToken.value == "\\begin" || startToken.value == "\\end") {
          return this.foldingRules.latexBlock(session, row, column, true);
        }
      };
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_latex2();

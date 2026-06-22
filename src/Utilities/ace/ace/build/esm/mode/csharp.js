import {
  require_csharp_highlight_rules
} from "../chunk-ORNMXBSW.js";
import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
import "../chunk-XTXP6FMQ.js";
import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
import "../chunk-JEWW6F7O.js";
import {
  require_text
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
import {
  require_range
} from "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/folding/csharp.js
var require_csharp = __commonJS({
  "src/mode/folding/csharp.js"(exports) {
    "use strict";
    var oop = require_oop();
    var Range = require_range().Range;
    var CFoldMode = require_cstyle().FoldMode;
    var FoldMode = exports.FoldMode = function(commentRegex) {
      if (commentRegex) {
        this.foldingStartMarker = new RegExp(
          this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(
          this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
        );
      }
    };
    oop.inherits(FoldMode, CFoldMode);
    (function() {
      this.usingRe = /^\s*using \S/;
      this.getFoldWidgetRangeBase = this.getFoldWidgetRange;
      this.getFoldWidgetBase = this.getFoldWidget;
      this.getFoldWidget = function(session, foldStyle, row) {
        var fw = this.getFoldWidgetBase(session, foldStyle, row);
        if (!fw) {
          var line = session.getLine(row);
          if (/^\s*#region\b/.test(line))
            return "start";
          var usingRe = this.usingRe;
          if (usingRe.test(line)) {
            var prev = session.getLine(row - 1);
            var next = session.getLine(row + 1);
            if (!usingRe.test(prev) && usingRe.test(next))
              return "start";
          }
        }
        return fw;
      };
      this.getFoldWidgetRange = function(session, foldStyle, row) {
        var range = this.getFoldWidgetRangeBase(session, foldStyle, row);
        if (range)
          return range;
        var line = session.getLine(row);
        if (this.usingRe.test(line))
          return this.getUsingStatementBlock(session, line, row);
        if (/^\s*#region\b/.test(line))
          return this.getRegionBlock(session, line, row);
      };
      this.getUsingStatementBlock = function(session, line, row) {
        var startColumn = line.match(this.usingRe)[0].length - 1;
        var maxRow = session.getLength();
        var startRow = row;
        var endRow = row;
        while (++row < maxRow) {
          line = session.getLine(row);
          if (/^\s*$/.test(line))
            continue;
          if (!this.usingRe.test(line))
            break;
          endRow = row;
        }
        if (endRow > startRow) {
          var endColumn = session.getLine(endRow).length;
          return new Range(startRow, startColumn, endRow, endColumn);
        }
      };
      this.getRegionBlock = function(session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;
        var re = /^\s*#(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
          line = session.getLine(row);
          var m = re.exec(line);
          if (!m)
            continue;
          if (m[1])
            depth--;
          else
            depth++;
          if (!depth)
            break;
        }
        var endRow = row;
        if (endRow > startRow) {
          return new Range(startRow, startColumn, endRow, line.length);
        }
      };
    }).call(FoldMode.prototype);
  }
});

// src/mode/csharp.js
var require_csharp2 = __commonJS({
  "src/mode/csharp.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var CSharpHighlightRules = require_csharp_highlight_rules().CSharpHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var CStyleFoldMode = require_csharp().FoldMode;
    var Mode = function() {
      this.HighlightRules = CSharpHighlightRules;
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
      this.createWorker = function(session) {
        return null;
      };
      this.$id = "ace/mode/csharp";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_csharp2();

import {
  require_fold_mode
} from "./chunk-JEWW6F7O.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  require_range
} from "./chunk-VZTAWSAA.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/folding/coffee.js
var require_coffee = __commonJS({
  "src/mode/folding/coffee.js"(exports) {
    "use strict";
    var oop = require_oop();
    var BaseFoldMode = require_fold_mode().FoldMode;
    var Range = require_range().Range;
    var FoldMode = exports.FoldMode = function() {
    };
    oop.inherits(FoldMode, BaseFoldMode);
    (function() {
      this.commentBlock = function(session, row) {
        var re = /\S/;
        var line = session.getLine(row);
        var startLevel = line.search(re);
        if (startLevel == -1 || line[startLevel] != "#")
          return;
        var startColumn = line.length;
        var maxRow = session.getLength();
        var startRow = row;
        var endRow = row;
        while (++row < maxRow) {
          line = session.getLine(row);
          var level = line.search(re);
          if (level == -1)
            continue;
          if (line[level] != "#")
            break;
          endRow = row;
        }
        if (endRow > startRow) {
          var endColumn = session.getLine(endRow).length;
          return new Range(startRow, startColumn, endRow, endColumn);
        }
      };
      this.getFoldWidgetRange = function(session, foldStyle, row) {
        var range = this.indentationBlock(session, row);
        if (range)
          return range;
        range = this.commentBlock(session, row);
        if (range)
          return range;
      };
      this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
        var indent = line.search(/\S/);
        var next = session.getLine(row + 1);
        var prev = session.getLine(row - 1);
        var prevIndent = prev.search(/\S/);
        var nextIndent = next.search(/\S/);
        if (indent == -1) {
          session.foldWidgets[row - 1] = prevIndent != -1 && prevIndent < nextIndent ? "start" : "";
          return "";
        }
        if (prevIndent == -1) {
          if (indent == nextIndent && line[indent] == "#" && next[indent] == "#") {
            session.foldWidgets[row - 1] = "";
            session.foldWidgets[row + 1] = "";
            return "start";
          }
        } else if (prevIndent == indent && line[indent] == "#" && prev[indent] == "#") {
          if (session.getLine(row - 2).search(/\S/) == -1) {
            session.foldWidgets[row - 1] = "start";
            session.foldWidgets[row + 1] = "";
            return "";
          }
        }
        if (prevIndent != -1 && prevIndent < indent)
          session.foldWidgets[row - 1] = "start";
        else
          session.foldWidgets[row - 1] = "";
        if (indent < nextIndent)
          return "start";
        else
          return "";
      };
    }).call(FoldMode.prototype);
  }
});

export {
  require_coffee
};

import {
  require_coffee
} from "./chunk-2I2EWIJ7.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  require_range
} from "./chunk-VZTAWSAA.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/folding/yaml.js
var require_yaml = __commonJS({
  "src/mode/folding/yaml.js"(exports) {
    "use strict";
    var oop = require_oop();
    var CoffeeFoldMode = require_coffee().FoldMode;
    var Range = require_range().Range;
    var FoldMode = exports.FoldMode = function() {
    };
    oop.inherits(FoldMode, CoffeeFoldMode);
    (function() {
      this.getFoldWidgetRange = function(session, foldStyle, row) {
        var re = /\S/;
        var line = session.getLine(row);
        var startLevel = line.search(re);
        var isCommentFold = line[startLevel] === "#";
        var isDashFold = line[startLevel] === "-";
        if (startLevel == -1)
          return;
        var startColumn = line.length;
        var maxRow = session.getLength();
        var startRow = row;
        var endRow = row;
        if (isCommentFold) {
          var range = this.commentBlock(session, row);
          if (range)
            return range;
        } else if (isDashFold) {
          var range = this.indentationBlock(session, row);
          if (range)
            return range;
        } else {
          while (++row < maxRow) {
            var line = session.getLine(row);
            var level = line.search(re);
            if (level == -1)
              continue;
            if (level <= startLevel && line[startLevel] !== "-") {
              var token = session.getTokenAt(row, 0);
              if (!token || token.type !== "string")
                break;
            }
            endRow = row;
          }
        }
        if (endRow > startRow) {
          var endColumn = session.getLine(endRow).length;
          return new Range(startRow, startColumn, endRow, endColumn);
        }
      };
      this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
        var indent = line.search(/\S/);
        var next = session.getLine(row + 1);
        var prev = session.getLine(row - 1);
        var prevIndent = prev.search(/\S/);
        var nextIndent = next.search(/\S/);
        var lineStartsWithDash = line[indent] === "-";
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
        if (prevIndent != -1 && prevIndent < indent) {
          session.foldWidgets[row - 1] = "start";
        } else if (prevIndent != -1 && (prevIndent == indent && lineStartsWithDash)) {
          session.foldWidgets[row - 1] = "start";
        } else {
          session.foldWidgets[row - 1] = "";
        }
        if (indent < nextIndent)
          return "start";
        else
          return "";
      };
    }).call(FoldMode.prototype);
  }
});

export {
  require_yaml
};

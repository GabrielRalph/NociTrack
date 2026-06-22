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

// src/mode/folding/ini.js
var require_ini = __commonJS({
  "src/mode/folding/ini.js"(exports) {
    "use strict";
    var oop = require_oop();
    var Range = require_range().Range;
    var BaseFoldMode = require_fold_mode().FoldMode;
    var FoldMode = exports.FoldMode = function() {
    };
    oop.inherits(FoldMode, BaseFoldMode);
    (function() {
      this.foldingStartMarker = /^\s*\[([^\])]*)]\s*(?:$|[;#])/;
      this.getFoldWidgetRange = function(session, foldStyle, row) {
        var re = this.foldingStartMarker;
        var line = session.getLine(row);
        var m = line.match(re);
        if (!m) return;
        var startName = m[1] + ".";
        var startColumn = line.length;
        var maxRow = session.getLength();
        var startRow = row;
        var endRow = row;
        while (++row < maxRow) {
          line = session.getLine(row);
          if (/^\s*$/.test(line))
            continue;
          m = line.match(re);
          if (m && m[1].lastIndexOf(startName, 0) !== 0)
            break;
          endRow = row;
        }
        if (endRow > startRow) {
          var endColumn = session.getLine(endRow).length;
          return new Range(startRow, startColumn, endRow, endColumn);
        }
      };
    }).call(FoldMode.prototype);
  }
});

export {
  require_ini
};

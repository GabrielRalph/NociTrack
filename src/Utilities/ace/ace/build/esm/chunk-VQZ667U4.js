import {
  require_fold_mode
} from "./chunk-JEWW6F7O.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/folding/pythonic.js
var require_pythonic = __commonJS({
  "src/mode/folding/pythonic.js"(exports) {
    "use strict";
    var oop = require_oop();
    var BaseFoldMode = require_fold_mode().FoldMode;
    var FoldMode = exports.FoldMode = function(markers) {
      this.foldingStartMarker = new RegExp("([\\[{])(?:\\s*)$|(" + markers + ")(?:\\s*)(?:#.*)?$");
    };
    oop.inherits(FoldMode, BaseFoldMode);
    (function() {
      this.getFoldWidgetRange = function(session, foldStyle, row) {
        var line = session.getLine(row);
        var match = line.match(this.foldingStartMarker);
        if (match) {
          if (match[1])
            return this.openingBracketBlock(session, match[1], row, match.index);
          if (match[2])
            return this.indentationBlock(session, row, match.index + match[2].length);
          return this.indentationBlock(session, row);
        }
      };
    }).call(FoldMode.prototype);
  }
});

export {
  require_pythonic
};

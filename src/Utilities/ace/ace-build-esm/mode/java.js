import {
  require_java_highlight_rules
} from "../chunk-XGFHPVIP.js";
import {
  require_javascript3 as require_javascript
} from "../chunk-WK3XC3NH.js";
import "../chunk-U2RKG7VZ.js";
import "../chunk-IWXN4N2Q.js";
import "../chunk-5GQPFTLG.js";
import "../chunk-KWFYXSQI.js";
import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
import "../chunk-5O3J7W3G.js";
import "../chunk-JEWW6F7O.js";
import "../chunk-LMYBRGOM.js";
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

// src/mode/folding/java.js
var require_java = __commonJS({
  "src/mode/folding/java.js"(exports) {
    "use strict";
    var oop = require_oop();
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Range = require_range().Range;
    var FoldMode = exports.FoldMode = function() {
    };
    oop.inherits(FoldMode, CStyleFoldMode);
    (function() {
      this.importRegex = /^import /;
      this.getCStyleFoldWidget = this.getFoldWidget;
      this.getFoldWidget = function(session, foldStyle, row) {
        if (foldStyle === "markbegin") {
          var line = session.getLine(row);
          if (this.importRegex.test(line)) {
            if (row == 0 || !this.importRegex.test(session.getLine(row - 1)))
              return "start";
          }
        }
        return this.getCStyleFoldWidget(session, foldStyle, row);
      };
      this.getCstyleFoldWidgetRange = this.getFoldWidgetRange;
      this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        var match = line.match(this.importRegex);
        if (!match || foldStyle !== "markbegin")
          return this.getCstyleFoldWidgetRange(session, foldStyle, row, forceMultiline);
        var startColumn = match[0].length;
        var maxRow = session.getLength();
        var startRow = row;
        var endRow = row;
        while (++row < maxRow) {
          var line = session.getLine(row);
          if (line.match(/^\s*$/))
            continue;
          if (!line.match(this.importRegex))
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

// src/mode/java.js
var require_java2 = __commonJS({
  "src/mode/java.js"(exports) {
    var oop = require_oop();
    var JavaScriptMode = require_javascript().Mode;
    var JavaHighlightRules = require_java_highlight_rules().JavaHighlightRules;
    var JavaFoldMode = require_java().FoldMode;
    var Mode = function() {
      JavaScriptMode.call(this);
      this.HighlightRules = JavaHighlightRules;
      this.foldingRules = new JavaFoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, JavaScriptMode);
    (function() {
      this.createWorker = function(session) {
        return null;
      };
      this.$id = "ace/mode/java";
      this.snippetFileId = "ace/snippets/java";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_java2();

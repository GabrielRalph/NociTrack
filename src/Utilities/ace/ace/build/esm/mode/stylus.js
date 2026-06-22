import {
  require_stylus_highlight_rules
} from "../chunk-ANCHU5T4.js";
import "../chunk-KDDWKWK4.js";
import {
  require_coffee
} from "../chunk-2I2EWIJ7.js";
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
import "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/stylus.js
var require_stylus = __commonJS({
  "src/mode/stylus.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var StylusHighlightRules = require_stylus_highlight_rules().StylusHighlightRules;
    var FoldMode = require_coffee().FoldMode;
    var Mode = function() {
      this.HighlightRules = StylusHighlightRules;
      this.foldingRules = new FoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.blockComment = { start: "/*", end: "*/" };
      this.$id = "ace/mode/stylus";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_stylus();

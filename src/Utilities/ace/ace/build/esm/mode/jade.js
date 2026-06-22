import {
  require_jade_highlight_rules
} from "../chunk-FYRKKJFG.js";
import "../chunk-77N2I42G.js";
import "../chunk-BHX2VTF2.js";
import "../chunk-3FPUC6FF.js";
import "../chunk-AEEIZ3MR.js";
import "../chunk-2TRMU5AT.js";
import "../chunk-VGQVSYAP.js";
import "../chunk-ELLQ4DAZ.js";
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

// src/mode/jade.js
var require_jade = __commonJS({
  "src/mode/jade.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var JadeHighlightRules = require_jade_highlight_rules().JadeHighlightRules;
    var FoldMode = require_coffee().FoldMode;
    var Mode = function() {
      this.HighlightRules = JadeHighlightRules;
      this.foldingRules = new FoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.$id = "ace/mode/jade";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_jade();

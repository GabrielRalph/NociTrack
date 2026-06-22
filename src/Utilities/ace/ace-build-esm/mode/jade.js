import {
  require_jade_highlight_rules
} from "../chunk-MHKVH37N.js";
import "../chunk-5UXISGZR.js";
import "../chunk-FFLEYC7K.js";
import "../chunk-UKNFP5QK.js";
import "../chunk-LFFVNDBV.js";
import "../chunk-QUH7KENW.js";
import "../chunk-CYWDEW5M.js";
import "../chunk-IWXN4N2Q.js";
import "../chunk-6CORPKBO.js";
import {
  require_coffee
} from "../chunk-2I2EWIJ7.js";
import "../chunk-JEWW6F7O.js";
import {
  require_text
} from "../chunk-LMYBRGOM.js";
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

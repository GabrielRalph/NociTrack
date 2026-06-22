import {
  require_slim_highlight_rules
} from "../chunk-LH3FRRH5.js";
import {
  require_sass
} from "../chunk-CNSYEHW6.js";
import "../chunk-72S3SBBK.js";
import {
  require_scss
} from "../chunk-HRB3VLEF.js";
import {
  require_markdown
} from "../chunk-5MRL44IR.js";
import "../chunk-AUMNEEOP.js";
import {
  require_less
} from "../chunk-BMM52ELD.js";
import "../chunk-5UXISGZR.js";
import "../chunk-FFLEYC7K.js";
import "../chunk-UKNFP5QK.js";
import "../chunk-LPXLUTKN.js";
import "../chunk-VYNLZFVQ.js";
import {
  require_ruby
} from "../chunk-SYPWA7BG.js";
import "../chunk-RNYV3ZVW.js";
import {
  require_coffee
} from "../chunk-LSAWCK5Y.js";
import "../chunk-LFFVNDBV.js";
import "../chunk-2RIJSYM2.js";
import "../chunk-O7XPGT62.js";
import {
  require_javascript3 as require_javascript
} from "../chunk-WK3XC3NH.js";
import "../chunk-U2RKG7VZ.js";
import {
  require_css
} from "../chunk-QKY627QG.js";
import "../chunk-QMZLOC5Q.js";
import "../chunk-YNHGF363.js";
import "../chunk-QUH7KENW.js";
import "../chunk-CYWDEW5M.js";
import "../chunk-IWXN4N2Q.js";
import "../chunk-6CORPKBO.js";
import "../chunk-5GQPFTLG.js";
import "../chunk-2I2EWIJ7.js";
import "../chunk-67VAGNRS.js";
import "../chunk-5O3J7W3G.js";
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

// src/mode/slim.js
var require_slim = __commonJS({
  "src/mode/slim.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var SlimHighlightRules = require_slim_highlight_rules().SlimHighlightRules;
    var Mode = function() {
      TextMode.call(this);
      this.HighlightRules = SlimHighlightRules;
      this.createModeDelegates({
        javascript: require_javascript().Mode,
        markdown: require_markdown().Mode,
        coffee: require_coffee().Mode,
        scss: require_scss().Mode,
        sass: require_sass().Mode,
        less: require_less().Mode,
        ruby: require_ruby().Mode,
        css: require_css().Mode
      });
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.$id = "ace/mode/slim";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_slim();

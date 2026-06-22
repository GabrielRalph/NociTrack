import {
  require_slim_highlight_rules
} from "../chunk-LLSP4UEZ.js";
import {
  require_sass
} from "../chunk-M6BA2VEX.js";
import "../chunk-TH7PHBYB.js";
import {
  require_scss
} from "../chunk-ZSYKNOIN.js";
import {
  require_markdown
} from "../chunk-BP5OTNWR.js";
import "../chunk-JRVP7XSF.js";
import {
  require_less
} from "../chunk-K33J3DEJ.js";
import "../chunk-77N2I42G.js";
import "../chunk-BHX2VTF2.js";
import "../chunk-3FPUC6FF.js";
import "../chunk-62TQPHI7.js";
import "../chunk-5OIIHWY4.js";
import {
  require_ruby
} from "../chunk-GPUNLWUW.js";
import "../chunk-TSBBTMR5.js";
import {
  require_coffee
} from "../chunk-LPFFMLUR.js";
import "../chunk-AEEIZ3MR.js";
import "../chunk-VKLEZYSZ.js";
import "../chunk-O7XPGT62.js";
import {
  require_javascript3 as require_javascript
} from "../chunk-GUNMO7YX.js";
import "../chunk-OXTSUXGN.js";
import {
  require_css
} from "../chunk-KAXDTHX4.js";
import "../chunk-QMZLOC5Q.js";
import "../chunk-B3BIPF3P.js";
import "../chunk-2TRMU5AT.js";
import "../chunk-VGQVSYAP.js";
import "../chunk-ELLQ4DAZ.js";
import "../chunk-KDDWKWK4.js";
import "../chunk-5GQPFTLG.js";
import "../chunk-2I2EWIJ7.js";
import "../chunk-67VAGNRS.js";
import "../chunk-5O3J7W3G.js";
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

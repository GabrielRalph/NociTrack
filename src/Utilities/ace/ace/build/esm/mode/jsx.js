import {
  require_javascript3 as require_javascript
} from "../chunk-GUNMO7YX.js";
import "../chunk-OXTSUXGN.js";
import "../chunk-ELLQ4DAZ.js";
import "../chunk-5GQPFTLG.js";
import "../chunk-67VAGNRS.js";
import "../chunk-5O3J7W3G.js";
import "../chunk-JEWW6F7O.js";
import "../chunk-QXTEMBPD.js";
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

// src/mode/jsx.js
var require_jsx = __commonJS({
  "src/mode/jsx.js"(exports) {
    var oop = require_oop();
    var jsMode = require_javascript().Mode;
    function Mode() {
      jsMode.call(this);
      this.$highlightRuleConfig = { jsx: true };
    }
    oop.inherits(Mode, jsMode);
    (function() {
      this.$id = "ace/mode/jsx";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_jsx();

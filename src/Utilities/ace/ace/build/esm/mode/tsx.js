import {
  require_typescript
} from "../chunk-GNE7RJ5A.js";
import "../chunk-V22BFUFQ.js";
import {
  require_javascript,
  require_javascript2
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

// src/mode/tsx.js
var require_tsx = __commonJS({
  "src/mode/tsx.js"(exports) {
    var oop = require_oop();
    var JavaScriptBehaviour = require_javascript().JavaScriptBehaviour;
    var JavaScriptFoldMode = require_javascript2().FoldMode;
    var tsMode = require_typescript().Mode;
    var Mode = function() {
      tsMode.call(this);
      this.$highlightRuleConfig = { jsx: true };
      this.foldingRules = new JavaScriptFoldMode();
      this.$behaviour = new JavaScriptBehaviour();
    };
    oop.inherits(Mode, tsMode);
    (function() {
      this.$id = "ace/mode/tsx";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_tsx();

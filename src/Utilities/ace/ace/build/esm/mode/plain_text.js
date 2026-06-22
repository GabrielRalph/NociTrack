import {
  require_behaviour,
  require_text,
  require_text_highlight_rules
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

// src/mode/plain_text.js
var require_plain_text = __commonJS({
  "src/mode/plain_text.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var Behaviour = require_behaviour().Behaviour;
    var Mode = function() {
      this.HighlightRules = TextHighlightRules;
      this.$behaviour = new Behaviour();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.type = "text";
      this.getNextLineIndent = function(state, line, tab) {
        return "";
      };
      this.$id = "ace/mode/plain_text";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_plain_text();

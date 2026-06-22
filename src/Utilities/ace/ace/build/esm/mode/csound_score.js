import {
  require_csound_score_highlight_rules
} from "../chunk-UWHTUECG.js";
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

// src/mode/csound_score.js
var require_csound_score = __commonJS({
  "src/mode/csound_score.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var CsoundScoreHighlightRules = require_csound_score_highlight_rules().CsoundScoreHighlightRules;
    var Mode = function() {
      this.HighlightRules = CsoundScoreHighlightRules;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = ";";
      this.blockComment = { start: "/*", end: "*/" };
      this.$id = "ace/mode/csound_score";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_csound_score();

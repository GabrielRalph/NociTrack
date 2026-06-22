import {
  require_text,
  require_text_highlight_rules
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

// src/mode/cuttlefish_highlight_rules.js
var require_cuttlefish_highlight_rules = __commonJS({
  "src/mode/cuttlefish_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var CuttlefishHighlightRules = function() {
      this.$rules = {
        start: [{
          token: ["text", "comment"],
          regex: /^([ \t]*)(#.*)$/
        }, {
          token: ["text", "keyword", "text", "string", "text", "comment"],
          regex: /^([ \t]*)(include)([ \t]*)([A-Za-z0-9-\_\.\*\/]+)([ \t]*)(#.*)?$/
        }, {
          token: ["text", "keyword", "text", "operator", "text", "string", "text", "comment"],
          regex: /^([ \t]*)([A-Za-z0-9-_]+(?:\.[A-Za-z0-9-_]+)*)([ \t]*)(=)([ \t]*)([^ \t#][^#]*?)([ \t]*)(#.*)?$/
        }, {
          defaultToken: "invalid"
        }]
      };
      this.normalizeRules();
    };
    CuttlefishHighlightRules.metaData = {
      fileTypes: ["conf"],
      keyEquivalent: "^~C",
      name: "Cuttlefish",
      scopeName: "source.conf"
    };
    oop.inherits(CuttlefishHighlightRules, TextHighlightRules);
    exports.CuttlefishHighlightRules = CuttlefishHighlightRules;
  }
});

// src/mode/cuttlefish.js
var require_cuttlefish = __commonJS({
  "src/mode/cuttlefish.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var CuttlefishHighlightRules = require_cuttlefish_highlight_rules().CuttlefishHighlightRules;
    var Mode = function() {
      this.HighlightRules = CuttlefishHighlightRules;
      this.foldingRules = null;
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "#";
      this.blockComment = null;
      this.$id = "ace/mode/cuttlefish";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_cuttlefish();

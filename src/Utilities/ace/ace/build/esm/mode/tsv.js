import {
  require_csv
} from "../chunk-4QEL4KRI.js";
import {
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

// src/mode/tsv_highlight_rules.js
var require_tsv_highlight_rules = __commonJS({
  "src/mode/tsv_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var TsvHighlightRules = function() {
      TextHighlightRules.call(this);
    };
    oop.inherits(TsvHighlightRules, TextHighlightRules);
    exports.TsvHighlightRules = TsvHighlightRules;
  }
});

// src/mode/tsv.js
var require_tsv = __commonJS({
  "src/mode/tsv.js"(exports) {
    var CSVMode = require_csv().Mode;
    var TsvHighlightRules = require_tsv_highlight_rules().TsvHighlightRules;
    var Mode = function(options) {
      var mode = new CSVMode({
        splitter: "	",
        quote: '"'
      });
      mode.HighlightRules = TsvHighlightRules;
      mode.$id = "ace/mode/tsv";
      return mode;
    };
    exports.Mode = Mode;
  }
});
export default require_tsv();

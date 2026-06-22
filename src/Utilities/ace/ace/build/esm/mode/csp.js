import {
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

// src/mode/csp_highlight_rules.js
var require_csp_highlight_rules = __commonJS({
  "src/mode/csp_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var CspHighlightRules = function() {
      var keywordMapper = this.createKeywordMapper({
        "constant.language": "child-src|connect-src|default-src|font-src|frame-src|img-src|manifest-src|media-src|object-src|script-src|style-src|worker-src|base-uri|plugin-types|sandbox|disown-opener|form-action|frame-ancestors|report-uri|report-to|upgrade-insecure-requests|block-all-mixed-content|require-sri-for|reflected-xss|referrer|policy-uri",
        "variable": "'none'|'self'|'unsafe-inline'|'unsafe-eval'|'strict-dynamic'|'unsafe-hashed-attributes'"
      }, "identifier", true);
      this.$rules = {
        start: [{
          token: "string.link",
          regex: /https?:[^;\s]*/
        }, {
          token: "operator.punctuation",
          regex: /;/
        }, {
          token: keywordMapper,
          regex: /[^\s;]+/
        }]
      };
    };
    oop.inherits(CspHighlightRules, TextHighlightRules);
    exports.CspHighlightRules = CspHighlightRules;
  }
});

// src/mode/csp.js
var require_csp = __commonJS({
  "src/mode/csp.js"(exports) {
    var TextMode = require_text().Mode;
    var CspHighlightRules = require_csp_highlight_rules().CspHighlightRules;
    var oop = require_oop();
    var Mode = function() {
      this.HighlightRules = CspHighlightRules;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.$id = "ace/mode/csp";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_csp();

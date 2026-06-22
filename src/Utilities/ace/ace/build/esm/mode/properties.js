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

// src/mode/properties_highlight_rules.js
var require_properties_highlight_rules = __commonJS({
  "src/mode/properties_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var PropertiesHighlightRules = function() {
      var escapeRe = /\\u[0-9a-fA-F]{4}|\\/;
      this.$rules = {
        "start": [
          {
            token: "comment",
            regex: /[!#].*$/
          },
          {
            // Empty value
            token: "keyword",
            regex: /[=:]$/
          },
          {
            token: "keyword",
            regex: /[=:]/,
            next: "value"
          },
          {
            token: "constant.language.escape",
            regex: escapeRe
          },
          {
            defaultToken: "variable"
          }
        ],
        "value": [
          {
            // Multi-line string
            regex: /\\$/,
            token: "string",
            next: "value"
          },
          {
            regex: /$/,
            token: "string",
            next: "start"
          },
          {
            token: "constant.language.escape",
            regex: escapeRe
          },
          {
            defaultToken: "string"
          }
        ]
      };
    };
    oop.inherits(PropertiesHighlightRules, TextHighlightRules);
    exports.PropertiesHighlightRules = PropertiesHighlightRules;
  }
});

// src/mode/properties.js
var require_properties = __commonJS({
  "src/mode/properties.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var PropertiesHighlightRules = require_properties_highlight_rules().PropertiesHighlightRules;
    var Mode = function() {
      this.HighlightRules = PropertiesHighlightRules;
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.$id = "ace/mode/properties";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_properties();

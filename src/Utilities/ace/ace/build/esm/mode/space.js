import {
  require_coffee
} from "../chunk-2I2EWIJ7.js";
import "../chunk-JEWW6F7O.js";
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

// src/mode/space_highlight_rules.js
var require_space_highlight_rules = __commonJS({
  "src/mode/space_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var SpaceHighlightRules = function() {
      this.$rules = {
        "start": [
          {
            token: "empty_line",
            regex: / */,
            next: "key"
          },
          {
            token: "empty_line",
            regex: /$/,
            next: "key"
          }
        ],
        "key": [
          {
            token: "variable",
            regex: /\S+/
          },
          {
            token: "empty_line",
            regex: /$/,
            next: "start"
          },
          {
            token: "keyword.operator",
            regex: / /,
            next: "value"
          }
        ],
        "value": [
          {
            token: "keyword.operator",
            regex: /$/,
            next: "start"
          },
          {
            token: "string",
            regex: /[^$]/
          }
        ]
      };
    };
    oop.inherits(SpaceHighlightRules, TextHighlightRules);
    exports.SpaceHighlightRules = SpaceHighlightRules;
  }
});

// src/mode/space.js
var require_space = __commonJS({
  "src/mode/space.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var FoldMode = require_coffee().FoldMode;
    var SpaceHighlightRules = require_space_highlight_rules().SpaceHighlightRules;
    var Mode = function() {
      this.HighlightRules = SpaceHighlightRules;
      this.foldingRules = new FoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.$id = "ace/mode/space";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_space();

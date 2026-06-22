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

// src/mode/cirru_highlight_rules.js
var require_cirru_highlight_rules = __commonJS({
  "src/mode/cirru_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var CirruHighlightRules = function() {
      this.$rules = {
        start: [{
          token: "constant.numeric",
          regex: /[\d\.]+/
        }, {
          token: "comment.line.double-dash",
          regex: /--/,
          next: "comment"
        }, {
          token: "storage.modifier",
          regex: /\(/
        }, {
          token: "storage.modifier",
          regex: /,/,
          next: "line"
        }, {
          token: "support.function",
          regex: /[^\(\)"\s{}\[\]]+/,
          next: "line"
        }, {
          token: "string.quoted.double",
          regex: /"/,
          next: "string"
        }, {
          token: "storage.modifier",
          regex: /\)/
        }],
        comment: [{
          token: "comment.line.double-dash",
          regex: / +[^\n]+/,
          next: "start"
        }],
        string: [{
          token: "string.quoted.double",
          regex: /"/,
          next: "line"
        }, {
          token: "constant.character.escape",
          regex: /\\/,
          next: "escape"
        }, {
          token: "string.quoted.double",
          regex: /[^\\"]+/
        }],
        escape: [{
          token: "constant.character.escape",
          regex: /./,
          next: "string"
        }],
        line: [{
          token: "constant.numeric",
          regex: /[\d\.]+/
        }, {
          token: "markup.raw",
          regex: /^\s*/,
          next: "start"
        }, {
          token: "storage.modifier",
          regex: /\$/,
          next: "start"
        }, {
          token: "variable.parameter",
          regex: /[^\(\)"\s{}\[\]]+/
        }, {
          token: "storage.modifier",
          regex: /\(/,
          next: "start"
        }, {
          token: "storage.modifier",
          regex: /\)/
        }, {
          token: "markup.raw",
          regex: /^ */,
          next: "start"
        }, {
          token: "string.quoted.double",
          regex: /"/,
          next: "string"
        }]
      };
    };
    oop.inherits(CirruHighlightRules, TextHighlightRules);
    exports.CirruHighlightRules = CirruHighlightRules;
  }
});

// src/mode/cirru.js
var require_cirru = __commonJS({
  "src/mode/cirru.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var CirruHighlightRules = require_cirru_highlight_rules().CirruHighlightRules;
    var CoffeeFoldMode = require_coffee().FoldMode;
    var Mode = function() {
      this.HighlightRules = CirruHighlightRules;
      this.foldingRules = new CoffeeFoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "--";
      this.$id = "ace/mode/cirru";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_cirru();

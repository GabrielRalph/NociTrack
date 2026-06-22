import {
  require_html as require_html3
} from "../chunk-EFCTGSKH.js";
import {
  require_html,
  require_html2
} from "../chunk-2RIJSYM2.js";
import "../chunk-O7XPGT62.js";
import "../chunk-WK3XC3NH.js";
import "../chunk-U2RKG7VZ.js";
import "../chunk-QKY627QG.js";
import "../chunk-QMZLOC5Q.js";
import "../chunk-YNHGF363.js";
import {
  require_html_highlight_rules
} from "../chunk-QUH7KENW.js";
import "../chunk-CYWDEW5M.js";
import "../chunk-IWXN4N2Q.js";
import "../chunk-6CORPKBO.js";
import "../chunk-5GQPFTLG.js";
import "../chunk-67VAGNRS.js";
import "../chunk-5O3J7W3G.js";
import "../chunk-JEWW6F7O.js";
import "../chunk-LMYBRGOM.js";
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

// src/mode/handlebars_highlight_rules.js
var require_handlebars_highlight_rules = __commonJS({
  "src/mode/handlebars_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    function pop2(currentState, stack) {
      stack.splice(0, 3);
      return stack.shift() || "start";
    }
    var HandlebarsHighlightRules = function() {
      HtmlHighlightRules.call(this);
      var hbs = {
        regex: "(?={{)",
        push: "handlebars"
      };
      for (var key in this.$rules) {
        this.$rules[key].unshift(hbs);
      }
      this.$rules.handlebars = [{
        token: "comment.start",
        regex: "{{!--",
        push: [{
          token: "comment.end",
          regex: "--}}",
          next: pop2
        }, {
          defaultToken: "comment"
        }]
      }, {
        token: "comment.start",
        regex: "{{!",
        push: [{
          token: "comment.end",
          regex: "}}",
          next: pop2
        }, {
          defaultToken: "comment"
        }]
      }, {
        token: "support.function",
        // unescaped variable
        regex: "{{{",
        push: [{
          token: "support.function",
          regex: "}}}",
          next: pop2
        }, {
          token: "variable.parameter",
          regex: "[a-zA-Z_$][a-zA-Z0-9_$]*"
        }]
      }, {
        token: "storage.type.start",
        // begin section
        regex: "{{[#\\^/&]?",
        push: [{
          token: "storage.type.end",
          regex: "}}",
          next: pop2
        }, {
          token: "variable.parameter",
          regex: "[a-zA-Z_$][a-zA-Z0-9_$]*"
        }]
      }];
      this.normalizeRules();
    };
    oop.inherits(HandlebarsHighlightRules, HtmlHighlightRules);
    exports.HandlebarsHighlightRules = HandlebarsHighlightRules;
  }
});

// src/mode/handlebars.js
var require_handlebars = __commonJS({
  "src/mode/handlebars.js"(exports) {
    var oop = require_oop();
    var HtmlMode = require_html2().Mode;
    var HandlebarsHighlightRules = require_handlebars_highlight_rules().HandlebarsHighlightRules;
    var HtmlBehaviour = require_html3().HtmlBehaviour;
    var HtmlFoldMode = require_html().FoldMode;
    var Mode = function() {
      HtmlMode.call(this);
      this.HighlightRules = HandlebarsHighlightRules;
      this.$behaviour = new HtmlBehaviour();
    };
    oop.inherits(Mode, HtmlMode);
    (function() {
      this.blockComment = { start: "{{!--", end: "--}}" };
      this.$id = "ace/mode/handlebars";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_handlebars();

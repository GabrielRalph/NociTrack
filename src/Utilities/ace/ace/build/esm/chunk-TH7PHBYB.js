import {
  require_scss_highlight_rules
} from "./chunk-77N2I42G.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  require_lang
} from "./chunk-NNGFYYI3.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/sass_highlight_rules.js
var require_sass_highlight_rules = __commonJS({
  "src/mode/sass_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var lang = require_lang();
    var ScssHighlightRules = require_scss_highlight_rules().ScssHighlightRules;
    var SassHighlightRules = function() {
      ScssHighlightRules.call(this);
      var start = this.$rules.start;
      if (start[1].token == "comment") {
        start.splice(1, 1, {
          onMatch: function(value, currentState, stack) {
            stack.unshift(this.next, -1, value.length - 2, currentState);
            return "comment";
          },
          regex: /^\s*\/\*/,
          next: "comment"
        }, {
          token: "error.invalid",
          regex: "/\\*|[{;}]"
        }, {
          token: "support.type",
          regex: /^\s*:[\w\-]+\s/
        });
        this.$rules.comment = [
          { regex: /^\s*/, onMatch: function(value, currentState, stack) {
            if (stack[1] === -1)
              stack[1] = Math.max(stack[2], value.length - 1);
            if (value.length <= stack[1]) {
              stack.shift();
              stack.shift();
              stack.shift();
              this.next = stack.shift();
              return "text";
            } else {
              this.next = "";
              return "comment";
            }
          }, next: "start" },
          { defaultToken: "comment" }
        ];
      }
    };
    oop.inherits(SassHighlightRules, ScssHighlightRules);
    exports.SassHighlightRules = SassHighlightRules;
  }
});

export {
  require_sass_highlight_rules
};

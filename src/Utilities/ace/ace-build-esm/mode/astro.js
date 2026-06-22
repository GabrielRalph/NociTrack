import {
  require_html as require_html2
} from "../chunk-EFCTGSKH.js";
import {
  require_html2 as require_html
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
import {
  require_javascript_highlight_rules
} from "../chunk-IWXN4N2Q.js";
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

// src/mode/astro_highlight_rules.js
var require_astro_highlight_rules = __commonJS({
  "src/mode/astro_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    var JavascriptHighlightRules = require_javascript_highlight_rules().JavaScriptHighlightRules;
    var AstroHighlightRules = function() {
      HtmlHighlightRules.call(this);
      var astro = {
        token: "paren.quasi.start",
        regex: /{/,
        next: function(state, stack) {
          if (state !== "start") {
            if (state.indexOf("attribute-equals") !== -1) {
              stack.splice(0);
              stack.unshift("tag_stuff");
            } else {
              stack.unshift(state);
            }
          }
          return "inline-js-start";
        }
      };
      for (var key in this.$rules) {
        if (key.startsWith("js") || key.startsWith("css") || key.startsWith("comment"))
          continue;
        this.$rules[key].unshift(astro);
      }
      this.$rules.start.unshift({
        token: "comment",
        regex: /^---$/,
        onMatch: function(value, state, stack) {
          stack.splice(0);
          return this.token;
        },
        next: "javascript-start"
      });
      this.embedRules(JavascriptHighlightRules, "javascript-", [
        {
          regex: /^---$/,
          token: "comment",
          next: "start",
          onMatch: function(value, state, stack) {
            stack.splice(0);
            return this.token;
          }
        }
      ]);
      this.embedRules(JavascriptHighlightRules, "inline-js-");
      var astroRules = [
        {
          regex: /}/,
          token: "paren.quasi.end",
          onMatch: function(value, state, stack) {
            if (stack[0] === "inline-js-start") {
              stack.shift();
              this.next = stack.shift();
              if (this.next.indexOf("string") !== -1)
                return "paren.quasi.end";
              return "paren.rparen";
            } else {
              this.next = stack.shift() || "start";
              return this.token;
            }
          }
        },
        {
          regex: /{/,
          token: "paren.lparen",
          push: "inline-js-start"
        }
      ];
      this.$rules["inline-js-start"].unshift(astroRules);
      this.$rules["inline-js-no_regex"].unshift(astroRules);
      function overwriteJSXendRule(prefix) {
        for (var index in this.$rules[prefix + "jsxAttributes"]) {
          if (this.$rules[prefix + "jsxAttributes"][index].token === "meta.tag.punctuation.tag-close.xml") {
            this.$rules[prefix + "jsxAttributes"][index].onMatch = function(value, currentState, stack) {
              if (currentState == stack[0]) stack.shift();
              if (value.length == 2) {
                if (stack[0] == this.nextState) stack[1]--;
                if (!stack[1] || stack[1] < 0) {
                  stack.splice(0, 2);
                }
              }
              this.next = stack[0] || prefix + "start";
              return [{ type: this.token, value }];
            };
            break;
          }
        }
      }
      overwriteJSXendRule.call(this, "javascript-");
      overwriteJSXendRule.call(this, "inline-js-");
      this.normalizeRules();
    };
    oop.inherits(AstroHighlightRules, HtmlHighlightRules);
    exports.AstroHighlightRules = AstroHighlightRules;
  }
});

// src/mode/astro.js
var require_astro = __commonJS({
  "src/mode/astro.js"(exports) {
    var oop = require_oop();
    var HtmlMode = require_html().Mode;
    var AstroHighlightRules = require_astro_highlight_rules().AstroHighlightRules;
    var HtmlBehaviour = require_html2().HtmlBehaviour;
    var Mode = function() {
      HtmlMode.call(this);
      this.HighlightRules = AstroHighlightRules;
      this.$behaviour = new HtmlBehaviour();
    };
    oop.inherits(Mode, HtmlMode);
    (function() {
      this.$id = "ace/mode/astro";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_astro();

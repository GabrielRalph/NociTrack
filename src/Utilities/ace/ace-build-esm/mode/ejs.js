import {
  require_ruby
} from "../chunk-SYPWA7BG.js";
import "../chunk-RNYV3ZVW.js";
import {
  require_html2 as require_html
} from "../chunk-2RIJSYM2.js";
import "../chunk-O7XPGT62.js";
import {
  require_javascript3 as require_javascript
} from "../chunk-WK3XC3NH.js";
import "../chunk-U2RKG7VZ.js";
import {
  require_css
} from "../chunk-QKY627QG.js";
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

// src/mode/ejs.js
var require_ejs = __commonJS({
  "src/mode/ejs.js"(exports) {
    var oop = require_oop();
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    var JavaScriptHighlightRules = require_javascript_highlight_rules().JavaScriptHighlightRules;
    var EjsHighlightRules = function(start, end) {
      HtmlHighlightRules.call(this);
      if (!start)
        start = "(?:<%|<\\?|{{)";
      if (!end)
        end = "(?:%>|\\?>|}})";
      for (var i in this.$rules) {
        this.$rules[i].unshift({
          token: "markup.list.meta.tag",
          regex: start + "(?![>}])[-=]?",
          push: "ejs-start"
        });
      }
      this.embedRules(new JavaScriptHighlightRules({ jsx: false }).getRules(), "ejs-", [{
        token: "markup.list.meta.tag",
        regex: "-?" + end,
        next: "pop"
      }, {
        token: "comment",
        regex: "//.*?" + end,
        next: "pop"
      }]);
      this.normalizeRules();
    };
    oop.inherits(EjsHighlightRules, HtmlHighlightRules);
    exports.EjsHighlightRules = EjsHighlightRules;
    var oop = require_oop();
    var HtmlMode = require_html().Mode;
    var JavaScriptMode = require_javascript().Mode;
    var CssMode = require_css().Mode;
    var RubyMode = require_ruby().Mode;
    var Mode = function() {
      HtmlMode.call(this);
      this.HighlightRules = EjsHighlightRules;
      this.createModeDelegates({
        "js-": JavaScriptMode,
        "css-": CssMode,
        "ejs-": JavaScriptMode
      });
    };
    oop.inherits(Mode, HtmlMode);
    (function() {
      this.$id = "ace/mode/ejs";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_ejs();

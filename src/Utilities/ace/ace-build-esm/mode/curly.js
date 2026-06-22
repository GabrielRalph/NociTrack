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
import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
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

// src/mode/curly_highlight_rules.js
var require_curly_highlight_rules = __commonJS({
  "src/mode/curly_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    var CurlyHighlightRules = function() {
      HtmlHighlightRules.call(this);
      this.$rules["start"].unshift({
        token: "variable",
        regex: "{{",
        push: "curly-start"
      });
      this.$rules["curly-start"] = [{
        token: "variable",
        regex: "}}",
        next: "pop"
      }];
      this.normalizeRules();
    };
    oop.inherits(CurlyHighlightRules, HtmlHighlightRules);
    exports.CurlyHighlightRules = CurlyHighlightRules;
  }
});

// src/mode/curly.js
var require_curly = __commonJS({
  "src/mode/curly.js"(exports) {
    var oop = require_oop();
    var HtmlMode = require_html2().Mode;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var HtmlFoldMode = require_html().FoldMode;
    var CurlyHighlightRules = require_curly_highlight_rules().CurlyHighlightRules;
    var Mode = function() {
      HtmlMode.call(this);
      this.HighlightRules = CurlyHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.foldingRules = new HtmlFoldMode();
    };
    oop.inherits(Mode, HtmlMode);
    (function() {
      this.$id = "ace/mode/curly";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_curly();

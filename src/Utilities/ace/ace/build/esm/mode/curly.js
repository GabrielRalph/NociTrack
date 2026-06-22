import {
  require_html,
  require_html2
} from "../chunk-VKLEZYSZ.js";
import "../chunk-O7XPGT62.js";
import "../chunk-GUNMO7YX.js";
import "../chunk-OXTSUXGN.js";
import "../chunk-KAXDTHX4.js";
import "../chunk-QMZLOC5Q.js";
import "../chunk-B3BIPF3P.js";
import {
  require_html_highlight_rules
} from "../chunk-2TRMU5AT.js";
import "../chunk-VGQVSYAP.js";
import "../chunk-ELLQ4DAZ.js";
import "../chunk-KDDWKWK4.js";
import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
import "../chunk-67VAGNRS.js";
import "../chunk-5O3J7W3G.js";
import "../chunk-JEWW6F7O.js";
import "../chunk-QXTEMBPD.js";
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

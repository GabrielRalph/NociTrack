import {
  require_r_highlight_rules
} from "../chunk-KMR6D5PZ.js";
import "../chunk-MLXF52CK.js";
import {
  require_html2 as require_html
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
import "../chunk-5GQPFTLG.js";
import "../chunk-67VAGNRS.js";
import "../chunk-5O3J7W3G.js";
import "../chunk-JEWW6F7O.js";
import {
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

// src/mode/rhtml_highlight_rules.js
var require_rhtml_highlight_rules = __commonJS({
  "src/mode/rhtml_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var RHighlightRules = require_r_highlight_rules().RHighlightRules;
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var RHtmlHighlightRules = function() {
      HtmlHighlightRules.call(this);
      this.$rules["start"].unshift({
        token: "support.function.codebegin",
        regex: "^<!--\\s*begin.rcode\\s*(?:.*)",
        next: "r-start"
      });
      this.embedRules(RHighlightRules, "r-", [{
        token: "support.function.codeend",
        regex: "^\\s*end.rcode\\s*-->",
        next: "start"
      }], ["start"]);
      this.normalizeRules();
    };
    oop.inherits(RHtmlHighlightRules, TextHighlightRules);
    exports.RHtmlHighlightRules = RHtmlHighlightRules;
  }
});

// src/mode/rhtml.js
var require_rhtml = __commonJS({
  "src/mode/rhtml.js"(exports) {
    var oop = require_oop();
    var HtmlMode = require_html().Mode;
    var RHtmlHighlightRules = require_rhtml_highlight_rules().RHtmlHighlightRules;
    var Mode = function(doc, session) {
      HtmlMode.call(this);
      this.$session = session;
      this.HighlightRules = RHtmlHighlightRules;
    };
    oop.inherits(Mode, HtmlMode);
    (function() {
      this.insertChunkInfo = {
        value: "<!--begin.rcode\n\nend.rcode-->\n",
        position: { row: 0, column: 15 }
      };
      this.getLanguageMode = function(position) {
        return this.$session.getState(position.row).match(/^r-/) ? "R" : "HTML";
      };
      this.$id = "ace/mode/rhtml";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_rhtml();

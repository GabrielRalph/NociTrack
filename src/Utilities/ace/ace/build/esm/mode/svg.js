import {
  require_xml as require_xml2
} from "../chunk-JRVP7XSF.js";
import {
  require_mixed
} from "../chunk-O7XPGT62.js";
import {
  require_javascript3 as require_javascript
} from "../chunk-GUNMO7YX.js";
import {
  require_xml2 as require_xml
} from "../chunk-OXTSUXGN.js";
import {
  require_xml_highlight_rules
} from "../chunk-VGQVSYAP.js";
import {
  require_javascript_highlight_rules
} from "../chunk-ELLQ4DAZ.js";
import "../chunk-5GQPFTLG.js";
import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
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

// src/mode/svg_highlight_rules.js
var require_svg_highlight_rules = __commonJS({
  "src/mode/svg_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var JavaScriptHighlightRules = require_javascript_highlight_rules().JavaScriptHighlightRules;
    var XmlHighlightRules = require_xml_highlight_rules().XmlHighlightRules;
    var SvgHighlightRules = function() {
      XmlHighlightRules.call(this);
      this.embedTagRules(JavaScriptHighlightRules, "js-", "script");
      this.normalizeRules();
    };
    oop.inherits(SvgHighlightRules, XmlHighlightRules);
    exports.SvgHighlightRules = SvgHighlightRules;
  }
});

// src/mode/svg.js
var require_svg = __commonJS({
  "src/mode/svg.js"(exports) {
    var oop = require_oop();
    var XmlMode = require_xml2().Mode;
    var JavaScriptMode = require_javascript().Mode;
    var SvgHighlightRules = require_svg_highlight_rules().SvgHighlightRules;
    var MixedFoldMode = require_mixed().FoldMode;
    var XmlFoldMode = require_xml().FoldMode;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      XmlMode.call(this);
      this.HighlightRules = SvgHighlightRules;
      this.createModeDelegates({
        "js-": JavaScriptMode
      });
      this.foldingRules = new MixedFoldMode(new XmlFoldMode(), {
        "js-": new CStyleFoldMode()
      });
    };
    oop.inherits(Mode, XmlMode);
    (function() {
      this.getNextLineIndent = function(state, line, tab) {
        return this.$getIndent(line);
      };
      this.$id = "ace/mode/svg";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_svg();

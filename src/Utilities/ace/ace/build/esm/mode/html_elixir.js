import {
  require_elixir,
  require_elixir_highlight_rules
} from "../chunk-S6SX2CPF.js";
import {
  require_html2 as require_html
} from "../chunk-VKLEZYSZ.js";
import "../chunk-O7XPGT62.js";
import {
  require_javascript3 as require_javascript
} from "../chunk-GUNMO7YX.js";
import "../chunk-OXTSUXGN.js";
import {
  require_css
} from "../chunk-KAXDTHX4.js";
import "../chunk-QMZLOC5Q.js";
import "../chunk-B3BIPF3P.js";
import {
  require_html_highlight_rules
} from "../chunk-2TRMU5AT.js";
import "../chunk-VGQVSYAP.js";
import "../chunk-ELLQ4DAZ.js";
import "../chunk-KDDWKWK4.js";
import "../chunk-5GQPFTLG.js";
import "../chunk-2I2EWIJ7.js";
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

// src/mode/html_elixir_highlight_rules.js
var require_html_elixir_highlight_rules = __commonJS({
  "src/mode/html_elixir_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    var ElixirHighlightRules = require_elixir_highlight_rules().ElixirHighlightRules;
    var HtmlElixirHighlightRules = function() {
      HtmlHighlightRules.call(this);
      var startRules = [
        {
          regex: "<%%|%%>",
          token: "constant.language.escape"
        },
        {
          token: "comment.start.eex",
          regex: "<%#",
          push: [{
            token: "comment.end.eex",
            regex: "%>",
            next: "pop",
            defaultToken: "comment"
          }]
        },
        {
          token: "support.elixir_tag",
          regex: "<%+(?!>)[-=]?",
          push: "elixir-start"
        }
      ];
      var endRules = [
        {
          token: "support.elixir_tag",
          regex: "%>",
          next: "pop"
        },
        {
          token: "comment",
          regex: "#(?:[^%]|%[^>])*"
        }
      ];
      for (var key in this.$rules)
        this.$rules[key].unshift.apply(this.$rules[key], startRules);
      this.embedRules(ElixirHighlightRules, "elixir-", endRules, ["start"]);
      this.normalizeRules();
    };
    oop.inherits(HtmlElixirHighlightRules, HtmlHighlightRules);
    exports.HtmlElixirHighlightRules = HtmlElixirHighlightRules;
  }
});

// src/mode/html_elixir.js
var require_html_elixir = __commonJS({
  "src/mode/html_elixir.js"(exports) {
    var oop = require_oop();
    var HtmlElixirHighlightRules = require_html_elixir_highlight_rules().HtmlElixirHighlightRules;
    var HtmlMode = require_html().Mode;
    var JavaScriptMode = require_javascript().Mode;
    var CssMode = require_css().Mode;
    var ElixirMode = require_elixir().Mode;
    var Mode = function() {
      HtmlMode.call(this);
      this.HighlightRules = HtmlElixirHighlightRules;
      this.createModeDelegates({
        "js-": JavaScriptMode,
        "css-": CssMode,
        "elixir-": ElixirMode
      });
    };
    oop.inherits(Mode, HtmlMode);
    (function() {
      this.$id = "ace/mode/html_elixir";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_html_elixir();

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

// src/mode/django.js
var require_django = __commonJS({
  "src/mode/django.js"(exports) {
    var oop = require_oop();
    var HtmlMode = require_html().Mode;
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var DjangoHighlightRules = function() {
      this.$rules = {
        "start": [{
          token: "string",
          regex: '".*?"'
        }, {
          token: "string",
          regex: "'.*?'"
        }, {
          token: "constant",
          regex: "[0-9]+"
        }, {
          token: "variable",
          regex: "[-_a-zA-Z0-9:]+"
        }],
        "tag": [{
          token: "entity.name.function",
          regex: "[a-zA-Z][_a-zA-Z0-9]*",
          next: "start"
        }]
      };
    };
    oop.inherits(DjangoHighlightRules, TextHighlightRules);
    var DjangoHtmlHighlightRules = function() {
      HtmlHighlightRules.call(this);
      var startRules = [
        {
          token: "comment.line",
          regex: "\\{#.*?#\\}"
        },
        {
          token: "comment.block",
          regex: "\\{\\%\\s*comment\\s*\\%\\}",
          push: [{
            token: "comment.block",
            regex: "\\{\\%\\s*endcomment\\s*\\%\\}",
            next: "pop"
          }, {
            defaultToken: "comment.block"
          }]
        },
        {
          token: "constant.language",
          regex: "\\{\\{",
          push: "django-start"
        },
        {
          token: "constant.language",
          regex: "\\{\\%",
          push: "django-tag"
        }
      ];
      var endRules = [
        {
          token: "constant.language",
          regex: "\\%\\}",
          next: "pop"
        },
        {
          token: "constant.language",
          regex: "\\}\\}",
          next: "pop"
        }
      ];
      for (var key in this.$rules)
        this.$rules[key].unshift.apply(this.$rules[key], startRules);
      this.embedRules(DjangoHighlightRules, "django-", endRules, ["start"]);
      this.normalizeRules();
    };
    oop.inherits(DjangoHtmlHighlightRules, HtmlHighlightRules);
    var Mode = function() {
      HtmlMode.call(this);
      this.HighlightRules = DjangoHtmlHighlightRules;
    };
    oop.inherits(Mode, HtmlMode);
    (function() {
      this.$id = "ace/mode/django";
      this.snippetFileId = "ace/snippets/django";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_django();

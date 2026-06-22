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
import "../chunk-IWXN4N2Q.js";
import "../chunk-6CORPKBO.js";
import "../chunk-5GQPFTLG.js";
import "../chunk-67VAGNRS.js";
import "../chunk-5O3J7W3G.js";
import "../chunk-JEWW6F7O.js";
import {
  require_text_highlight_rules
} from "../chunk-LMYBRGOM.js";
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

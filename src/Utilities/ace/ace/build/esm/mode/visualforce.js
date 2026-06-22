import {
  require_html,
  require_html2
} from "../chunk-VKLEZYSZ.js";
import "../chunk-O7XPGT62.js";
import "../chunk-GUNMO7YX.js";
import {
  require_xml
} from "../chunk-OXTSUXGN.js";
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

// src/mode/visualforce_highlight_rules.js
var require_visualforce_highlight_rules = __commonJS({
  "src/mode/visualforce_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    function string(options) {
      return {
        token: options.token + ".start",
        regex: options.start,
        push: [{
          token: "constant.language.escape",
          regex: options.escape
        }, {
          token: options.token + ".end",
          regex: options.start,
          next: "pop"
        }, {
          defaultToken: options.token
        }]
      };
    }
    var VisualforceHighlightRules = function() {
      var keywordMapper = this.createKeywordMapper({
        "variable.language": "$Action|$Api|$Component|$ComponentLabel|$CurrentPage|$FieldSet|$Label|$Label|$ObjectType|$Organization|$Page|$Permission|$Profile|$Resource|$SControl|$Setup|$Site|$System.OriginDateTime|$User|$UserRole|Site|UITheme|UIThemeDisplayed",
        "keyword": "",
        "storage.type": "",
        "constant.language": "true|false|null|TRUE|FALSE|NULL",
        "support.function": "DATE|DATEVALUE|DATETIMEVALUE|DAY|MONTH|NOW|TODAY|YEAR|BLANKVALUE|ISBLANK|NULLVALUE|PRIORVALUE|AND|CASE|IF|ISCHANGED|ISNEW|ISNUMBER|NOT|OR|ABS|CEILING|EXP|FLOOR|LN|LOG|MAX|MIN|MOD|ROUND|SQRT|BEGINS|BR|CASESAFEID|CONTAINS|FIND|GETSESSIONID|HTMLENCODE|ISPICKVAL|JSENCODE|JSINHTMLENCODE|LEFT|LEN|LOWER|LPAD|MID|RIGHT|RPAD|SUBSTITUTE|TEXT|TRIM|UPPER|URLENCODE|VALUE|GETRECORDIDS|INCLUDE|LINKTO|REGEX|REQUIRESCRIPT|URLFOR|VLOOKUP|HTMLENCODE|JSENCODE|JSINHTMLENCODE|URLENCODE"
      }, "identifier");
      HtmlHighlightRules.call(this);
      var hbs = {
        token: "keyword.start",
        regex: "{!",
        push: "Visualforce"
      };
      for (var key in this.$rules) {
        this.$rules[key].unshift(hbs);
      }
      this.$rules.Visualforce = [
        string({
          start: '"',
          escape: /\\[btnfr"'\\]/,
          token: "string",
          multiline: true
        }),
        string({
          start: "'",
          escape: /\\[btnfr"'\\]/,
          token: "string",
          multiline: true
        }),
        {
          token: "comment.start",
          regex: "\\/\\*",
          push: [
            { token: "comment.end", regex: "\\*\\/|(?=})", next: "pop" },
            { defaultToken: "comment", caseInsensitive: true }
          ]
        },
        {
          token: "keyword.end",
          regex: "}",
          next: "pop"
        },
        {
          token: keywordMapper,
          regex: /[a-zA-Z$_\u00a1-\uffff][a-zA-Z\d$_\u00a1-\uffff]*\b/
        },
        {
          token: "keyword.operator",
          regex: /==|<>|!=|<=|>=|&&|\|\||[+\-*/^()=<>&]/
        },
        {
          token: "punctuation.operator",
          regex: /[?:,;.]/
        },
        {
          token: "paren.lparen",
          regex: /[\[({]/
        },
        {
          token: "paren.rparen",
          regex: /[\])}]/
        }
      ];
      this.normalizeRules();
    };
    oop.inherits(VisualforceHighlightRules, HtmlHighlightRules);
    exports.VisualforceHighlightRules = VisualforceHighlightRules;
  }
});

// src/mode/visualforce.js
var require_visualforce = __commonJS({
  "src/mode/visualforce.js"(exports) {
    var oop = require_oop();
    var HtmlMode = require_html2().Mode;
    var VisualforceHighlightRules = require_visualforce_highlight_rules().VisualforceHighlightRules;
    var XmlBehaviour = require_xml().XmlBehaviour;
    var HtmlFoldMode = require_html().FoldMode;
    function VisualforceMode() {
      HtmlMode.call(this);
      this.HighlightRules = VisualforceHighlightRules;
      this.foldingRules = new HtmlFoldMode();
      this.$behaviour = new XmlBehaviour();
    }
    oop.inherits(VisualforceMode, HtmlMode);
    VisualforceMode.prototype.emmetConfig = {
      profile: "xhtml"
    };
    exports.Mode = VisualforceMode;
  }
});
export default require_visualforce();

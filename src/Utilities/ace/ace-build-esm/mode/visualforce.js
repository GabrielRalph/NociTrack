import {
  require_html,
  require_html2
} from "../chunk-2RIJSYM2.js";
import "../chunk-O7XPGT62.js";
import "../chunk-WK3XC3NH.js";
import {
  require_xml
} from "../chunk-U2RKG7VZ.js";
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

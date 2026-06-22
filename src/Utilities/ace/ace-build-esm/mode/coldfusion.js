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
import {
  require_lang
} from "../chunk-NNGFYYI3.js";
import "../chunk-3SNEZHBJ.js";
import "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/coldfusion_highlight_rules.js
var require_coldfusion_highlight_rules = __commonJS({
  "src/mode/coldfusion_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var JavaScriptHighlightRules = require_javascript_highlight_rules().JavaScriptHighlightRules;
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    var ColdfusionHighlightRules = function() {
      HtmlHighlightRules.call(this);
      this.$rules.tag[2].token = function(start, tag) {
        var group = tag.slice(0, 2) == "cf" ? "keyword" : "meta.tag";
        return [
          "meta.tag.punctuation." + (start == "<" ? "" : "end-") + "tag-open.xml",
          group + ".tag-name.xml"
        ];
      };
      var jsAndCss = Object.keys(this.$rules).filter(function(x) {
        return /^(js|css)-/.test(x);
      });
      this.embedRules({
        cfmlComment: [
          { regex: "<!---", token: "comment.start", push: "cfmlComment" },
          { regex: "--->", token: "comment.end", next: "pop" },
          { defaultToken: "comment" }
        ]
      }, "", [
        { regex: "<!---", token: "comment.start", push: "cfmlComment" }
      ], [
        "comment",
        "start",
        "tag_whitespace",
        "cdata"
      ].concat(jsAndCss));
      this.$rules.cfTag = [
        { include: "attributes" },
        { token: "meta.tag.punctuation.tag-close.xml", regex: "/?>", next: "pop" }
      ];
      var cfTag = {
        token: function(start, tag) {
          return [
            "meta.tag.punctuation." + (start == "<" ? "" : "end-") + "tag-open.xml",
            "keyword.tag-name.xml"
          ];
        },
        regex: "(</?)(cf[-_a-zA-Z0-9:.]+)",
        push: "cfTag"
      };
      jsAndCss.forEach(function(s) {
        this.$rules[s].unshift(cfTag);
      }, this);
      this.embedTagRules(new JavaScriptHighlightRules({ jsx: false }).getRules(), "cfjs-", "cfscript");
      this.normalizeRules();
    };
    oop.inherits(ColdfusionHighlightRules, HtmlHighlightRules);
    exports.ColdfusionHighlightRules = ColdfusionHighlightRules;
  }
});

// src/mode/coldfusion.js
var require_coldfusion = __commonJS({
  "src/mode/coldfusion.js"(exports) {
    var oop = require_oop();
    var lang = require_lang();
    var HtmlMode = require_html().Mode;
    var ColdfusionHighlightRules = require_coldfusion_highlight_rules().ColdfusionHighlightRules;
    var voidElements = "cfabort|cfapplication|cfargument|cfassociate|cfbreak|cfcache|cfcollection|cfcookie|cfdbinfo|cfdirectory|cfdump|cfelse|cfelseif|cferror|cfexchangecalendar|cfexchangeconnection|cfexchangecontact|cfexchangefilter|cfexchangetask|cfexit|cffeed|cffile|cfflush|cfftp|cfheader|cfhtmlhead|cfhttpparam|cfimage|cfimport|cfinclude|cfindex|cfinsert|cfinvokeargument|cflocation|cflog|cfmailparam|cfNTauthenticate|cfobject|cfobjectcache|cfparam|cfpdfformparam|cfprint|cfprocparam|cfprocresult|cfproperty|cfqueryparam|cfregistry|cfreportparam|cfrethrow|cfreturn|cfschedule|cfsearch|cfset|cfsetting|cfthrow|cfzipparam)".split("|");
    var Mode = function() {
      HtmlMode.call(this);
      this.HighlightRules = ColdfusionHighlightRules;
    };
    oop.inherits(Mode, HtmlMode);
    (function() {
      this.voidElements = oop.mixin(lang.arrayToMap(voidElements), this.voidElements);
      this.getNextLineIndent = function(state, line, tab) {
        return this.$getIndent(line);
      };
      this.$id = "ace/mode/coldfusion";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_coldfusion();

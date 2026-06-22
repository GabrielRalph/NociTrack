import {
  require_java_highlight_rules
} from "../chunk-XGFHPVIP.js";
import {
  require_html_highlight_rules
} from "../chunk-QUH7KENW.js";
import "../chunk-CYWDEW5M.js";
import "../chunk-IWXN4N2Q.js";
import "../chunk-6CORPKBO.js";
import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
import "../chunk-KWFYXSQI.js";
import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
import "../chunk-JEWW6F7O.js";
import {
  require_text
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

// src/mode/jsp_highlight_rules.js
var require_jsp_highlight_rules = __commonJS({
  "src/mode/jsp_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    var JavaHighlightRules = require_java_highlight_rules().JavaHighlightRules;
    var JspHighlightRules = function() {
      HtmlHighlightRules.call(this);
      var builtinVariables = "request|response|out|session|application|config|pageContext|page|Exception";
      var keywords = "page|include|taglib";
      var startRules = [
        {
          token: "comment",
          regex: "<%--",
          push: "jsp-dcomment"
        },
        {
          token: "meta.tag",
          // jsp open tag
          regex: "<%@?|<%=?|<%!?|<jsp:[^>]+>",
          push: "jsp-start"
        }
      ];
      var endRules = [
        {
          token: "meta.tag",
          // jsp close tag
          regex: "%>|<\\/jsp:[^>]+>",
          next: "pop"
        },
        {
          token: "variable.language",
          regex: builtinVariables
        },
        {
          token: "keyword",
          regex: keywords
        }
      ];
      for (var key in this.$rules)
        this.$rules[key].unshift.apply(this.$rules[key], startRules);
      this.embedRules(JavaHighlightRules, "jsp-", endRules, ["start"]);
      this.addRules({
        "jsp-dcomment": [{
          token: "comment",
          regex: ".*?--%>",
          next: "pop"
        }]
      });
      this.normalizeRules();
    };
    oop.inherits(JspHighlightRules, HtmlHighlightRules);
    exports.JspHighlightRules = JspHighlightRules;
  }
});

// src/mode/jsp.js
var require_jsp = __commonJS({
  "src/mode/jsp.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var JspHighlightRules = require_jsp_highlight_rules().JspHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = JspHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = this.$defaultBehaviour;
      this.foldingRules = new CStyleFoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.$id = "ace/mode/jsp";
      this.snippetFileId = "ace/snippets/jsp";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_jsp();

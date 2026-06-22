import {
  require_csharp_highlight_rules
} from "../chunk-ORNMXBSW.js";
import {
  require_html2 as require_html,
  require_html_completions
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
import {
  require_doc_comment_highlight_rules
} from "../chunk-XTXP6FMQ.js";
import "../chunk-67VAGNRS.js";
import "../chunk-5O3J7W3G.js";
import "../chunk-JEWW6F7O.js";
import "../chunk-QXTEMBPD.js";
import "../chunk-VVYM7U3C.js";
import {
  require_token_iterator
} from "../chunk-GLBKRGPE.js";
import "../chunk-WVZ3WZY2.js";
import "../chunk-ZYSXI253.js";
import "../chunk-BPTL7YIQ.js";
import "../chunk-MF4T7I5J.js";
import {
  require_oop
} from "../chunk-WAWTRYJW.js";
import "../chunk-CVMYQKGX.js";
import {
  require_lang
} from "../chunk-NNGFYYI3.js";
import "../chunk-3SNEZHBJ.js";
import "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/razor_highlight_rules.js
var require_razor_highlight_rules = __commonJS({
  "src/mode/razor_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var lang = require_lang();
    var DocCommentHighlightRules = require_doc_comment_highlight_rules().DocCommentHighlightRules;
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    var CSharpHighlightRules = require_csharp_highlight_rules().CSharpHighlightRules;
    var RazorLangHighlightRules = function() {
      CSharpHighlightRules.call(this);
      var processPotentialCallback = function(value, stackItem) {
        if (typeof stackItem === "function")
          return stackItem(value);
        return stackItem;
      };
      var inBraces = "in-braces";
      this.$rules.start.unshift({
        regex: "[\\[({]",
        onMatch: function(value, state, stack) {
          var prefix = /razor-[^\-]+-/.exec(state)[0];
          stack.unshift(value);
          stack.unshift(prefix + inBraces);
          this.next = prefix + inBraces;
          return "paren.lparen";
        }
      }, {
        start: "@\\*",
        end: "\\*@",
        token: "comment"
      });
      var parentCloseMap = {
        "{": "}",
        "[": "]",
        "(": ")"
      };
      this.$rules[inBraces] = lang.deepCopy(this.$rules.start);
      this.$rules[inBraces].unshift({
        regex: "[\\])}]",
        onMatch: function(value, state, stack) {
          var open = stack[1];
          if (parentCloseMap[open] !== value)
            return "invalid.illegal";
          stack.shift();
          stack.shift();
          this.next = processPotentialCallback(value, stack[0]) || "start";
          return "paren.rparen";
        }
      });
    };
    oop.inherits(RazorLangHighlightRules, CSharpHighlightRules);
    var RazorHighlightRules = function() {
      HtmlHighlightRules.call(this);
      var blockStartRule = {
        regex: "@[({]|@functions{|@code ?{",
        onMatch: function(value, state, stack) {
          stack.unshift(value);
          stack.unshift("razor-block-start");
          this.next = "razor-block-start";
          return "punctuation.block.razor";
        }
      };
      var blockEndMap = {
        "@{": "}",
        "@(": ")",
        "@functions{": "}",
        "@code {": "}",
        "@code{": "}"
      };
      var blockEndRule = {
        regex: "[})]",
        onMatch: function(value, state, stack) {
          var blockStart = stack[1];
          if (blockEndMap[blockStart] !== value)
            return "invalid.illegal";
          stack.shift();
          stack.shift();
          this.next = stack.shift() || "start";
          return "punctuation.block.razor";
        }
      };
      var shortStartRule = {
        regex: "@(?![{(])",
        onMatch: function(value, state, stack) {
          stack.unshift("razor-short-start");
          this.next = "razor-short-start";
          return "punctuation.short.razor";
        }
      };
      var shortEndRule = {
        token: "",
        regex: "(?=[^A-Za-z_\\.()\\[\\]])",
        next: "pop"
      };
      var ifStartRule = {
        regex: "@(?=if)",
        onMatch: function(value, state, stack) {
          stack.unshift(function(value2) {
            if (value2 !== "}")
              return "start";
            return stack.shift() || "start";
          });
          this.next = "razor-block-start";
          return "punctuation.control.razor";
        }
      };
      var razorStartRules = [
        {
          start: "@\\*",
          end: "\\*@",
          token: "comment"
        },
        {
          token: ["meta.directive.razor", "text", "identifier"],
          regex: "^(\\s*@(?:model|inject|inherits|implements|attribute|layout|namespace|rendermode|using))(\\s+)(.+)$"
        },
        {
          token: ["meta.directive.razor", "text", "string"],
          regex: "^(\\s*@page)(\\s+)(.*)$"
        },
        blockStartRule,
        //ifStartRule,
        shortStartRule
      ];
      for (var key in this.$rules)
        this.$rules[key].unshift.apply(this.$rules[key], razorStartRules);
      this.embedRules(RazorLangHighlightRules, "razor-block-", [blockEndRule], ["start"]);
      this.embedRules(RazorLangHighlightRules, "razor-short-", [shortEndRule], ["start"]);
      this.normalizeRules();
    };
    oop.inherits(RazorHighlightRules, HtmlHighlightRules);
    exports.RazorHighlightRules = RazorHighlightRules;
    exports.RazorLangHighlightRules = RazorLangHighlightRules;
  }
});

// src/mode/razor_completions.js
var require_razor_completions = __commonJS({
  "src/mode/razor_completions.js"(exports) {
    "use strict";
    var TokenIterator = require_token_iterator().TokenIterator;
    var keywords = [
      "abstract",
      "as",
      "base",
      "bool",
      "break",
      "byte",
      "case",
      "catch",
      "char",
      "checked",
      "class",
      "const",
      "continue",
      "decimal",
      "default",
      "delegate",
      "do",
      "double",
      "else",
      "enum",
      "event",
      "explicit",
      "extern",
      "false",
      "finally",
      "fixed",
      "float",
      "for",
      "foreach",
      "goto",
      "if",
      "implicit",
      "in",
      "int",
      "interface",
      "internal",
      "is",
      "lock",
      "long",
      "namespace",
      "new",
      "null",
      "object",
      "operator",
      "out",
      "override",
      "params",
      "private",
      "protected",
      "public",
      "readonly",
      "ref",
      "return",
      "sbyte",
      "sealed",
      "short",
      "sizeof",
      "stackalloc",
      "static",
      "string",
      "struct",
      "switch",
      "this",
      "throw",
      "true",
      "try",
      "typeof",
      "uint",
      "ulong",
      "unchecked",
      "unsafe",
      "ushort",
      "using",
      "var",
      "virtual",
      "void",
      "volatile",
      "while"
    ];
    var shortHands = [
      "Html",
      "Model",
      "Url",
      "Layout"
    ];
    var RazorCompletions = function() {
    };
    (function() {
      this.getCompletions = function(state, session, pos, prefix) {
        if (state.lastIndexOf("razor-short-start") == -1 && state.lastIndexOf("razor-block-start") == -1)
          return [];
        var token = session.getTokenAt(pos.row, pos.column);
        if (!token)
          return [];
        if (state.lastIndexOf("razor-short-start") != -1) {
          return this.getShortStartCompletions(state, session, pos, prefix);
        }
        if (state.lastIndexOf("razor-block-start") != -1) {
          return this.getKeywordCompletions(state, session, pos, prefix);
        }
      };
      this.getShortStartCompletions = function(state, session, pos, prefix) {
        return shortHands.map(function(element) {
          return {
            value: element,
            meta: "keyword",
            score: 1e6
          };
        });
      };
      this.getKeywordCompletions = function(state, session, pos, prefix) {
        return shortHands.concat(keywords).map(function(element) {
          return {
            value: element,
            meta: "keyword",
            score: 1e6
          };
        });
      };
    }).call(RazorCompletions.prototype);
    exports.RazorCompletions = RazorCompletions;
  }
});

// src/mode/razor.js
var require_razor = __commonJS({
  "src/mode/razor.js"(exports) {
    var oop = require_oop();
    var HtmlMode = require_html().Mode;
    var RazorHighlightRules = require_razor_highlight_rules().RazorHighlightRules;
    var RazorCompletions = require_razor_completions().RazorCompletions;
    var HtmlCompletions = require_html_completions().HtmlCompletions;
    var Mode = function() {
      HtmlMode.call(this);
      this.$highlightRules = new RazorHighlightRules();
      this.$completer = new RazorCompletions();
      this.$htmlCompleter = new HtmlCompletions();
    };
    oop.inherits(Mode, HtmlMode);
    (function() {
      this.getCompletions = function(state, session, pos, prefix) {
        var razorToken = this.$completer.getCompletions(state, session, pos, prefix);
        var htmlToken = this.$htmlCompleter.getCompletions(state, session, pos, prefix);
        return razorToken.concat(htmlToken);
      };
      this.createWorker = function(session) {
        return null;
      };
      this.$id = "ace/mode/razor";
      this.snippetFileId = "ace/snippets/razor";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_razor();

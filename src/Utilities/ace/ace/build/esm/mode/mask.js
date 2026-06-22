import {
  require_markdown_highlight_rules
} from "../chunk-BHX2VTF2.js";
import {
  require_css
} from "../chunk-B3BIPF3P.js";
import {
  require_html_highlight_rules
} from "../chunk-2TRMU5AT.js";
import "../chunk-VGQVSYAP.js";
import {
  require_javascript_highlight_rules
} from "../chunk-ELLQ4DAZ.js";
import {
  require_css_highlight_rules
} from "../chunk-KDDWKWK4.js";
import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
import "../chunk-JEWW6F7O.js";
import {
  require_text,
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
import {
  require_lang
} from "../chunk-NNGFYYI3.js";
import "../chunk-3SNEZHBJ.js";
import "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/mask_highlight_rules.js
var require_mask_highlight_rules = __commonJS({
  "src/mode/mask_highlight_rules.js"(exports) {
    "use strict";
    exports.MaskHighlightRules = MaskHighlightRules;
    var oop = require_oop();
    var lang = require_lang();
    var TextRules = require_text_highlight_rules().TextHighlightRules;
    var JSRules = require_javascript_highlight_rules().JavaScriptHighlightRules;
    var CssRules = require_css_highlight_rules().CssHighlightRules;
    var MDRules = require_markdown_highlight_rules().MarkdownHighlightRules;
    var HTMLRules = require_html_highlight_rules().HtmlHighlightRules;
    var token_TAG = "keyword.support.constant.language";
    var token_COMPO = "support.function.markup.bold";
    var token_KEYWORD = "keyword";
    var token_LANG = "constant.language";
    var token_UTIL = "keyword.control.markup.italic";
    var token_ATTR = "support.variable.class";
    var token_PUNKT = "keyword.operator";
    var token_ITALIC = "markup.italic";
    var token_BOLD = "markup.bold";
    var token_LPARE = "paren.lparen";
    var token_RPARE = "paren.rparen";
    var const_FUNCTIONS;
    var const_KEYWORDS;
    var const_CONST;
    var const_TAGS;
    (function() {
      const_FUNCTIONS = lang.arrayToMap(
        "log".split("|")
      );
      const_CONST = lang.arrayToMap(
        ":dualbind|:bind|:import|slot|event|style|html|markdown|md".split("|")
      );
      const_KEYWORDS = lang.arrayToMap(
        "debugger|define|var|if|each|for|of|else|switch|case|with|visible|+if|+each|+for|+switch|+with|+visible|include|import".split("|")
      );
      const_TAGS = lang.arrayToMap(
        "a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdo|big|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|img|input|ins|keygen|kbd|label|legend|li|link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|u|ul|var|video|wbr|xmp".split("|")
      );
    })();
    function MaskHighlightRules() {
      this.$rules = {
        "start": [
          Token("comment", "\\/\\/.*$"),
          Token("comment", "\\/\\*", [
            Token("comment", ".*?\\*\\/", "start"),
            Token("comment", ".+")
          ]),
          Blocks.string("'''"),
          Blocks.string('"""'),
          Blocks.string('"'),
          Blocks.string("'"),
          Blocks.syntax(/(markdown|md)\b/, "md-multiline", "multiline"),
          Blocks.syntax(/html\b/, "html-multiline", "multiline"),
          Blocks.syntax(/(slot|event)\b/, "js-block", "block"),
          Blocks.syntax(/style\b/, "css-block", "block"),
          Blocks.syntax(/var\b/, "js-statement", "attr"),
          Blocks.tag(),
          Token(token_LPARE, "[[({>]"),
          Token(token_RPARE, "[\\])};]", "start"),
          {
            caseInsensitive: true
          }
        ]
      };
      var rules = this;
      addJavaScript("interpolation", /\]/, token_RPARE + "." + token_ITALIC);
      addJavaScript("statement", /\)|}|;/);
      addJavaScript("block", /\}/);
      addCss();
      addMarkdown();
      addHtml();
      function addJavaScript(name, escape, closeType) {
        var prfx = "js-" + name + "-", rootTokens = name === "block" ? ["start"] : ["start", "no_regex"];
        add(
          JSRules,
          prfx,
          escape,
          rootTokens,
          closeType
        );
      }
      function addCss() {
        add(CssRules, "css-block-", /\}/);
      }
      function addMarkdown() {
        add(MDRules, "md-multiline-", /("""|''')/, []);
      }
      function addHtml() {
        add(HTMLRules, "html-multiline-", /("""|''')/);
      }
      function add(Rules, strPrfx, rgxEnd, rootTokens, closeType) {
        var next = "pop";
        var tokens = rootTokens || ["start"];
        if (tokens.length === 0) {
          tokens = null;
        }
        if (/block|multiline/.test(strPrfx)) {
          next = strPrfx + "end";
          rules.$rules[next] = [
            Token("empty", "", "start")
          ];
        }
        rules.embedRules(
          Rules,
          strPrfx,
          [Token(closeType || token_RPARE, rgxEnd, next)],
          tokens,
          tokens == null ? true : false
        );
      }
      this.normalizeRules();
    }
    oop.inherits(MaskHighlightRules, TextRules);
    var Blocks = {
      string: function(str, next) {
        var token = Token(
          "string.start",
          str,
          [
            Token(token_LPARE + "." + token_ITALIC, /~\[/, Blocks.interpolation()),
            Token("string.end", str, "pop"),
            {
              defaultToken: "string"
            }
          ],
          next
        );
        if (str.length === 1) {
          var escaped = Token("string.escape", "\\\\" + str);
          token.push.unshift(escaped);
        }
        return token;
      },
      interpolation: function() {
        return [
          Token(token_UTIL, /\s*\w*\s*:/),
          "js-interpolation-start"
        ];
      },
      tagHead: function(rgx) {
        return Token(token_ATTR, rgx, [
          Token(token_ATTR, /[\w\-_]+/),
          Token(token_LPARE + "." + token_ITALIC, /~\[/, Blocks.interpolation()),
          Blocks.goUp()
        ]);
      },
      tag: function() {
        return {
          token: "tag",
          onMatch: function(value) {
            if (void 0 !== const_KEYWORDS[value])
              return token_KEYWORD;
            if (void 0 !== const_CONST[value])
              return token_LANG;
            if (void 0 !== const_FUNCTIONS[value])
              return "support.function";
            if (void 0 !== const_TAGS[value.toLowerCase()])
              return token_TAG;
            return token_COMPO;
          },
          regex: /([@\w\-_:+]+)|((^|\s)(?=\s*(\.|#)))/,
          push: [
            Blocks.tagHead(/\./),
            Blocks.tagHead(/#/),
            Blocks.expression(),
            Blocks.attribute(),
            Token(token_LPARE, /[;>{]/, "pop")
          ]
        };
      },
      syntax: function(rgx, next, type) {
        return {
          token: token_LANG,
          regex: rgx,
          push: {
            "attr": [
              next + "-start",
              Token(token_PUNKT, /;/, "start")
            ],
            "multiline": [
              Blocks.tagHead(/\./),
              Blocks.tagHead(/#/),
              Blocks.attribute(),
              Blocks.expression(),
              Token(token_LPARE, /[>\{]/),
              Token(token_PUNKT, /;/, "start"),
              Token(token_LPARE, /'''|"""/, [next + "-start"])
            ],
            "block": [
              Blocks.tagHead(/\./),
              Blocks.tagHead(/#/),
              Blocks.attribute(),
              Blocks.expression(),
              Token(token_LPARE, /\{/, [next + "-start"])
            ]
          }[type]
        };
      },
      attribute: function() {
        return Token(function(value) {
          return /^x\-/.test(value) ? token_ATTR + "." + token_BOLD : token_ATTR;
        }, /[\w_-]+/, [
          Token(token_PUNKT, /\s*=\s*/, [
            Blocks.string('"'),
            Blocks.string("'"),
            Blocks.word(),
            Blocks.goUp()
          ]),
          Blocks.goUp()
        ]);
      },
      expression: function() {
        return Token(token_LPARE, /\(/, ["js-statement-start"]);
      },
      word: function() {
        return Token("string", /[\w-_]+/);
      },
      goUp: function() {
        return Token("text", "", "pop");
      },
      goStart: function() {
        return Token("text", "", "start");
      }
    };
    function Token(token, rgx, mix) {
      var push, next, onMatch;
      if (arguments.length === 4) {
        push = mix;
        next = arguments[3];
      } else if (typeof mix === "string") {
        next = mix;
      } else {
        push = mix;
      }
      if (typeof token === "function") {
        onMatch = token;
        token = "empty";
      }
      return {
        token,
        regex: rgx,
        push,
        next,
        onMatch
      };
    }
  }
});

// src/mode/mask.js
var require_mask = __commonJS({
  "src/mode/mask.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var MaskHighlightRules = require_mask_highlight_rules().MaskHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var CssBehaviour = require_css().CssBehaviour;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = MaskHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = new CssBehaviour();
      this.foldingRules = new CStyleFoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.blockComment = { start: "/*", end: "*/" };
      this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        var tokens = this.getTokenizer().getLineTokens(line, state).tokens;
        if (tokens.length && tokens[tokens.length - 1].type == "comment") {
          return indent;
        }
        var match = line.match(/^.*\{\s*$/);
        if (match) {
          indent += tab;
        }
        return indent;
      };
      this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
      };
      this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
      };
      this.$id = "ace/mode/mask";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_mask();

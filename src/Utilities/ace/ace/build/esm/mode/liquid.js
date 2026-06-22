import {
  require_json
} from "../chunk-2NM55EA6.js";
import {
  require_json_highlight_rules
} from "../chunk-PXIHKCWK.js";
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
import "../chunk-5O3J7W3G.js";
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
import "../chunk-NNGFYYI3.js";
import "../chunk-3SNEZHBJ.js";
import "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/liquid_highlight_rules.js
var require_liquid_highlight_rules = __commonJS({
  "src/mode/liquid_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var CssHighlightRules = require_css_highlight_rules().CssHighlightRules;
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    var JsonHighlightRules = require_json_highlight_rules().JsonHighlightRules;
    var JavaScriptHighlightRules = require_javascript_highlight_rules().JavaScriptHighlightRules;
    var LiquidHighlightRules = function() {
      HtmlHighlightRules.call(this);
      function onMatchEmbedded(name) {
        const length = name.length;
        return function(value) {
          const idx = value.indexOf(name);
          const x = [
            {
              type: "meta.tag.punctuation.tag-open",
              value: "{%"
            },
            {
              type: "text",
              value: value.slice(2, idx)
            },
            {
              type: "keyword.tag" + name + ".tag-name",
              value: value.slice(idx, idx + length)
            },
            {
              type: "text",
              value: value.slice(idx + length, value.indexOf("%}"))
            },
            {
              type: "meta.tag.punctuation.tag-close",
              value: "%}"
            }
          ];
          return x;
        };
      }
      for (var rule in this.$rules) {
        this.$rules[rule].unshift(
          {
            token: "comment.block",
            regex: /{%-?\s*comment\s*-?%}/,
            next: [
              {
                token: "comment.block",
                regex: /{%-?\s*endcomment\s*-?%}/,
                next: "pop"
              },
              {
                defaultToken: "comment",
                caseInsensitive: false
              }
            ]
          },
          {
            token: "comment.line",
            regex: /{%-?\s*#/,
            next: [
              {
                token: "comment.line",
                regex: /-?%}/,
                next: "pop"
              },
              {
                defaultToken: "comment",
                caseInsensitive: false
              }
            ]
          },
          {
            token: "style.embedded.start",
            regex: /({%-?\s*\bstyle\b\s*-?%})/,
            next: "style-start",
            onMatch: onMatchEmbedded("style")
          },
          {
            regex: /({%-?\s*\bstylesheet\b\s*-?%})/,
            next: "stylesheet-start",
            onMatch: onMatchEmbedded("stylesheet")
          },
          {
            regex: /({%-?\s*\bschema\b\s*-?%})/,
            next: "schema-start",
            onMatch: onMatchEmbedded("schema")
          },
          {
            regex: /({%-?\s*\bjavascript\b\s*-?%})/,
            next: "javascript-start",
            onMatch: onMatchEmbedded("javascript")
          },
          {
            token: "meta.tag.punctuation.tag-open",
            regex: /({%)/,
            next: [
              {
                token: "keyword.block",
                regex: /-?\s*[a-zA-Z_$][a-zA-Z0-9_$]+\b/,
                next: "liquid-start"
              },
              {
                token: "meta.tag.punctuation.tag-close",
                regex: /(-?)(%})/,
                next: "pop"
              }
            ]
          },
          {
            token: "meta.tag.punctuation.ouput-open",
            regex: /({{)/,
            push: "liquid-start"
          }
        );
      }
      this.embedRules(JsonHighlightRules, "schema-", [
        {
          token: "schema-start",
          next: "pop",
          regex: /({%-?\s*\bendschema\b\s*-?%})/,
          onMatch: onMatchEmbedded("endschema")
        }
      ]);
      this.embedRules(JavaScriptHighlightRules, "javascript-", [
        {
          token: "javascript-start",
          next: "pop",
          regex: /({%-?\s*\bendjavascript\b\s*-?%})/,
          onMatch: onMatchEmbedded("endjavascript")
        }
      ]);
      this.embedRules(CssHighlightRules, "style-", [
        {
          token: "style-start",
          next: "pop",
          regex: /({%-?\s*\bendstyle\b\s*-?%})/,
          onMatch: onMatchEmbedded("endstyle")
        }
      ]);
      this.embedRules(CssHighlightRules, "stylesheet-", [
        {
          token: "stylesheet-start",
          next: "pop",
          regex: /({%-?\s*\bendstylesheet\b\s*-?%})/,
          onMatch: onMatchEmbedded("endstylesheet")
        }
      ]);
      this.addRules({
        "liquid-start": [
          {
            token: "meta.tag.punctuation.ouput-close",
            regex: /}}/,
            next: "pop"
          },
          {
            token: "meta.tag.punctuation.tag-close",
            regex: /%}/,
            next: "pop"
          },
          {
            token: "string",
            regex: /['](?:(?:\\.)|(?:[^'\\]))*?[']/
          },
          {
            token: "string",
            regex: /["](?:(?:\\.)|(?:[^'\\]))*?["]/
          },
          {
            token: "constant.numeric",
            regex: /0[xX][0-9a-fA-F]+\b/
          },
          {
            token: "constant.numeric",
            regex: /[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/
          },
          {
            token: "keyword.operator",
            regex: /\*|\-|\+|=|!=|\?\|\:/
          },
          {
            token: "constant.language.boolean",
            regex: /(?:true|false|nil|empty)\b/
          },
          {
            token: "keyword.operator",
            regex: /\s+(?:and|contains|in|with)\b\s+/
          },
          {
            token: ["keyword.operator", "support.function"],
            regex: /(\|\s*)([a-zA-Z_]+)/
          },
          {
            token: "support.function",
            regex: /\s*([a-zA-Z_]+\b)(?=:)/
          },
          {
            token: "keyword.operator",
            regex: /(:)\s*(?=[a-zA-Z_])/
          },
          {
            token: [
              "support.class",
              "keyword.operator",
              "support.object",
              "keyword.operator",
              "variable.parameter"
            ],
            regex: /(\w+)(\.)(\w+)(\.)?(\w+)?/
          },
          {
            token: "variable.parameter",
            regex: /\.([a-zA-Z_$][a-zA-Z0-9_$]*\b)$/
          },
          {
            token: "support.class",
            regex: /(?:additional_checkout_buttons|content_for_additional_checkout_buttons)\b/
          },
          {
            token: "paren.lparen",
            regex: /[\[\({]/
          },
          {
            token: "paren.rparen",
            regex: /[\])}]/
          },
          {
            token: "text",
            regex: /\s+/
          }
        ]
      });
      this.normalizeRules();
    };
    oop.inherits(LiquidHighlightRules, TextHighlightRules);
    exports.LiquidHighlightRules = LiquidHighlightRules;
  }
});

// src/mode/liquid.js
var require_liquid = __commonJS({
  "src/mode/liquid.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var HtmlMode = require_html().Mode;
    var JavascriptMode = require_javascript().Mode;
    var JsonMode = require_json().Mode;
    var CssMode = require_css().Mode;
    var LiquidHighlightRules = require_liquid_highlight_rules().LiquidHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var FoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      JsonMode.call(this);
      HtmlMode.call(this);
      CssMode.call(this);
      JavascriptMode.call(this);
      this.HighlightRules = LiquidHighlightRules;
      this.foldingRules = new FoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.blockComment = { start: "<!--", end: "-->" };
      this.voidElements = new HtmlMode().voidElements;
      this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;
        var endState = tokenizedLine.state;
        if (tokens.length && tokens[tokens.length - 1].type == "comment") {
          return indent;
        }
        if (state == "start") {
          var match = line.match(/^.*[\{\(\[]\s*$/);
          if (match) {
            indent += tab;
          }
        }
        return indent;
      };
      this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
      };
      this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
      };
      this.$id = "ace/mode/liquid";
      this.snippetFileId = "ace/snippets/liquid";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_liquid();

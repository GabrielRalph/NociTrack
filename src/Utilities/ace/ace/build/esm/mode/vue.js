import {
  require_typescript_highlight_rules
} from "../chunk-V22BFUFQ.js";
import {
  require_stylus_highlight_rules
} from "../chunk-ANCHU5T4.js";
import {
  require_slim_highlight_rules
} from "../chunk-LLSP4UEZ.js";
import {
  require_sass_highlight_rules
} from "../chunk-TH7PHBYB.js";
import {
  require_jade_highlight_rules
} from "../chunk-FYRKKJFG.js";
import {
  require_scss_highlight_rules
} from "../chunk-77N2I42G.js";
import "../chunk-BHX2VTF2.js";
import {
  require_less_highlight_rules
} from "../chunk-3FPUC6FF.js";
import {
  require_coffee_highlight_rules
} from "../chunk-AEEIZ3MR.js";
import {
  require_html,
  require_html2,
  require_html_completions
} from "../chunk-VKLEZYSZ.js";
import "../chunk-O7XPGT62.js";
import {
  require_javascript3 as require_javascript
} from "../chunk-GUNMO7YX.js";
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
import {
  require_javascript_highlight_rules
} from "../chunk-ELLQ4DAZ.js";
import {
  require_css_highlight_rules
} from "../chunk-KDDWKWK4.js";
import "../chunk-5GQPFTLG.js";
import "../chunk-67VAGNRS.js";
import "../chunk-5O3J7W3G.js";
import "../chunk-JEWW6F7O.js";
import "../chunk-QXTEMBPD.js";
import {
  require_tokenizer
} from "../chunk-VVYM7U3C.js";
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

// src/mode/vue_highlight_rules.js
var require_vue_highlight_rules = __commonJS({
  "src/mode/vue_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var { CssHighlightRules } = require_css_highlight_rules();
    var { TypeScriptHighlightRules } = require_typescript_highlight_rules();
    var { CoffeeHighlightRules } = require_coffee_highlight_rules();
    var { HtmlHighlightRules } = require_html_highlight_rules();
    var { JavaScriptHighlightRules } = require_javascript_highlight_rules();
    var { StylusHighlightRules } = require_stylus_highlight_rules();
    var { SassHighlightRules } = require_sass_highlight_rules();
    var { ScssHighlightRules } = require_scss_highlight_rules();
    var { LessHighlightRules } = require_less_highlight_rules();
    var { Tokenizer } = require_tokenizer();
    var { SlimHighlightRules } = require_slim_highlight_rules();
    var { JadeHighlightRules } = require_jade_highlight_rules();
    var JavaScriptMode = require_javascript().Mode;
    var VueHighlightRules = function(options) {
      this.embedLangRules = function(HighlightRules, tag, value, attribute) {
        var condition = attribute ? "(?=[^>]*" + attribute + `\\s*=\\s*['"]` + value + `['"]))` : "(?=\\s|>|$))";
        this.$rules.start.unshift({
          token: ["meta.tag.punctuation.tag-open.xml", "meta.tag." + tag + ".tag-name.xml"],
          regex: "(<)(" + tag + condition,
          next: [
            {
              token: "meta.tag.punctuation.tag-close." + tag + ".xml",
              regex: "/?>",
              next: value + "-start"
            },
            { include: "attributes" }
          ]
        });
        this.$rules[tag + "-end"] = [
          { include: "attributes" },
          {
            token: "meta.tag.punctuation.tag-close.xml",
            regex: "/?>",
            next: "start",
            onMatch: function(value2, currentState, stack) {
              stack.splice(0);
              return this.token;
            }
          }
        ];
        this.embedRules(HighlightRules, value + "-", [
          {
            token: ["meta.tag.punctuation.end-tag-open.xml", "meta.tag." + tag + ".tag-name.xml"],
            regex: "(</)(" + tag + "(?=\\s|>|$))",
            next: tag + "-end"
          },
          {
            token: "string.cdata.xml",
            regex: "<\\!\\[CDATA\\["
          },
          {
            token: "string.cdata.xml",
            regex: "\\]\\]>"
          }
        ]);
      };
      var vueRules = [
        {
          include: "vue-interpolations"
        }
      ];
      var VueRules = new HtmlHighlightRules().getRules();
      VueRules.start = vueRules.concat(VueRules.start);
      VueRules["vue-interpolations"] = [
        {
          token: "punctuation",
          regex: /\{\{\{?/,
          next: "js-interpolation-start"
        }
      ];
      var self = this;
      VueRules.tag_stuff.unshift({
        //vue-directives 
        token: "string",
        regex: /(?:\b(v-)|(:|@))(\[?[a-zA-Z\-.]+\]?)(?:(\:\[?[a-zA-Z\-]+\]?))?((?:\.[a-zA-Z\-]+)*)(\s*)(=)(\s*)(["'])/,
        onMatch: function(value, currentState, stack) {
          var quote = value[value.length - 1];
          stack.unshift(quote, currentState);
          var values = new RegExp(this.regex).exec(value);
          if (!values) return "text";
          var tokens = [];
          var types = [
            "entity.other.attribute-name.xml",
            "punctuation.separator.key-value.xml",
            "entity.other.attribute-name.xml",
            "entity.other.attribute-name.xml",
            "entity.other.attribute-name.xml",
            "text",
            "punctuation.separator.key-value.xml",
            "text",
            "string"
          ];
          for (var i = 0, l = types.length; i < l; i++) {
            if (values[i + 1]) tokens[tokens.length] = {
              type: types[i],
              value: values[i + 1]
            };
          }
          return tokens;
        },
        next: [
          {
            token: "string",
            regex: /$/,
            next: "tag_stuff"
          },
          {
            token: "string",
            regex: /.*/,
            onMatch: function(value, currentState, stack, line) {
              var quote = stack[0];
              var parts = value.split(quote);
              let text = parts[0];
              this.next = "";
              if (parts.length > 1) {
                stack.shift();
                var nextState = stack.shift();
                var currentData = new Tokenizer(self.$rules).getLineTokens(
                  parts.slice(1).join(quote),
                  nextState
                );
                currentData.tokens.unshift({
                  type: "string",
                  value: quote
                });
                this.next = Array.isArray(currentData.state) ? currentData.state[currentData.state.length - 1] : currentData.state;
              }
              var data = new JavaScriptMode().getTokenizer().getLineTokens(text, "start");
              var tokens = data.tokens;
              if (currentData) {
                tokens.push(...currentData.tokens);
              }
              return tokens;
            }
          }
        ]
      }, {
        token: "string",
        regex: '"',
        next: [
          {
            token: "string",
            regex: '"|$',
            next: "tag_stuff"
          },
          {
            include: "vue-interpolations"
          },
          {
            defaultToken: "string"
          }
        ]
      }, {
        token: "string",
        regex: "'",
        next: [
          {
            token: "string",
            regex: "'|$",
            next: "tag_stuff"
          },
          {
            include: "vue-interpolations"
          },
          {
            defaultToken: "string"
          }
        ]
      });
      this.$rules = VueRules;
      this.embedRules(JavaScriptHighlightRules, "js-interpolation-", [
        {
          token: "punctuation",
          regex: /\}\}\}?/,
          next: "start"
        }
      ]);
      this.embedLangRules(CssHighlightRules, "style", "css");
      this.embedLangRules(StylusHighlightRules, "style", "stylus", "lang");
      this.embedLangRules(SassHighlightRules, "style", "sass", "lang");
      this.embedLangRules(ScssHighlightRules, "style", "scss", "lang");
      this.embedLangRules(LessHighlightRules, "style", "less", "lang");
      this.embedLangRules(TypeScriptHighlightRules, "script", "ts", "lang");
      this.embedLangRules(CoffeeHighlightRules, "script", "coffee", "lang");
      this.embedLangRules(SlimHighlightRules, "template", "slm", "lang");
      this.embedLangRules(JadeHighlightRules, "template", "jade", "lang");
      this.embedLangRules(StylusHighlightRules, "template", "stylus", "lang");
      this.normalizeRules();
    };
    oop.inherits(VueHighlightRules, HtmlHighlightRules);
    exports.VueHighlightRules = VueHighlightRules;
  }
});

// src/mode/vue.js
var require_vue = __commonJS({
  "src/mode/vue.js"(exports) {
    var oop = require_oop();
    var { FoldMode: HtmlFoldMode } = require_html();
    var lang = require_lang();
    var { XmlBehaviour } = require_xml();
    var { HtmlCompletions } = require_html_completions();
    var HTMLMode = require_html2().Mode;
    var VueHighlightRules = require_vue_highlight_rules().VueHighlightRules;
    var voidElements = [
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "keygen",
      "link",
      "meta",
      "menuitem",
      "param",
      "source",
      "track",
      "wbr"
    ];
    var optionalEndTags = ["li", "dt", "dd", "p", "rt", "rp", "optgroup", "option", "colgroup", "td", "th"];
    var Mode = function() {
      this.HighlightRules = VueHighlightRules;
      this.foldingRules = new HtmlFoldMode(this.voidElements, lang.arrayToMap(optionalEndTags));
      this.$behaviour = new XmlBehaviour();
      this.$completer = new HtmlCompletions();
    };
    oop.inherits(Mode, HTMLMode);
    (function() {
      this.blockComment = {
        start: "<!--",
        end: "-->"
      };
      this.voidElements = lang.arrayToMap(voidElements);
      this.getCompletions = function(state, session, pos, prefix) {
        return this.$completer.getCompletions(state, session, pos, prefix);
      };
      this.$id = "ace/mode/vue";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_vue();

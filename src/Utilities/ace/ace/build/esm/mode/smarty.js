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

// src/mode/smarty_highlight_rules.js
var require_smarty_highlight_rules = __commonJS({
  "src/mode/smarty_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    var SmartyHighlightRules = function() {
      HtmlHighlightRules.call(this);
      var smartyRules = {
        start: [
          { include: "#comments" },
          { include: "#blocks" }
        ],
        "#blocks": [{
          token: "punctuation.section.embedded.begin.smarty",
          regex: "\\{%?",
          push: [
            {
              token: "punctuation.section.embedded.end.smarty",
              regex: "%?\\}",
              next: "pop"
            },
            { include: "#strings" },
            { include: "#variables" },
            { include: "#lang" },
            { defaultToken: "source.smarty" }
          ]
        }],
        "#comments": [{
          token: [
            "punctuation.definition.comment.smarty",
            "comment.block.smarty"
          ],
          regex: "(\\{%?)(\\*)",
          push: [
            { token: "comment.block.smarty", regex: "\\*%?\\}", next: "pop" },
            { defaultToken: "comment.block.smarty" }
          ]
        }],
        "#lang": [
          {
            token: "keyword.operator.smarty",
            regex: "(?:!=|!|<=|>=|<|>|===|==|%|&&|\\|\\|)|\\b(?:and|or|eq|neq|ne|gte|gt|ge|lte|lt|le|not|mod)\\b"
          },
          {
            token: "constant.language.smarty",
            regex: "\\b(?:TRUE|FALSE|true|false)\\b"
          },
          {
            token: "keyword.control.smarty",
            regex: "\\b(?:if|else|elseif|foreach|foreachelse|section|switch|case|break|default)\\b"
          },
          { token: "variable.parameter.smarty", regex: "\\b[a-zA-Z]+=" },
          {
            token: "support.function.built-in.smarty",
            regex: "\\b(?:capture|config_load|counter|cycle|debug|eval|fetch|include_php|include|insert|literal|math|strip|rdelim|ldelim|assign|constant|block|html_[a-z_]*)\\b"
          },
          {
            token: "support.function.variable-modifier.smarty",
            regex: "\\|(?:capitalize|cat|count_characters|count_paragraphs|count_sentences|count_words|date_format|default|escape|indent|lower|nl2br|regex_replace|replace|spacify|string_format|strip_tags|strip|truncate|upper|wordwrap)"
          }
        ],
        "#strings": [
          {
            token: "punctuation.definition.string.begin.smarty",
            regex: "'",
            push: [
              {
                token: "punctuation.definition.string.end.smarty",
                regex: "'",
                next: "pop"
              },
              { token: "constant.character.escape.smarty", regex: "\\\\." },
              { defaultToken: "string.quoted.single.smarty" }
            ]
          },
          {
            token: "punctuation.definition.string.begin.smarty",
            regex: '"',
            push: [
              {
                token: "punctuation.definition.string.end.smarty",
                regex: '"',
                next: "pop"
              },
              { token: "constant.character.escape.smarty", regex: "\\\\." },
              { defaultToken: "string.quoted.double.smarty" }
            ]
          }
        ],
        "#variables": [
          {
            token: [
              "punctuation.definition.variable.smarty",
              "variable.other.global.smarty"
            ],
            regex: "\\b(\\$)(Smarty\\.)"
          },
          {
            token: [
              "punctuation.definition.variable.smarty",
              "variable.other.smarty"
            ],
            regex: "(\\$)([a-zA-Z_][a-zA-Z0-9_]*)\\b"
          },
          {
            token: ["keyword.operator.smarty", "variable.other.property.smarty"],
            regex: "(->)([a-zA-Z_][a-zA-Z0-9_]*)\\b"
          },
          {
            token: [
              "keyword.operator.smarty",
              "meta.function-call.object.smarty",
              "punctuation.definition.variable.smarty",
              "variable.other.smarty",
              "punctuation.definition.variable.smarty"
            ],
            regex: "(->)([a-zA-Z_][a-zA-Z0-9_]*)(\\()(.*?)(\\))"
          }
        ]
      };
      var smartyStart = smartyRules.start;
      for (var rule in this.$rules) {
        this.$rules[rule].unshift.apply(this.$rules[rule], smartyStart);
      }
      Object.keys(smartyRules).forEach(function(x) {
        if (!this.$rules[x])
          this.$rules[x] = smartyRules[x];
      }, this);
      this.normalizeRules();
    };
    SmartyHighlightRules.metaData = {
      fileTypes: ["tpl"],
      foldingStartMarker: "\\{%?",
      foldingStopMarker: "%?\\}",
      name: "Smarty",
      scopeName: "text.html.smarty"
    };
    oop.inherits(SmartyHighlightRules, HtmlHighlightRules);
    exports.SmartyHighlightRules = SmartyHighlightRules;
  }
});

// src/mode/smarty.js
var require_smarty = __commonJS({
  "src/mode/smarty.js"(exports) {
    var oop = require_oop();
    var HtmlMode = require_html().Mode;
    var SmartyHighlightRules = require_smarty_highlight_rules().SmartyHighlightRules;
    var Mode = function() {
      HtmlMode.call(this);
      this.HighlightRules = SmartyHighlightRules;
    };
    oop.inherits(Mode, HtmlMode);
    (function() {
      this.$id = "ace/mode/smarty";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_smarty();

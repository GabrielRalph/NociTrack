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
import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
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

// src/mode/latte_highlight_rules.js
var require_latte_highlight_rules = __commonJS({
  "src/mode/latte_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var LatteHighlightRules = function() {
      HtmlHighlightRules.call(this);
      for (var rule in this.$rules) {
        this.$rules[rule].unshift(
          {
            token: "comment.start.latte",
            regex: "\\{\\*",
            push: [{
              token: "comment.end.latte",
              regex: ".*\\*\\}",
              next: "pop"
            }, {
              defaultToken: "comment"
            }]
          },
          {
            token: "meta.tag.punctuation.tag-open.latte",
            regex: `\\{(?![\\s'"{}]|$)/?`,
            push: [{
              token: "meta.tag.latte",
              regex: "(?:_|=|[a-z]\\w*(?:[.:-]\\w+)*)?",
              next: [{
                token: "meta.tag.punctuation.tag-close.latte",
                regex: "\\}",
                next: "pop"
              }, {
                include: "latte-content"
              }]
            }]
          }
        );
      }
      this.$rules["tag_stuff"].unshift({
        token: "meta.attribute.latte",
        regex: "n:[\\w-]+",
        next: [{
          include: "tag_whitespace"
        }, {
          token: "keyword.operator.attribute-equals.xml",
          regex: "=",
          next: [{
            token: "string.attribute-value.xml",
            regex: "'",
            next: [
              { token: "string.attribute-value.xml", regex: "'", next: "tag_stuff" },
              { include: "latte-content" }
            ]
          }, {
            token: "string.attribute-value.xml",
            regex: '"',
            next: [
              { token: "string.attribute-value.xml", regex: '"', next: "tag_stuff" },
              { include: "latte-content" }
            ]
          }, {
            token: "text.tag-whitespace.xml",
            regex: "\\s",
            next: "tag_stuff"
          }, {
            token: "meta.tag.punctuation.tag-close.xml",
            regex: "/?>",
            next: "tag_stuff"
          }, {
            include: "latte-content"
          }]
        }, {
          token: "empty",
          regex: "",
          next: "tag_stuff"
        }]
      });
      this.$rules["latte-content"] = [
        {
          token: "comment.start.latte",
          // multi line comment
          regex: "\\/\\*",
          push: [
            {
              token: "comment.end.latte",
              regex: "\\*\\/",
              next: "pop"
            },
            {
              defaultToken: "comment"
            }
          ]
        },
        {
          token: "string.start",
          // " string start
          regex: '"',
          push: [
            {
              token: "constant.language.escape",
              regex: '\\\\(?:[nrtvef\\\\"$]|[0-7]{1,3}|x[0-9A-Fa-f]{1,2})'
            },
            {
              token: "variable",
              regex: /\$[\w]+(?:\[[\w\]+]|[=\-]>\w+)?/
            },
            {
              token: "variable",
              regex: /\$\{[^"\}]+\}?/
              // this is wrong but ok for now
            },
            { token: "string.end", regex: '"', next: "pop" },
            { defaultToken: "string" }
          ]
        },
        {
          token: "string.start",
          // ' string start
          regex: "'",
          push: [
            { token: "constant.language.escape", regex: /\\['\\]/ },
            { token: "string.end", regex: "'", next: "pop" },
            { defaultToken: "string" }
          ]
        },
        {
          token: "keyword.control",
          regex: "\\b(?:INF|NAN|and|or|xor|AND|OR|XOR|clone|new|instanceof|return|continue|break|as)\\b"
        },
        {
          token: "constant.language",
          regex: "\\b(?:true|false|null|TRUE|FALSE|NULL)\\b"
        },
        {
          token: "variable",
          regex: /\$\w+/
        },
        {
          token: "constant.numeric",
          regex: "[+-]?[0-9]+(?:\\.[0-9]+)?(?:e[0-9]+)?"
        },
        {
          token: ["support.class", "keyword.operator"],
          regex: "\\b(\\w+)(::)"
        },
        {
          token: "constant.language",
          // constants
          regex: "\\b(?:[A-Z0-9_]+)\\b"
        },
        {
          token: "string.unquoted",
          regex: "\\w+(?:-+\\w+)*"
        },
        {
          token: "paren.lparen",
          regex: "[[({]"
        },
        {
          token: "paren.rparen",
          regex: "[\\])}]"
        },
        {
          token: "keyword.operator",
          regex: `::|=>|->|\\?->|\\?\\?->|\\+\\+|--|<<|>>|<=>|<=|>=|===|!==|==|!=|<>|&&|\\|\\||\\?\\?|\\?>|\\*\\*|\\.\\.\\.|[^'"]`
          // =>, any char except quotes
        }
      ];
      this.normalizeRules();
    };
    oop.inherits(LatteHighlightRules, TextHighlightRules);
    exports.LatteHighlightRules = LatteHighlightRules;
  }
});

// src/mode/latte.js
var require_latte = __commonJS({
  "src/mode/latte.js"(exports) {
    var oop = require_oop();
    var HtmlMode = require_html().Mode;
    var LatteHighlightRules = require_latte_highlight_rules().LatteHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var Mode = function() {
      HtmlMode.call(this);
      this.HighlightRules = LatteHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
    };
    oop.inherits(Mode, HtmlMode);
    (function() {
      this.blockComment = { start: "{*", end: "*}" };
      this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        if (state == "start") {
          var match = line.match(/^.*\{(?:if|else|elseif|ifset|elseifset|ifchanged|switch|case|foreach|iterateWhile|for|while|first|last|sep|try|capture|spaceless|snippet|block|define|embed|snippetArea)\b[^{]*$/);
          if (match) {
            indent += tab;
          }
        }
        return indent;
      };
      this.checkOutdent = function(state, line, input) {
        return /^\s+\{\/$/.test(line + input);
      };
      this.autoOutdent = function(state, doc, row) {
      };
      this.$id = "ace/mode/latte";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_latte();

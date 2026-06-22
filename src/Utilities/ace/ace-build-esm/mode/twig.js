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
import {
  require_lang
} from "../chunk-NNGFYYI3.js";
import "../chunk-3SNEZHBJ.js";
import "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/twig_highlight_rules.js
var require_twig_highlight_rules = __commonJS({
  "src/mode/twig_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var lang = require_lang();
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var TwigHighlightRules = function() {
      HtmlHighlightRules.call(this);
      var tags = "autoescape|block|do|embed|extends|filter|flush|for|from|if|import|include|macro|sandbox|set|spaceless|use|verbatim";
      tags = tags + "|end" + tags.replace(/\|/g, "|end");
      var filters = "abs|batch|capitalize|convert_encoding|date|date_modify|default|e|escape|first|format|join|json_encode|keys|last|length|lower|merge|nl2br|number_format|raw|replace|reverse|slice|sort|split|striptags|title|trim|upper|url_encode";
      var functions = "attribute|constant|cycle|date|dump|parent|random|range|template_from_string";
      var tests = "constant|divisibleby|sameas|defined|empty|even|iterable|odd";
      var constants = "null|none|true|false";
      var operators = "b-and|b-xor|b-or|in|is|and|or|not";
      var keywordMapper = this.createKeywordMapper({
        "keyword.control.twig": tags,
        "support.function.twig": [filters, functions, tests].join("|"),
        "keyword.operator.twig": operators,
        "constant.language.twig": constants
      }, "identifier");
      for (var rule in this.$rules) {
        this.$rules[rule].unshift({
          token: "variable.other.readwrite.local.twig",
          regex: "\\{\\{-?",
          push: "twig-start"
        }, {
          token: "meta.tag.twig",
          regex: "\\{%-?",
          push: "twig-start"
        }, {
          token: "comment.block.twig",
          regex: "\\{#-?",
          push: "twig-comment"
        });
      }
      this.$rules["twig-comment"] = [{
        token: "comment.block.twig",
        regex: ".*-?#\\}",
        next: "pop"
      }];
      this.$rules["twig-start"] = [{
        token: "variable.other.readwrite.local.twig",
        regex: "-?\\}\\}",
        next: "pop"
      }, {
        token: "meta.tag.twig",
        regex: "-?%\\}",
        next: "pop"
      }, {
        token: "string",
        regex: "'",
        next: "twig-qstring"
      }, {
        token: "string",
        regex: '"',
        next: "twig-qqstring"
      }, {
        token: "constant.numeric",
        // hex
        regex: "0[xX][0-9a-fA-F]+\\b"
      }, {
        token: "constant.numeric",
        // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: "constant.language.boolean",
        regex: "(?:true|false)\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator.assignment",
        regex: "=|~"
      }, {
        token: "keyword.operator.comparison",
        regex: "==|!=|<|>|>=|<=|==="
      }, {
        token: "keyword.operator.arithmetic",
        regex: "\\+|-|/|%|//|\\*|\\*\\*"
      }, {
        token: "keyword.operator.other",
        regex: "\\.\\.|\\|"
      }, {
        token: "punctuation.operator",
        regex: /\?|:|,|;|\./
      }, {
        token: "paren.lparen",
        regex: /[\[\({]/
      }, {
        token: "paren.rparen",
        regex: /[\])}]/
      }, {
        token: "text",
        regex: "\\s+"
      }];
      this.$rules["twig-qqstring"] = [
        {
          token: "constant.language.escape",
          regex: /\\[\\"$#ntr]|#{[^"}]*}/
        },
        {
          token: "string",
          regex: '"',
          next: "twig-start"
        },
        {
          defaultToken: "string"
        }
      ];
      this.$rules["twig-qstring"] = [
        {
          token: "constant.language.escape",
          regex: /\\[\\'ntr]}/
        },
        {
          token: "string",
          regex: "'",
          next: "twig-start"
        },
        {
          defaultToken: "string"
        }
      ];
      this.normalizeRules();
    };
    oop.inherits(TwigHighlightRules, TextHighlightRules);
    exports.TwigHighlightRules = TwigHighlightRules;
  }
});

// src/mode/twig.js
var require_twig = __commonJS({
  "src/mode/twig.js"(exports) {
    var oop = require_oop();
    var HtmlMode = require_html().Mode;
    var TwigHighlightRules = require_twig_highlight_rules().TwigHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var Mode = function() {
      HtmlMode.call(this);
      this.HighlightRules = TwigHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
    };
    oop.inherits(Mode, HtmlMode);
    (function() {
      this.blockComment = { start: "{#", end: "#}" };
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
      this.$id = "ace/mode/twig";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_twig();

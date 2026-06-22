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
import "../chunk-NNGFYYI3.js";
import "../chunk-3SNEZHBJ.js";
import {
  require_range
} from "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/tcl_highlight_rules.js
var require_tcl_highlight_rules = __commonJS({
  "src/mode/tcl_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var TclHighlightRules = function() {
      this.$rules = {
        "start": [
          {
            token: "comment",
            regex: "#.*\\\\$",
            next: "commentfollow"
          },
          {
            token: "comment",
            regex: "#.*$"
          },
          {
            token: "support.function",
            regex: "[\\\\]$",
            next: "splitlineStart"
          },
          {
            token: "text",
            regex: /\\(?:["{}\[\]$\\])/
          },
          {
            token: "text",
            // last value before command
            regex: "^|[^{][;][^}]|[/\r/]",
            next: "commandItem"
          },
          {
            token: "string",
            // single line
            regex: '[ ]*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
          },
          {
            token: "string",
            // multi line """ string start
            regex: '[ ]*["]',
            next: "qqstring"
          },
          {
            token: "variable.instance",
            regex: "[$]",
            next: "variable"
          },
          {
            token: "support.function",
            regex: "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|{\\*}|;|::"
          },
          {
            token: "identifier",
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
          },
          {
            token: "paren.lparen",
            regex: "[[{]",
            next: "commandItem"
          },
          {
            token: "paren.lparen",
            regex: "[(]"
          },
          {
            token: "paren.rparen",
            regex: "[\\])}]"
          },
          {
            token: "text",
            regex: "\\s+"
          }
        ],
        "commandItem": [
          {
            token: "comment",
            regex: "#.*\\\\$",
            next: "commentfollow"
          },
          {
            token: "comment",
            regex: "#.*$",
            next: "start"
          },
          {
            token: "string",
            // single line
            regex: '[ ]*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
          },
          {
            token: "variable.instance",
            regex: "[$]",
            next: "variable"
          },
          {
            token: "support.function",
            regex: "(?:[:][:])[a-zA-Z0-9_/]+(?:[:][:])",
            next: "commandItem"
          },
          {
            token: "support.function",
            regex: "[a-zA-Z0-9_/]+(?:[:][:])",
            next: "commandItem"
          },
          {
            token: "support.function",
            regex: "(?:[:][:])",
            next: "commandItem"
          },
          {
            token: "paren.rparen",
            regex: "[\\])}]"
          },
          {
            token: "paren.lparen",
            regex: "[[({]"
          },
          {
            token: "support.function",
            regex: "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|{\\*}|;|::"
          },
          {
            token: "keyword",
            regex: "[a-zA-Z0-9_/]+",
            next: "start"
          }
        ],
        "commentfollow": [
          {
            token: "comment",
            regex: ".*\\\\$",
            next: "commentfollow"
          },
          {
            token: "comment",
            regex: ".+",
            next: "start"
          }
        ],
        "splitlineStart": [
          {
            token: "text",
            regex: "^.",
            next: "start"
          }
        ],
        "variable": [
          {
            token: "variable.instance",
            // variable tcl
            regex: "[a-zA-Z_\\d]+(?:[(][a-zA-Z_\\d]+[)])?",
            next: "start"
          },
          {
            token: "variable.instance",
            // variable tcl with braces
            regex: "{?[a-zA-Z_\\d]+}?",
            next: "start"
          }
        ],
        "qqstring": [{
          token: "string",
          // multi line """ string end
          regex: '(?:[^\\\\]|\\\\.)*?["]',
          next: "start"
        }, {
          token: "string",
          regex: ".+"
        }]
      };
    };
    oop.inherits(TclHighlightRules, TextHighlightRules);
    exports.TclHighlightRules = TclHighlightRules;
  }
});

// src/mode/tcl.js
var require_tcl = __commonJS({
  "src/mode/tcl.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var TclHighlightRules = require_tcl_highlight_rules().TclHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var Range = require_range().Range;
    var Mode = function() {
      this.HighlightRules = TclHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.foldingRules = new CStyleFoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "#";
      this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;
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
      this.$id = "ace/mode/tcl";
      this.snippetFileId = "ace/snippets/tcl";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_tcl();

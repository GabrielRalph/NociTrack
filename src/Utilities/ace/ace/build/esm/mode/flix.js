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

// src/mode/flix_highlight_rules.js
var require_flix_highlight_rules = __commonJS({
  "src/mode/flix_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var FlixHighlightRules = function() {
      var keywords = "use|checked_cast|checked_ecast|unchecked_cast|as|discard|from|into|inject|project|solve|query|where|select|force|import|region|handler|instanceof|new|pquery|psolve|run|super";
      var controlKeywords = "choose|forA|forM|foreach|yield|if|else|case|match|ematch|try|catch|throw|spawn|par";
      var operators = "not|and|or|fix";
      var declarations = "eff|def|redef|law|enum|case|type|alias|trait|instance|mod|struct|let";
      var modifiers = "with|lazy|lawful|pub|override|sealed|static|mut|unsafe";
      var primitives = "Unit|Bool|Char|Float32|Float64|Int8|Int16|Int32|Int64|BigInt|String";
      var keywordMapper = this.createKeywordMapper({
        "keyword": keywords,
        "keyword.control": controlKeywords,
        "keyword.operator": operators,
        "storage.type": declarations,
        "storage.modifier": modifiers,
        "support.type": primitives
      }, "identifier");
      this.$rules = {
        "start": [
          {
            token: "comment.line",
            regex: "\\/\\/.*$"
          },
          {
            token: "comment.block",
            regex: "\\/\\*",
            next: "comment"
          },
          {
            token: "string",
            regex: '"',
            next: "string"
          },
          {
            token: "string.regexp",
            regex: 'regex"',
            next: "regex"
          },
          {
            token: "constant.character",
            regex: "'",
            next: "char"
          },
          {
            token: "constant.numeric",
            // hex
            regex: "0x[a-fA-F0-9](_*[a-fA-F0-9])*(i8|i16|i32|i64|ii)?\\b"
          },
          {
            token: "constant.numeric",
            // float
            regex: "[0-9](_*[0-9])*\\.[0-9](_*[0-9])*(f32|f64)?\\b"
          },
          {
            token: "constant.numeric",
            // integer
            regex: "[0-9](_*[0-9])*(i8|i16|i32|i64|ii)?\\b"
          },
          {
            token: "constant.language.boolean",
            regex: "(true|false)\\b"
          },
          {
            token: "constant.language",
            regex: "null\\b"
          },
          {
            token: "keyword.operator",
            regex: "\\->|~>|<\\-|=>"
          },
          {
            token: "storage.modifier",
            regex: "@(Deprecated|Experimental|Internal|ParallelWhenPure|Parallel|LazyWhenPure|Lazy|Skip|Test)\\b"
          },
          {
            token: "keyword",
            // hole
            regex: "(\\?\\?\\?|\\?[a-zA-Z0-9]+)"
          },
          {
            token: keywordMapper,
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
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
            token: "text",
            regex: "\\s+"
          }
        ],
        "comment": [
          {
            token: "comment.block",
            regex: "\\*\\/",
            next: "start"
          },
          {
            defaultToken: "comment.block"
          }
        ],
        "string": [
          {
            token: "constant.character.escape",
            // unicode
            regex: "\\\\(u[0-9a-fA-F]{4})"
          },
          {
            token: "constant.character.escape",
            regex: "\\\\."
          },
          {
            token: "string",
            regex: '"',
            next: "start"
          },
          {
            token: "string",
            regex: '[^"\\\\]+'
          }
        ],
        "regex": [
          {
            token: "constant.character.escape",
            // unicode
            regex: "\\\\(u[0-9a-fA-F]{4})"
          },
          {
            token: "constant.character.escape",
            regex: "\\\\."
          },
          {
            token: "string.regexp",
            regex: '"',
            next: "start"
          },
          {
            token: "string.regexp",
            regex: '[^"\\\\]+'
          }
        ],
        "char": [
          {
            token: "constant.character.escape",
            // unicode
            regex: "\\\\(u[0-9a-fA-F]{4})"
          },
          {
            token: "constant.character.escape",
            regex: "\\\\."
          },
          {
            token: "constant.character",
            regex: "'",
            next: "start"
          },
          {
            token: "constant.character",
            regex: "[^'\\\\]+"
          }
        ]
      };
    };
    oop.inherits(FlixHighlightRules, TextHighlightRules);
    exports.FlixHighlightRules = FlixHighlightRules;
  }
});

// src/mode/flix.js
var require_flix = __commonJS({
  "src/mode/flix.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var FlixHighlightRules = require_flix_highlight_rules().FlixHighlightRules;
    var Mode = function() {
      this.HighlightRules = FlixHighlightRules;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.$id = "ace/mode/flix";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_flix();

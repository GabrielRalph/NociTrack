import {
  require_c_cpp
} from "../chunk-7XOPRG3C.js";
import "../chunk-5U6N3BKW.js";
import "../chunk-5GQPFTLG.js";
import "../chunk-XTXP6FMQ.js";
import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
import "../chunk-JEWW6F7O.js";
import {
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

// src/mode/nix_highlight_rules.js
var require_nix_highlight_rules = __commonJS({
  "src/mode/nix_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var NixHighlightRules = function() {
      var constantLanguage = "true|false";
      var keywordControl = "with|import|if|else|then|inherit";
      var keywordDeclaration = "let|in|rec";
      var keywordMapper = this.createKeywordMapper({
        "constant.language.nix": constantLanguage,
        "keyword.control.nix": keywordControl,
        "keyword.declaration.nix": keywordDeclaration
      }, "identifier");
      this.$rules = {
        "start": [{
          token: "comment",
          regex: /#.*$/
        }, {
          token: "comment",
          regex: /\/\*/,
          next: "comment"
        }, {
          token: "constant",
          regex: "<[^>]+>"
        }, {
          regex: "(==|!=|<=?|>=?)",
          token: ["keyword.operator.comparison.nix"]
        }, {
          regex: "((?:[+*/%-]|\\~)=)",
          token: ["keyword.operator.assignment.arithmetic.nix"]
        }, {
          regex: "=",
          token: "keyword.operator.assignment.nix"
        }, {
          token: "string",
          regex: "''",
          next: "qqdoc"
        }, {
          token: "string",
          regex: "'",
          next: "qstring"
        }, {
          token: "string",
          regex: '"',
          push: "qqstring"
        }, {
          token: "constant.numeric",
          // hex
          regex: "0[xX][0-9a-fA-F]+\\b"
        }, {
          token: "constant.numeric",
          // float
          regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
        }, {
          token: keywordMapper,
          regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        }, {
          regex: "}",
          token: function(val, start, stack) {
            return stack[1] && stack[1].charAt(0) == "q" ? "constant.language.escape" : "text";
          },
          next: "pop"
        }],
        "comment": [{
          token: "comment",
          // closing comment
          regex: "\\*\\/",
          next: "start"
        }, {
          defaultToken: "comment"
        }],
        "qqdoc": [
          {
            token: "constant.language.escape",
            regex: /\$\{/,
            push: "start"
          },
          {
            token: "string",
            regex: "''",
            next: "pop"
          },
          {
            defaultToken: "string"
          }
        ],
        "qqstring": [
          {
            token: "constant.language.escape",
            regex: /\$\{/,
            push: "start"
          },
          {
            token: "string",
            regex: '"',
            next: "pop"
          },
          {
            defaultToken: "string"
          }
        ],
        "qstring": [
          {
            token: "constant.language.escape",
            regex: /\$\{/,
            push: "start"
          },
          {
            token: "string",
            regex: "'",
            next: "pop"
          },
          {
            defaultToken: "string"
          }
        ]
      };
      this.normalizeRules();
    };
    oop.inherits(NixHighlightRules, TextHighlightRules);
    exports.NixHighlightRules = NixHighlightRules;
  }
});

// src/mode/nix.js
var require_nix = __commonJS({
  "src/mode/nix.js"(exports) {
    var oop = require_oop();
    var CMode = require_c_cpp().Mode;
    var NixHighlightRules = require_nix_highlight_rules().NixHighlightRules;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      CMode.call(this);
      this.HighlightRules = NixHighlightRules;
      this.foldingRules = new CStyleFoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, CMode);
    (function() {
      this.lineCommentStart = "#";
      this.blockComment = { start: "/*", end: "*/" };
      this.$id = "ace/mode/nix";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_nix();

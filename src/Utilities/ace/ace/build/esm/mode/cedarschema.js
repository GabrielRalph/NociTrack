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
import "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/cedarschema_highlight_rules.js
var require_cedarschema_highlight_rules = __commonJS({
  "src/mode/cedarschema_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var CedarSchemaHighlightRules = function() {
      this.$rules = {
        "start": [
          {
            token: "comment.line.double-slash",
            regex: /\/\/.*$/
          },
          {
            token: ["keyword", "text", "entity.name.namespace"],
            regex: /(namespace)(\s+)([_a-zA-Z][_a-zA-Z0-9]*(?:::[_a-zA-Z][_a-zA-Z0-9]*)*)/
          },
          {
            token: "keyword",
            regex: /^\s*(?:type|entity|action)(?=\s+)/
          },
          {
            token: "keyword",
            regex: /\b(appliesTo)\b/
          },
          {
            token: ["keyword", "text", "paren.lparen"],
            regex: /\b(enum|in)(\s*)(\[)/
          },
          {
            token: ["paren.rparen", "text", "keyword"],
            regex: /(\})(\s*)(tags)\b/
          },
          {
            token: "variable.other.property",
            regex: /\b[_a-zA-Z][_a-zA-Z0-9]*(?=[?]?:(?!:))/
          },
          {
            token: "string.quoted.double",
            regex: '"',
            next: "schema-string"
          },
          {
            token: "entity.name.type",
            regex: /[_a-zA-Z][_a-zA-Z0-9]*(?:::[_a-zA-Z][_a-zA-Z0-9]*)+/
          },
          {
            token: "punctuation.operator",
            regex: /::/
          },
          {
            token: "paren.lparen",
            regex: /[\[({]/
          },
          {
            token: "paren.rparen",
            regex: /[\])}]/
          },
          {
            token: "punctuation.operator",
            regex: /[,;?:]/
          },
          {
            token: "identifier",
            regex: /[a-zA-Z_][a-zA-Z0-9_]*\b/
          },
          {
            token: "text",
            regex: /\s+/
          }
        ],
        "schema-string": [
          {
            token: "constant.character.escape",
            regex: /\\./
          },
          {
            token: "string.quoted.double",
            regex: '"',
            next: "start"
          },
          {
            defaultToken: "string.quoted.double"
          }
        ]
      };
    };
    oop.inherits(CedarSchemaHighlightRules, TextHighlightRules);
    exports.CedarSchemaHighlightRules = CedarSchemaHighlightRules;
  }
});

// src/mode/cedarschema.js
var require_cedarschema = __commonJS({
  "src/mode/cedarschema.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var CedarSchemaHighlightRules = require_cedarschema_highlight_rules().CedarSchemaHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = CedarSchemaHighlightRules;
      this.foldingRules = new CStyleFoldMode();
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.$id = "ace/mode/cedarschema";
      this.snippetFileId = "ace/snippets/cedarschema";
      this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        if (/[\{\[]\s*$/.test(line)) {
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
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_cedarschema();

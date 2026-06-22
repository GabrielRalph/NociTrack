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

// src/mode/cedar_highlight_rules.js
var require_cedar_highlight_rules = __commonJS({
  "src/mode/cedar_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var CedarHighlightRules = function() {
      var keywordMapper = this.createKeywordMapper({
        "keyword": "permit|forbid|when|unless|in|has|like|if|then|else|is",
        "variable.other.constant": "principal|action|resource|context",
        "constant.language.boolean": "true|false",
        "support.function": "ip|decimal|datetime|duration"
      }, "identifier");
      this.$rules = {
        "start": [
          {
            token: "comment.line.double-slash",
            regex: /\/\/.*$/
          },
          {
            token: ["meta.decorator", "paren.lparen"],
            regex: /(@[_a-zA-Z][_a-zA-Z0-9]*)([\(])/
          },
          {
            token: "variable.other",
            regex: /\?(principal|resource)\b/
          },
          {
            token: "string.quoted.double",
            regex: '"',
            next: "cedar-string"
          },
          {
            token: "entity.name.type",
            regex: /[_a-zA-Z][_a-zA-Z0-9]*(?:::[_a-zA-Z][_a-zA-Z0-9]*)*(?=::")/
          },
          {
            token: "entity.name.type",
            regex: /[_a-zA-Z][_a-zA-Z0-9]*(?:::[_a-zA-Z][_a-zA-Z0-9]*)+/
          },
          {
            token: ["punctuation.operator", "entity.name.function.member", "paren.lparen"],
            regex: /(\.)(contains|containsAll|containsAny|isEmpty|getTag|hasTag|isIpv4|isIpv6|isLoopback|isMulticast|isInRange|lessThan|lessThanOrEqual|greaterThan|greaterThanOrEqual|offset|durationSince|toDate|toTime|toMilliseconds|toSeconds|toMinutes|toHours|toDays)(\()/
          },
          {
            token: ["support.function", "paren.lparen"],
            regex: /(ip|decimal|datetime|duration)(\()/
          },
          {
            token: "constant.numeric",
            regex: /[1-9][0-9]*|0\b/
          },
          {
            token: keywordMapper,
            regex: /[a-zA-Z_][a-zA-Z0-9_]*\b/
          },
          {
            token: "punctuation.operator",
            regex: /::/
          },
          {
            token: "keyword.operator",
            regex: /==|!=|<=|>=|<|>|&&|\|\||!/
          },
          {
            token: "keyword.operator",
            regex: /[+\-*]/
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
            regex: /[,;.]/
          },
          {
            token: "text",
            regex: /\s+/
          }
        ],
        "cedar-string": [
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
    oop.inherits(CedarHighlightRules, TextHighlightRules);
    exports.CedarHighlightRules = CedarHighlightRules;
  }
});

// src/mode/cedar.js
var require_cedar = __commonJS({
  "src/mode/cedar.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var CedarHighlightRules = require_cedar_highlight_rules().CedarHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = CedarHighlightRules;
      this.foldingRules = new CStyleFoldMode();
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.$id = "ace/mode/cedar";
      this.snippetFileId = "ace/snippets/cedar";
      this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        if (/[\{\(]\s*$/.test(line)) {
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
export default require_cedar();

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

// src/mode/clue_highlight_rules.js
var require_clue_highlight_rules = __commonJS({
  "src/mode/clue_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var ClueHighlightRules = function() {
      this.$rules = {
        start: [{
          token: [
            "keyword.control.directive.clue",
            "text",
            "text"
          ],
          regex: /(@version)( )(.+?(?=\n))/
        }, {
          token: ["keyword.control.macro.clue", "text", "text"],
          regex: /(@macro)( )([A-Za-z_][0-9A-Za-z_]*)/
        }, {
          token: [
            "keyword.control.import.clue",
            "text",
            "string"
          ],
          regex: /(@import)( )(".*")/
        }, {
          token: "meta.preprocessor.macro.invocation.clue",
          regex: /\$[A-Za-z_][0-9A-Za-z_]*!/
        }, {
          token: "keyword.control.directive.clue",
          regex: /@(?:(?:else_)?(?:ifos|iflua|ifdef|ifndef|ifcmp|ifos|iflua|ifdef|ifcmp|if)|else|define|macro|error|print)/
        }, {
          token: "constant.numeric.integer.hexadecimal.clue",
          regex: /\b0[xX][0-9A-Fa-f]+(?![pPeE.0-9])\b/
        }, {
          token: "constant.numeric.float.hexadecimal.clue",
          regex: /\b0[xX][0-9A-Fa-f]+(?:\.[0-9A-Fa-f]+)?(?:[eE]-?\d*)?(?:[pP][-+]\d+)?\b/
        }, {
          token: "constant.numeric.integer.clue",
          regex: /\b\d+(?![pPeE.0-9])/
        }, {
          token: "constant.numeric.float.clue",
          regex: /\b\d+(?:\.\d+)?(?:[eE]-?\d*)?/
        }, {
          token: "punctuation.definition.string.multilined.begin.clue",
          regex: /'/,
          push: [{
            token: "punctuation.definition.string.multilined.end.clue",
            regex: /'/,
            next: "pop"
          }, {
            include: "#escaped_char"
          }, {
            defaultToken: "string.quoted.single.clue"
          }]
        }, {
          token: "punctuation.definition.string.multilined.begin.clue",
          regex: /"/,
          push: [{
            token: "punctuation.definition.string.multilined.end.clue",
            regex: /"/,
            next: "pop"
          }, {
            include: "#escaped_char"
          }, {
            defaultToken: "string.quoted.double.clue"
          }]
        }, {
          token: "punctuation.definition.string.multilined.begin.clue",
          regex: /`/,
          push: [{
            token: "punctuation.definition.string.multilined.end.clue",
            regex: /`/,
            next: "pop"
          }, {
            include: "#escaped_char"
          }, {
            defaultToken: "string.multiline.clue"
          }]
        }, {
          token: "comment.line.double-dash.clue",
          regex: /\/\/.*/
        }, {
          token: "punctuation.definition.comment.begin.clue",
          regex: /\/\*/,
          push: [{
            token: "punctuation.definition.comment.end.clue",
            regex: /\*\//,
            next: "pop"
          }, {
            include: "#escaped_char"
          }, {
            defaultToken: "comment.block.clue"
          }]
        }, {
          token: "keyword.control.clue",
          regex: /\b(?:if|elseif|else|for|of|in|with|while|meta|until|fn|method|return|loop|enum|goto|continue|break|try|catch|match|default|macro)\b/
        }, {
          token: "keyword.scope.clue",
          regex: /\b(?:local|global|static)\b/
        }, {
          token: "constant.language.clue",
          regex: /\b(?:false|nil|true|_G|_VERSION|math\.(?:pi|huge))\b/
        }, {
          token: "constant.language.ellipsis.clue",
          regex: /\.{3}(?!\.)/
        }, {
          token: "keyword.operator.property.clue",
          regex: /\.|::/,
          next: "property_identifier"
        }, {
          token: "keyword.operator.clue",
          regex: /\/_|\&|\||\!|\~|\?|\$|@|\+|-|%|#|\*|\/|\^|==?|<=?|>=?|\.{2}|\?\?=?|(?:&&|\|\|)=?/
        }, {
          token: "variable.language.self.clue",
          regex: /\bself\b/
        }, {
          token: "support.function.any-method.clue",
          regex: /\b[a-zA-Z_][a-zA-Z0-9_]*\b(?=\(\s*)/
        }, {
          token: "variable.other.clue",
          regex: /[A-Za-z_][0-9A-Za-z_]*/
        }],
        "#escaped_char": [{
          token: "constant.character.escape.clue",
          regex: /\\[abfnrtvz\\"'$]/
        }, {
          token: "constant.character.escape.byte.clue",
          regex: /\\\d{1,3}/
        }, {
          token: "constant.character.escape.byte.clue",
          regex: /\\x[0-9A-Fa-f][0-9A-Fa-f]/
        }, {
          token: "constant.character.escape.unicode.clue",
          regex: /\\u\{[0-9A-Fa-f]+\}/
        }, {
          token: "invalid.illegal.character.escape.clue",
          regex: /\\./
        }],
        property_identifier: [{
          token: "variable.other.property.clue",
          regex: /[A-Za-z_][0-9A-Za-z_]*/,
          next: "start"
        }, {
          token: "",
          regex: "",
          next: "start"
        }]
      };
      this.normalizeRules();
    };
    ClueHighlightRules.metaData = {
      name: "Clue",
      scopeName: "source.clue"
    };
    oop.inherits(ClueHighlightRules, TextHighlightRules);
    exports.ClueHighlightRules = ClueHighlightRules;
  }
});

// src/mode/clue.js
var require_clue = __commonJS({
  "src/mode/clue.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var ClueHighlightRules = require_clue_highlight_rules().ClueHighlightRules;
    var FoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = ClueHighlightRules;
      this.foldingRules = new FoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.blockComment = { start: "/*", end: "*/" };
      this.$quotes = { '"': '"', "'": "'", "`": "`" };
      this.$pairQuotesAfter = {
        "`": /\w/
      };
      this.$id = "ace/mode/clue";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_clue();

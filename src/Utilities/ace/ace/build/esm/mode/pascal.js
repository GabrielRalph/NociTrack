import {
  require_coffee
} from "../chunk-2I2EWIJ7.js";
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

// src/mode/pascal_highlight_rules.js
var require_pascal_highlight_rules = __commonJS({
  "src/mode/pascal_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var PascalHighlightRules = function() {
      var keywordMapper = this.createKeywordMapper({
        "keyword.control": "absolute|abstract|all|and|and_then|array|as|asm|attribute|begin|bindable|case|class|const|constructor|destructor|div|do|do|else|end|except|export|exports|external|far|file|finalization|finally|for|forward|goto|if|implementation|import|in|inherited|initialization|interface|interrupt|is|label|library|mod|module|name|near|nil|not|object|of|only|operator|or|or_else|otherwise|packed|pow|private|program|property|protected|public|published|qualified|record|repeat|resident|restricted|segment|set|shl|shr|then|to|try|type|unit|until|uses|value|var|view|virtual|while|with|xor"
      }, "identifier", true);
      this.$rules = {
        start: [
          {
            caseInsensitive: true,
            token: [
              "variable",
              "text",
              "storage.type.prototype",
              "entity.name.function.prototype"
            ],
            regex: "\\b(function|procedure)(\\s+)(\\w+)(\\.\\w+)?(?=(?:\\(.*?\\))?;\\s*(?:attribute|forward|external))"
          },
          {
            caseInsensitive: true,
            token: ["variable", "text", "storage.type.function", "entity.name.function"],
            regex: "\\b(function|procedure)(\\s+)(\\w+)(\\.\\w+)?"
          },
          {
            caseInsensitive: true,
            token: keywordMapper,
            regex: /\b[a-z_]+\b/
          },
          {
            token: "constant.numeric",
            regex: "\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"
          },
          {
            token: "punctuation.definition.comment",
            regex: "--.*$"
          },
          {
            token: "punctuation.definition.comment",
            regex: "//.*$"
          },
          {
            token: "punctuation.definition.comment",
            regex: "\\(\\*",
            push: [
              {
                token: "punctuation.definition.comment",
                regex: "\\*\\)",
                next: "pop"
              },
              { defaultToken: "comment.block.one" }
            ]
          },
          {
            token: "punctuation.definition.comment",
            regex: "\\{",
            push: [
              {
                token: "punctuation.definition.comment",
                regex: "\\}",
                next: "pop"
              },
              { defaultToken: "comment.block.two" }
            ]
          },
          {
            token: "punctuation.definition.string.begin",
            regex: '"',
            push: [
              { token: "constant.character.escape", regex: "\\\\." },
              {
                token: "punctuation.definition.string.end",
                regex: '"',
                next: "pop"
              },
              { defaultToken: "string.quoted.double" }
            ]
            //Double quoted strings are an extension and (generally) support C-style escape sequences.
          },
          {
            token: "punctuation.definition.string.begin",
            regex: "'",
            push: [
              {
                token: "constant.character.escape.apostrophe",
                regex: "''"
              },
              {
                token: "punctuation.definition.string.end",
                regex: "'",
                next: "pop"
              },
              { defaultToken: "string.quoted.single" }
            ]
          },
          {
            token: "keyword.operator",
            regex: "[+\\-;,/*%]|:=|="
          }
        ]
      };
      this.normalizeRules();
    };
    oop.inherits(PascalHighlightRules, TextHighlightRules);
    exports.PascalHighlightRules = PascalHighlightRules;
  }
});

// src/mode/pascal.js
var require_pascal = __commonJS({
  "src/mode/pascal.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var PascalHighlightRules = require_pascal_highlight_rules().PascalHighlightRules;
    var FoldMode = require_coffee().FoldMode;
    var Mode = function() {
      this.HighlightRules = PascalHighlightRules;
      this.foldingRules = new FoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = ["--", "//"];
      this.blockComment = [
        { start: "(*", end: "*)" },
        { start: "{", end: "}" }
      ];
      this.$id = "ace/mode/pascal";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_pascal();

import {
  require_ini
} from "../chunk-EHUXSSGC.js";
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

// src/mode/toml_highlight_rules.js
var require_toml_highlight_rules = __commonJS({
  "src/mode/toml_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var TomlHighlightRules = function() {
      var keywordMapper = this.createKeywordMapper({
        "constant.language.boolean": "true|false"
      }, "identifier");
      var identifierRe = "[a-zA-Z\\$_\xA1-\uFFFF][a-zA-Z\\d\\$_\xA1-\uFFFF]*\\b";
      this.$rules = {
        "start": [
          {
            token: "comment.toml",
            regex: /#.*$/
          },
          {
            token: "string",
            regex: '"""',
            next: "multistring"
          },
          {
            token: "string",
            regex: '"(?=.)',
            next: "qqstring"
          },
          {
            token: ["variable.keygroup.toml"],
            regex: "(?:^\\s*)(\\[\\[([^\\]]+)\\]\\])"
          },
          {
            token: ["variable.keygroup.toml"],
            regex: "(?:^\\s*)(\\[([^\\]]+)\\])"
          },
          {
            token: keywordMapper,
            regex: identifierRe
          },
          {
            token: "support.date.toml",
            regex: "\\d{4}-\\d{2}-\\d{2}(T)\\d{2}:\\d{2}:\\d{2}(Z)"
          },
          {
            token: "constant.numeric.toml",
            regex: "-?\\d+(\\.?\\d+)?"
          }
        ],
        "qqstring": [
          {
            token: "string",
            regex: "\\\\$",
            next: "qqstring"
          },
          {
            token: "constant.language.escape",
            regex: '\\\\[0tnr"\\\\]'
          },
          {
            token: "string",
            regex: '"|$',
            next: "start"
          },
          {
            defaultToken: "string"
          }
        ],
        "multistring": [
          {
            token: "string",
            regex: "$",
            next: "multistring"
          },
          {
            token: "constant.language.escape",
            regex: '\\\\[0tnr"\\\\]'
          },
          {
            token: "string",
            regex: '"""',
            next: "start"
          },
          {
            defaultToken: "string"
          }
        ]
      };
    };
    oop.inherits(TomlHighlightRules, TextHighlightRules);
    exports.TomlHighlightRules = TomlHighlightRules;
  }
});

// src/mode/toml.js
var require_toml = __commonJS({
  "src/mode/toml.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var TomlHighlightRules = require_toml_highlight_rules().TomlHighlightRules;
    var FoldMode = require_ini().FoldMode;
    var Mode = function() {
      this.HighlightRules = TomlHighlightRules;
      this.foldingRules = new FoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "#";
      this.$id = "ace/mode/toml";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_toml();

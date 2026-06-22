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

// src/mode/gitignore_highlight_rules.js
var require_gitignore_highlight_rules = __commonJS({
  "src/mode/gitignore_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var GitignoreHighlightRules = function() {
      this.$rules = {
        "start": [
          {
            token: "comment",
            regex: /^\s*#.*$/
          },
          {
            token: "keyword",
            // negated patterns
            regex: /^\s*!.*$/
          }
        ]
      };
      this.normalizeRules();
    };
    GitignoreHighlightRules.metaData = {
      fileTypes: ["gitignore"],
      name: "Gitignore"
    };
    oop.inherits(GitignoreHighlightRules, TextHighlightRules);
    exports.GitignoreHighlightRules = GitignoreHighlightRules;
  }
});

// src/mode/gitignore.js
var require_gitignore = __commonJS({
  "src/mode/gitignore.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var GitignoreHighlightRules = require_gitignore_highlight_rules().GitignoreHighlightRules;
    var Mode = function() {
      this.HighlightRules = GitignoreHighlightRules;
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "#";
      this.$id = "ace/mode/gitignore";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_gitignore();

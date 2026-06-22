import {
  require_sh_highlight_rules
} from "../chunk-5OIIHWY4.js";
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

// src/mode/makefile_highlight_rules.js
var require_makefile_highlight_rules = __commonJS({
  "src/mode/makefile_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var ShHighlightFile = require_sh_highlight_rules();
    var MakefileHighlightRules = function() {
      var keywordMapper = this.createKeywordMapper({
        "keyword": ShHighlightFile.reservedKeywords,
        "support.function.builtin": ShHighlightFile.languageConstructs,
        "invalid.deprecated": "debugger"
      }, "string");
      this.$rules = {
        "start": [
          {
            token: "string.interpolated.backtick.makefile",
            regex: "`",
            next: "shell-start"
          },
          {
            token: "punctuation.definition.comment.makefile",
            regex: /#(?=.)/,
            next: "comment"
          },
          {
            token: ["keyword.control.makefile"],
            regex: "^(?:\\s*\\b)(\\-??include|ifeq|ifneq|ifdef|ifndef|else|endif|vpath|export|unexport|define|endef|override)(?:\\b)"
          },
          {
            // ^([^\t ]+(\s[^\t ]+)*:(?!\=))\s*.*
            token: ["entity.name.function.makefile", "text"],
            regex: "^([^\\t ]+(?:\\s[^\\t ]+)*:)(\\s*.*)"
          }
        ],
        "comment": [
          {
            token: "punctuation.definition.comment.makefile",
            regex: /.+\\/
          },
          {
            token: "punctuation.definition.comment.makefile",
            regex: ".+",
            next: "start"
          }
        ],
        "shell-start": [
          {
            token: keywordMapper,
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
          },
          {
            token: "string",
            regex: "\\w+"
          },
          {
            token: "string.interpolated.backtick.makefile",
            regex: "`",
            next: "start"
          }
        ]
      };
    };
    oop.inherits(MakefileHighlightRules, TextHighlightRules);
    exports.MakefileHighlightRules = MakefileHighlightRules;
  }
});

// src/mode/makefile.js
var require_makefile = __commonJS({
  "src/mode/makefile.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var MakefileHighlightRules = require_makefile_highlight_rules().MakefileHighlightRules;
    var FoldMode = require_coffee().FoldMode;
    var Mode = function() {
      this.HighlightRules = MakefileHighlightRules;
      this.foldingRules = new FoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "#";
      this.$indentWithTabs = true;
      this.$id = "ace/mode/makefile";
      this.snippetFileId = "ace/snippets/makefile";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_makefile();

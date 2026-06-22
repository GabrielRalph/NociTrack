import {
  require_sass_highlight_rules
} from "./chunk-72S3SBBK.js";
import {
  require_coffee
} from "./chunk-2I2EWIJ7.js";
import {
  require_text
} from "./chunk-LMYBRGOM.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/sass.js
var require_sass = __commonJS({
  "src/mode/sass.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var SassHighlightRules = require_sass_highlight_rules().SassHighlightRules;
    var FoldMode = require_coffee().FoldMode;
    var Mode = function() {
      this.HighlightRules = SassHighlightRules;
      this.foldingRules = new FoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.$id = "ace/mode/sass";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});

export {
  require_sass
};

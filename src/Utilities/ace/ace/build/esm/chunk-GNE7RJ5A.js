import {
  require_typescript_highlight_rules
} from "./chunk-V22BFUFQ.js";
import {
  require_javascript3 as require_javascript
} from "./chunk-GUNMO7YX.js";
import {
  require_matching_brace_outdent
} from "./chunk-5GQPFTLG.js";
import {
  require_cstyle
} from "./chunk-67VAGNRS.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/typescript.js
var require_typescript = __commonJS({
  "src/mode/typescript.js"(exports) {
    var oop = require_oop();
    var jsMode = require_javascript().Mode;
    var TypeScriptHighlightRules = require_typescript_highlight_rules().TypeScriptHighlightRules;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var Mode = function() {
      this.HighlightRules = TypeScriptHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = this.$defaultBehaviour;
      this.foldingRules = new CStyleFoldMode();
    };
    oop.inherits(Mode, jsMode);
    (function() {
      this.createWorker = function(session) {
        return null;
      };
      this.$id = "ace/mode/typescript";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});

export {
  require_typescript
};

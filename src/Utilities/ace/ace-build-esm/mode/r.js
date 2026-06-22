import {
  require_r_highlight_rules
} from "../chunk-ERCCJ34Y.js";
import "../chunk-FKWH2OFK.js";
import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
import {
  require_text,
  require_text_highlight_rules,
  require_unicode
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
import {
  require_range
} from "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/r.js
var require_r = __commonJS({
  "src/mode/r.js"(exports) {
    var unicode = require_unicode();
    var Range = require_range().Range;
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var RHighlightRules = require_r_highlight_rules().RHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var Mode = function() {
      this.HighlightRules = RHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "#";
      this.tokenRe = new RegExp("^[" + unicode.wordChars + "._]+", "g");
      this.nonTokenRe = new RegExp("^(?:[^" + unicode.wordChars + "._]|s])+", "g");
      this.$id = "ace/mode/r";
      this.snippetFileId = "ace/snippets/r";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_r();

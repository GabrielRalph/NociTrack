import {
  require_r_highlight_rules
} from "../chunk-KMR6D5PZ.js";
import "../chunk-MLXF52CK.js";
import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
import {
  require_text,
  require_text_highlight_rules,
  require_unicode
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

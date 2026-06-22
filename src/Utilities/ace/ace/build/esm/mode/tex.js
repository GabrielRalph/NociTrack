import {
  require_tex_highlight_rules
} from "../chunk-MLXF52CK.js";
import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
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

// src/mode/tex.js
var require_tex = __commonJS({
  "src/mode/tex.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var TexHighlightRules = require_tex_highlight_rules().TexHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var Mode = function(suppressHighlighting) {
      if (suppressHighlighting)
        this.HighlightRules = TextHighlightRules;
      else
        this.HighlightRules = TexHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "%";
      this.getNextLineIndent = function(state, line, tab) {
        return this.$getIndent(line);
      };
      this.allowAutoInsert = function() {
        return false;
      };
      this.$id = "ace/mode/tex";
      this.snippetFileId = "ace/snippets/tex";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_tex();

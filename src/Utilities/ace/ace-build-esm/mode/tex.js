import {
  require_tex_highlight_rules
} from "../chunk-FKWH2OFK.js";
import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
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

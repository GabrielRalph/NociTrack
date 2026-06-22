import {
  require_perl_highlight_rules
} from "../chunk-LDXPWMVN.js";
import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
import "../chunk-JEWW6F7O.js";
import {
  require_text
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

// src/mode/perl.js
var require_perl = __commonJS({
  "src/mode/perl.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var PerlHighlightRules = require_perl_highlight_rules().PerlHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = PerlHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.foldingRules = new CStyleFoldMode({ start: "^=(begin|item)\\b", end: "^=(cut)\\b" });
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "#";
      this.blockComment = [
        { start: "=begin", end: "=cut", lineStartOnly: true },
        { start: "=item", end: "=cut", lineStartOnly: true }
      ];
      this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;
        if (tokens.length && tokens[tokens.length - 1].type == "comment") {
          return indent;
        }
        if (state == "start") {
          var match = line.match(/^.*[\{\(\[:]\s*$/);
          if (match) {
            indent += tab;
          }
        }
        return indent;
      };
      this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
      };
      this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
      };
      this.$id = "ace/mode/perl";
      this.snippetFileId = "ace/snippets/perl";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_perl();

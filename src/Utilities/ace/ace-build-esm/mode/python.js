import {
  require_pythonic
} from "../chunk-VQZ667U4.js";
import {
  require_python_highlight_rules
} from "../chunk-G2HN4SE3.js";
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
import {
  require_range
} from "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/python.js
var require_python = __commonJS({
  "src/mode/python.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var PythonHighlightRules = require_python_highlight_rules().PythonHighlightRules;
    var PythonFoldMode = require_pythonic().FoldMode;
    var Range = require_range().Range;
    var Mode = function() {
      this.HighlightRules = PythonHighlightRules;
      this.foldingRules = new PythonFoldMode("\\:");
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "#";
      this.$pairQuotesAfter = {
        "'": /[ruf]/i,
        '"': /[ruf]/i
      };
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
      var outdents = {
        "pass": 1,
        "return": 1,
        "raise": 1,
        "break": 1,
        "continue": 1
      };
      this.checkOutdent = function(state, line, input) {
        if (input !== "\r\n" && input !== "\r" && input !== "\n")
          return false;
        var tokens = this.getTokenizer().getLineTokens(line.trim(), state).tokens;
        if (!tokens)
          return false;
        do {
          var last = tokens.pop();
        } while (last && (last.type == "comment" || last.type == "text" && last.value.match(/^\s+$/)));
        if (!last)
          return false;
        return last.type == "keyword" && outdents[last.value];
      };
      this.autoOutdent = function(state, doc, row) {
        row += 1;
        var indent = this.$getIndent(doc.getLine(row));
        var tab = doc.getTabString();
        if (indent.slice(-tab.length) == tab)
          doc.remove(new Range(row, indent.length - tab.length, row, indent.length));
      };
      this.$id = "ace/mode/python";
      this.snippetFileId = "ace/snippets/python";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_python();

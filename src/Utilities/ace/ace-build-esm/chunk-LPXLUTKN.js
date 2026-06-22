import {
  require_sh_highlight_rules
} from "./chunk-VYNLZFVQ.js";
import {
  require_cstyle
} from "./chunk-67VAGNRS.js";
import {
  require_text
} from "./chunk-LMYBRGOM.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  require_range
} from "./chunk-VZTAWSAA.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/sh.js
var require_sh = __commonJS({
  "src/mode/sh.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var ShHighlightRules = require_sh_highlight_rules().ShHighlightRules;
    var Range = require_range().Range;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = ShHighlightRules;
      this.foldingRules = new CStyleFoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "#";
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
      this.$id = "ace/mode/sh";
      this.snippetFileId = "ace/snippets/sh";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});

export {
  require_sh
};

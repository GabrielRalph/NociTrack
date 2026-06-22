import {
  require_c_cpp_highlight_rules
} from "./chunk-GCHQVQQ6.js";
import {
  require_matching_brace_outdent
} from "./chunk-5GQPFTLG.js";
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
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/c_cpp.js
var require_c_cpp = __commonJS({
  "src/mode/c_cpp.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var c_cppHighlightRules = require_c_cpp_highlight_rules().c_cppHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = c_cppHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = this.$defaultBehaviour;
      this.foldingRules = new CStyleFoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.blockComment = { start: "/*", end: "*/" };
      this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;
        var endState = tokenizedLine.state;
        if (tokens.length && tokens[tokens.length - 1].type == "comment") {
          return indent;
        }
        if (state == "start") {
          var match = line.match(/^.*[\{\(\[]\s*$/);
          if (match) {
            indent += tab;
          }
        } else if (state == "doc-start") {
          if (endState == "start") {
            return "";
          }
          var match = line.match(/^\s*(\/?)\*/);
          if (match) {
            if (match[1]) {
              indent += " ";
            }
            indent += "* ";
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
      this.$id = "ace/mode/c_cpp";
      this.snippetFileId = "ace/snippets/c_cpp";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});

export {
  require_c_cpp
};

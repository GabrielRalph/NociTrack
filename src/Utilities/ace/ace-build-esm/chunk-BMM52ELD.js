import {
  require_less_highlight_rules
} from "./chunk-UKNFP5QK.js";
import {
  require_css_completions
} from "./chunk-QMZLOC5Q.js";
import {
  require_css
} from "./chunk-YNHGF363.js";
import {
  require_matching_brace_outdent
} from "./chunk-5GQPFTLG.js";
import {
  require_cstyle
} from "./chunk-67VAGNRS.js";
import {
  require_worker_client
} from "./chunk-5O3J7W3G.js";
import {
  require_text
} from "./chunk-LMYBRGOM.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/less.js
var require_less = __commonJS({
  "src/mode/less.js"(exports) {
    var oop = require_oop();
    var WorkerClient = require_worker_client().WorkerClient;
    var TextMode = require_text().Mode;
    var LessHighlightRules = require_less_highlight_rules().LessHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var CssBehaviour = require_css().CssBehaviour;
    var CssCompletions = require_css_completions().CssCompletions;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = LessHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = new CssBehaviour();
      this.$completer = new CssCompletions();
      this.foldingRules = new CStyleFoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.blockComment = { start: "/*", end: "*/" };
      this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        var tokens = this.getTokenizer().getLineTokens(line, state).tokens;
        if (tokens.length && tokens[tokens.length - 1].type == "comment") {
          return indent;
        }
        var match = line.match(/^.*\{\s*$/);
        if (match) {
          indent += tab;
        }
        return indent;
      };
      this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
      };
      this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
      };
      this.getCompletions = function(state, session, pos, prefix) {
        return this.$completer.getCompletions("ruleset", session, pos, prefix);
      };
      this.createWorker = function(session) {
        var worker = new WorkerClient(["ace"], "ace/mode/css_worker", "Worker");
        worker.attachToDocument(session.getDocument());
        worker.call("setOptions", [{ mode: "less" }]);
        worker.on("annotate", function(e) {
          session.setAnnotations(e.data);
        });
        worker.on("terminate", function() {
          session.clearAnnotations();
        });
        return worker;
      };
      this.$id = "ace/mode/less";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});

export {
  require_less
};

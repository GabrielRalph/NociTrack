import {
  require_json_highlight_rules
} from "./chunk-22JGFI4X.js";
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

// src/mode/json.js
var require_json = __commonJS({
  "src/mode/json.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var HighlightRules = require_json_highlight_rules().JsonHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var WorkerClient = require_worker_client().WorkerClient;
    var Mode = function() {
      this.HighlightRules = HighlightRules;
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
        if (state == "start") {
          var match = line.match(/^.*[\{\(\[]\s*$/);
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
      this.createWorker = function(session) {
        var worker = new WorkerClient(["ace"], "ace/mode/json_worker", "JsonWorker");
        worker.attachToDocument(session.getDocument());
        worker.on("annotate", function(e) {
          session.setAnnotations(e.data);
        });
        worker.on("terminate", function() {
          session.clearAnnotations();
        });
        return worker;
      };
      this.$id = "ace/mode/json";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});

export {
  require_json
};

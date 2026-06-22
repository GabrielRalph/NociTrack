import {
  require_coffee_highlight_rules
} from "./chunk-AEEIZ3MR.js";
import {
  require_matching_brace_outdent
} from "./chunk-5GQPFTLG.js";
import {
  require_coffee
} from "./chunk-2I2EWIJ7.js";
import {
  require_worker_client
} from "./chunk-5O3J7W3G.js";
import {
  require_text
} from "./chunk-QXTEMBPD.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  require_range
} from "./chunk-VZTAWSAA.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/coffee.js
var require_coffee2 = __commonJS({
  "src/mode/coffee.js"(exports) {
    var Rules = require_coffee_highlight_rules().CoffeeHighlightRules;
    var Outdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var FoldMode = require_coffee().FoldMode;
    var Range = require_range().Range;
    var TextMode = require_text().Mode;
    var WorkerClient = require_worker_client().WorkerClient;
    var oop = require_oop();
    function Mode() {
      this.HighlightRules = Rules;
      this.$outdent = new Outdent();
      this.foldingRules = new FoldMode();
    }
    oop.inherits(Mode, TextMode);
    (function() {
      var indenter = /(?:[({[=:]|[-=]>|\b(?:else|try|(?:swi|ca)tch(?:\s+[$A-Za-z_\x7f-\uffff][$\w\x7f-\uffff]*)?|finally))\s*$|^\s*(else\b\s*)?(?:if|for|while|loop)\b(?!.*\bthen\b)/;
      this.lineCommentStart = "#";
      this.blockComment = { start: "###", end: "###" };
      this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        var tokens = this.getTokenizer().getLineTokens(line, state).tokens;
        if (!(tokens.length && tokens[tokens.length - 1].type === "comment") && state === "start" && indenter.test(line))
          indent += tab;
        return indent;
      };
      this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
      };
      this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
      };
      this.createWorker = function(session) {
        var worker = new WorkerClient(["ace"], "ace/mode/coffee_worker", "Worker");
        worker.attachToDocument(session.getDocument());
        worker.on("annotate", function(e) {
          session.setAnnotations(e.data);
        });
        worker.on("terminate", function() {
          session.clearAnnotations();
        });
        return worker;
      };
      this.$id = "ace/mode/coffee";
      this.snippetFileId = "ace/snippets/coffee";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});

export {
  require_coffee2 as require_coffee
};

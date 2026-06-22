import {
  require_xml,
  require_xml2
} from "./chunk-U2RKG7VZ.js";
import {
  require_javascript_highlight_rules
} from "./chunk-IWXN4N2Q.js";
import {
  require_matching_brace_outdent
} from "./chunk-5GQPFTLG.js";
import {
  require_cstyle as require_cstyle2
} from "./chunk-67VAGNRS.js";
import {
  require_worker_client
} from "./chunk-5O3J7W3G.js";
import {
  require_cstyle,
  require_text
} from "./chunk-LMYBRGOM.js";
import {
  require_token_iterator
} from "./chunk-GLBKRGPE.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/behaviour/javascript.js
var require_javascript = __commonJS({
  "src/mode/behaviour/javascript.js"(exports) {
    "use strict";
    var oop = require_oop();
    var { TokenIterator } = require_token_iterator();
    var CstyleBehaviour = require_cstyle().CstyleBehaviour;
    var XmlBehaviour = require_xml().XmlBehaviour;
    var JavaScriptBehaviour = function() {
      var xmlBehaviours = new XmlBehaviour({ closeCurlyBraces: true }).getBehaviours();
      this.addBehaviours(xmlBehaviours);
      this.inherit(CstyleBehaviour);
      this.add("autoclosing-fragment", "insertion", function(state, action, editor, session, text) {
        if (text == ">") {
          var position = editor.getSelectionRange().start;
          var iterator = new TokenIterator(session, position.row, position.column);
          var token = iterator.getCurrentToken() || iterator.stepBackward();
          if (!token) return;
          if (token.value == "<") {
            return {
              text: "></>",
              selection: [1, 1]
            };
          }
        }
      });
    };
    oop.inherits(JavaScriptBehaviour, CstyleBehaviour);
    exports.JavaScriptBehaviour = JavaScriptBehaviour;
  }
});

// src/mode/folding/javascript.js
var require_javascript2 = __commonJS({
  "src/mode/folding/javascript.js"(exports) {
    "use strict";
    var oop = require_oop();
    var XmlFoldMode = require_xml2().FoldMode;
    var CFoldMode = require_cstyle2().FoldMode;
    var FoldMode = exports.FoldMode = function(commentRegex) {
      if (commentRegex) {
        this.foldingStartMarker = new RegExp(
          this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
      }
      this.xmlFoldMode = new XmlFoldMode();
    };
    oop.inherits(FoldMode, CFoldMode);
    (function() {
      this.getFoldWidgetRangeBase = this.getFoldWidgetRange;
      this.getFoldWidgetBase = this.getFoldWidget;
      this.getFoldWidget = function(session, foldStyle, row) {
        var fw = this.getFoldWidgetBase(session, foldStyle, row);
        if (!fw) {
          return this.xmlFoldMode.getFoldWidget(session, foldStyle, row);
        }
        return fw;
      };
      this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var range = this.getFoldWidgetRangeBase(session, foldStyle, row, forceMultiline);
        if (range) return range;
        return this.xmlFoldMode.getFoldWidgetRange(session, foldStyle, row);
      };
    }).call(FoldMode.prototype);
  }
});

// src/mode/javascript.js
var require_javascript3 = __commonJS({
  "src/mode/javascript.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var JavaScriptHighlightRules = require_javascript_highlight_rules().JavaScriptHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var WorkerClient = require_worker_client().WorkerClient;
    var JavaScriptBehaviour = require_javascript().JavaScriptBehaviour;
    var JavaScriptFoldMode = require_javascript2().FoldMode;
    var Mode = function() {
      this.HighlightRules = JavaScriptHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = new JavaScriptBehaviour();
      this.foldingRules = new JavaScriptFoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.blockComment = { start: "/*", end: "*/" };
      this.$quotes = { '"': '"', "'": "'", "`": "`" };
      this.$pairQuotesAfter = {
        "`": /\w/
      };
      this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;
        var endState = tokenizedLine.state;
        if (tokens.length && tokens[tokens.length - 1].type == "comment") {
          return indent;
        }
        if (state == "start" || state == "no_regex") {
          var match = line.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);
          if (match) {
            indent += tab;
          }
        } else if (state == "doc-start") {
          if (endState == "start" || endState == "no_regex") {
            return "";
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
        var worker = new WorkerClient(["ace"], "ace/mode/javascript_worker", "JavaScriptWorker");
        worker.attachToDocument(session.getDocument());
        worker.on("annotate", function(results) {
          session.setAnnotations(results.data);
        });
        worker.on("terminate", function() {
          session.clearAnnotations();
        });
        return worker;
      };
      this.$id = "ace/mode/javascript";
      this.snippetFileId = "ace/snippets/javascript";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});

export {
  require_javascript,
  require_javascript2,
  require_javascript3
};

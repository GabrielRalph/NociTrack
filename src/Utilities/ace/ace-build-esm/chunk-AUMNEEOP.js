import {
  require_xml,
  require_xml2
} from "./chunk-U2RKG7VZ.js";
import {
  require_xml_highlight_rules
} from "./chunk-CYWDEW5M.js";
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
  require_lang
} from "./chunk-NNGFYYI3.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/xml.js
var require_xml3 = __commonJS({
  "src/mode/xml.js"(exports) {
    var oop = require_oop();
    var lang = require_lang();
    var TextMode = require_text().Mode;
    var XmlHighlightRules = require_xml_highlight_rules().XmlHighlightRules;
    var XmlBehaviour = require_xml().XmlBehaviour;
    var XmlFoldMode = require_xml2().FoldMode;
    var WorkerClient = require_worker_client().WorkerClient;
    var Mode = function() {
      this.HighlightRules = XmlHighlightRules;
      this.$behaviour = new XmlBehaviour();
      this.foldingRules = new XmlFoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.voidElements = lang.arrayToMap([]);
      this.blockComment = { start: "<!--", end: "-->" };
      this.createWorker = function(session) {
        var worker = new WorkerClient(["ace"], "ace/mode/xml_worker", "Worker");
        worker.attachToDocument(session.getDocument());
        worker.on("error", function(e) {
          session.setAnnotations(e.data);
        });
        worker.on("terminate", function() {
          session.clearAnnotations();
        });
        return worker;
      };
      this.$id = "ace/mode/xml";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});

export {
  require_xml3 as require_xml
};

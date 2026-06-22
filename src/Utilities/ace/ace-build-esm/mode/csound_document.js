import {
  require_csound_orchestra_highlight_rules
} from "../chunk-S64YPQAG.js";
import "../chunk-G2HN4SE3.js";
import "../chunk-H3TMA63A.js";
import {
  require_csound_score_highlight_rules
} from "../chunk-JTFNF6AP.js";
import {
  require_html_highlight_rules
} from "../chunk-QUH7KENW.js";
import "../chunk-CYWDEW5M.js";
import "../chunk-IWXN4N2Q.js";
import "../chunk-6CORPKBO.js";
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

// src/mode/csound_document_highlight_rules.js
var require_csound_document_highlight_rules = __commonJS({
  "src/mode/csound_document_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var CsoundOrchestraHighlightRules = require_csound_orchestra_highlight_rules().CsoundOrchestraHighlightRules;
    var CsoundScoreHighlightRules = require_csound_score_highlight_rules().CsoundScoreHighlightRules;
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var CsoundDocumentHighlightRules = function() {
      var orchestraHighlightRules = new CsoundOrchestraHighlightRules("csound-");
      var scoreHighlightRules = new CsoundScoreHighlightRules("csound-score-");
      this.$rules = {
        "start": [
          {
            token: ["meta.tag.punctuation.tag-open.csound-document", "entity.name.tag.begin.csound-document", "meta.tag.punctuation.tag-close.csound-document"],
            regex: /(<)(CsoundSynthesi[sz]er)(>)/,
            next: "synthesizer"
          },
          { defaultToken: "text.csound-document" }
        ],
        "synthesizer": [
          {
            token: ["meta.tag.punctuation.end-tag-open.csound-document", "entity.name.tag.begin.csound-document", "meta.tag.punctuation.tag-close.csound-document"],
            regex: "(</)(CsoundSynthesi[sz]er)(>)",
            next: "start"
          },
          {
            token: ["meta.tag.punctuation.tag-open.csound-document", "entity.name.tag.begin.csound-document", "meta.tag.punctuation.tag-close.csound-document"],
            regex: "(<)(CsInstruments)(>)",
            next: orchestraHighlightRules.embeddedRulePrefix + "start"
          },
          {
            token: ["meta.tag.punctuation.tag-open.csound-document", "entity.name.tag.begin.csound-document", "meta.tag.punctuation.tag-close.csound-document"],
            regex: "(<)(CsScore)(>)",
            next: scoreHighlightRules.embeddedRulePrefix + "start"
          },
          {
            token: ["meta.tag.punctuation.tag-open.csound-document", "entity.name.tag.begin.csound-document", "meta.tag.punctuation.tag-close.csound-document"],
            regex: "(<)([Hh][Tt][Mm][Ll])(>)",
            next: "html-start"
          }
        ]
      };
      this.embedRules(orchestraHighlightRules.getRules(), orchestraHighlightRules.embeddedRulePrefix, [{
        token: ["meta.tag.punctuation.end-tag-open.csound-document", "entity.name.tag.begin.csound-document", "meta.tag.punctuation.tag-close.csound-document"],
        regex: "(</)(CsInstruments)(>)",
        next: "synthesizer"
      }]);
      this.embedRules(scoreHighlightRules.getRules(), scoreHighlightRules.embeddedRulePrefix, [{
        token: ["meta.tag.punctuation.end-tag-open.csound-document", "entity.name.tag.begin.csound-document", "meta.tag.punctuation.tag-close.csound-document"],
        regex: "(</)(CsScore)(>)",
        next: "synthesizer"
      }]);
      this.embedRules(HtmlHighlightRules, "html-", [{
        token: ["meta.tag.punctuation.end-tag-open.csound-document", "entity.name.tag.begin.csound-document", "meta.tag.punctuation.tag-close.csound-document"],
        regex: "(</)([Hh][Tt][Mm][Ll])(>)",
        next: "synthesizer"
      }]);
      this.normalizeRules();
    };
    oop.inherits(CsoundDocumentHighlightRules, TextHighlightRules);
    exports.CsoundDocumentHighlightRules = CsoundDocumentHighlightRules;
  }
});

// src/mode/csound_document.js
var require_csound_document = __commonJS({
  "src/mode/csound_document.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var CsoundDocumentHighlightRules = require_csound_document_highlight_rules().CsoundDocumentHighlightRules;
    var Mode = function() {
      this.HighlightRules = CsoundDocumentHighlightRules;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.$id = "ace/mode/csound_document";
      this.snippetFileId = "ace/snippets/csound_document";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_csound_document();

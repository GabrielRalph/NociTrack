import {
  require_csound_orchestra_highlight_rules
} from "../chunk-DPWVXTV6.js";
import "../chunk-ZXQYABK7.js";
import "../chunk-YXBMFJXS.js";
import {
  require_csound_score_highlight_rules
} from "../chunk-UWHTUECG.js";
import {
  require_html_highlight_rules
} from "../chunk-2TRMU5AT.js";
import "../chunk-VGQVSYAP.js";
import "../chunk-ELLQ4DAZ.js";
import "../chunk-KDDWKWK4.js";
import {
  require_text,
  require_text_highlight_rules
} from "../chunk-QXTEMBPD.js";
import "../chunk-VVYM7U3C.js";
import "../chunk-GLBKRGPE.js";
import "../chunk-WVZ3WZY2.js";
import "../chunk-ZYSXI253.js";
import "../chunk-BPTL7YIQ.js";
import "../chunk-MF4T7I5J.js";
import {
  require_oop
} from "../chunk-WAWTRYJW.js";
import "../chunk-CVMYQKGX.js";
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

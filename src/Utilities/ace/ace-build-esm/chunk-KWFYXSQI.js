import {
  require_text_highlight_rules
} from "./chunk-LMYBRGOM.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/doc_comment_highlight_rules.js
var require_doc_comment_highlight_rules = __commonJS({
  "src/mode/doc_comment_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var DocCommentHighlightRules = function() {
      this.$rules = {
        "start": [
          {
            token: "comment.doc.tag",
            regex: "@\\w+(?=\\s|$)"
          },
          DocCommentHighlightRules.getTagRule(),
          {
            defaultToken: "comment.doc.body",
            caseInsensitive: true
          }
        ]
      };
    };
    oop.inherits(DocCommentHighlightRules, TextHighlightRules);
    DocCommentHighlightRules.getTagRule = function(start) {
      return {
        token: "comment.doc.tag.storage.type",
        regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
      };
    };
    DocCommentHighlightRules.getStartRule = function(start) {
      return {
        token: "comment.doc",
        // doc comment
        regex: /\/\*\*(?!\/)/,
        next: start
      };
    };
    DocCommentHighlightRules.getEndRule = function(start) {
      return {
        token: "comment.doc",
        // closing comment
        regex: "\\*\\/",
        next: start
      };
    };
    exports.DocCommentHighlightRules = DocCommentHighlightRules;
  }
});

export {
  require_doc_comment_highlight_rules
};

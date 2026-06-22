import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
import "../chunk-JEWW6F7O.js";
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

// src/mode/abc_highlight_rules.js
var require_abc_highlight_rules = __commonJS({
  "src/mode/abc_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var ABCHighlightRules = function() {
      this.$rules = {
        start: [
          {
            token: ["zupfnoter.information.comment.line.percentage", "information.keyword", "in formation.keyword.embedded"],
            regex: "(%%%%)(hn\\.[a-z]*)(.*)",
            comment: "Instruction Comment"
          },
          {
            token: ["information.comment.line.percentage", "information.keyword.embedded"],
            regex: "(%%)(.*)",
            comment: "Instruction Comment"
          },
          {
            token: "comment.line.percentage",
            regex: "%.*",
            comment: "Comments"
          },
          {
            token: "barline.keyword.operator",
            regex: "[\\[:]*[|:][|\\]:]*(?:\\[?[0-9]+)?|\\[[0-9]+",
            comment: "Bar lines"
          },
          {
            token: ["information.keyword.embedded", "information.argument.string.unquoted"],
            regex: "(\\[[A-Za-z]:)([^\\]]*\\])",
            comment: "embedded Header lines"
          },
          {
            token: ["information.keyword", "information.argument.string.unquoted"],
            regex: "^([A-Za-z]:)([^%\\\\]*)",
            comment: "Header lines"
          },
          {
            token: ["text", "entity.name.function", "string.unquoted", "text"],
            regex: "(\\[)([A-Z]:)(.*?)(\\])",
            comment: "Inline fields"
          },
          {
            token: ["accent.constant.language", "pitch.constant.numeric", "duration.constant.numeric"],
            regex: "([\\^=_]*)([A-Ga-gz][,']*)([0-9]*/*[><0-9]*)",
            comment: "Notes"
          },
          {
            token: "zupfnoter.jumptarget.string.quoted",
            regex: '[\\"!]\\^\\:.*?[\\"!]',
            comment: "Zupfnoter jumptarget"
          },
          {
            token: "zupfnoter.goto.string.quoted",
            regex: '[\\"!]\\^\\@.*?[\\"!]',
            comment: "Zupfnoter goto"
          },
          {
            token: "zupfnoter.annotation.string.quoted",
            regex: '[\\"!]\\^\\!.*?[\\"!]',
            comment: "Zupfnoter annoation"
          },
          {
            token: "zupfnoter.annotationref.string.quoted",
            regex: '[\\"!]\\^\\#.*?[\\"!]',
            comment: "Zupfnoter annotation reference"
          },
          {
            token: "chordname.string.quoted",
            regex: '[\\"!]\\^.*?[\\"!]',
            comment: "abc chord"
          },
          {
            token: "string.quoted",
            regex: '[\\"!].*?[\\"!]',
            comment: "abc annotation"
          }
        ]
      };
      this.normalizeRules();
    };
    ABCHighlightRules.metaData = {
      fileTypes: ["abc"],
      name: "ABC",
      scopeName: "text.abcnotation"
    };
    oop.inherits(ABCHighlightRules, TextHighlightRules);
    exports.ABCHighlightRules = ABCHighlightRules;
  }
});

// src/mode/abc.js
var require_abc = __commonJS({
  "src/mode/abc.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var ABCHighlightRules = require_abc_highlight_rules().ABCHighlightRules;
    var FoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = ABCHighlightRules;
      this.foldingRules = new FoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "%";
      this.$id = "ace/mode/abc";
      this.snippetFileId = "ace/snippets/abc";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_abc();

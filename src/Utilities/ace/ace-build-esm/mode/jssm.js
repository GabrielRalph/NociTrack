import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
import "../chunk-JEWW6F7O.js";
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

// src/mode/jssm_highlight_rules.js
var require_jssm_highlight_rules = __commonJS({
  "src/mode/jssm_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var JSSMHighlightRules = function() {
      this.$rules = {
        start: [{
          token: "punctuation.definition.comment.mn",
          regex: /\/\*/,
          push: [{
            token: "punctuation.definition.comment.mn",
            regex: /\*\//,
            next: "pop"
          }, {
            defaultToken: "comment.block.jssm"
          }],
          comment: "block comment"
        }, {
          token: "comment.line.jssm",
          regex: /\/\//,
          push: [{
            token: "comment.line.jssm",
            regex: /$/,
            next: "pop"
          }, {
            defaultToken: "comment.line.jssm"
          }],
          comment: "block comment"
        }, {
          token: "entity.name.function",
          regex: /\${/,
          push: [{
            token: "entity.name.function",
            regex: /}/,
            next: "pop"
          }, {
            defaultToken: "keyword.other"
          }],
          comment: "js outcalls"
        }, {
          token: "constant.numeric",
          regex: /[0-9]*\.[0-9]*\.[0-9]*/,
          comment: "semver"
        }, {
          token: "constant.language.jssmLanguage",
          regex: /graph_layout\s*:/,
          comment: "jssm language tokens"
        }, {
          token: "constant.language.jssmLanguage",
          regex: /machine_name\s*:/,
          comment: "jssm language tokens"
        }, {
          token: "constant.language.jssmLanguage",
          regex: /machine_version\s*:/,
          comment: "jssm language tokens"
        }, {
          token: "constant.language.jssmLanguage",
          regex: /jssm_version\s*:/,
          comment: "jssm language tokens"
        }, {
          token: "keyword.control.transition.jssmArrow.legal_legal",
          regex: /<->/,
          comment: "transitions"
        }, {
          token: "keyword.control.transition.jssmArrow.legal_none",
          regex: /<-/,
          comment: "transitions"
        }, {
          token: "keyword.control.transition.jssmArrow.none_legal",
          regex: /->/,
          comment: "transitions"
        }, {
          token: "keyword.control.transition.jssmArrow.main_main",
          regex: /<=>/,
          comment: "transitions"
        }, {
          token: "keyword.control.transition.jssmArrow.none_main",
          regex: /=>/,
          comment: "transitions"
        }, {
          token: "keyword.control.transition.jssmArrow.main_none",
          regex: /<=/,
          comment: "transitions"
        }, {
          token: "keyword.control.transition.jssmArrow.forced_forced",
          regex: /<~>/,
          comment: "transitions"
        }, {
          token: "keyword.control.transition.jssmArrow.none_forced",
          regex: /~>/,
          comment: "transitions"
        }, {
          token: "keyword.control.transition.jssmArrow.forced_none",
          regex: /<~/,
          comment: "transitions"
        }, {
          token: "keyword.control.transition.jssmArrow.legal_main",
          regex: /<-=>/,
          comment: "transitions"
        }, {
          token: "keyword.control.transition.jssmArrow.main_legal",
          regex: /<=->/,
          comment: "transitions"
        }, {
          token: "keyword.control.transition.jssmArrow.legal_forced",
          regex: /<-~>/,
          comment: "transitions"
        }, {
          token: "keyword.control.transition.jssmArrow.forced_legal",
          regex: /<~->/,
          comment: "transitions"
        }, {
          token: "keyword.control.transition.jssmArrow.main_forced",
          regex: /<=~>/,
          comment: "transitions"
        }, {
          token: "keyword.control.transition.jssmArrow.forced_main",
          regex: /<~=>/,
          comment: "transitions"
        }, {
          token: "constant.numeric.jssmProbability",
          regex: /[0-9]+%/,
          comment: "edge probability annotation"
        }, {
          token: "constant.character.jssmAction",
          regex: /\'[^']*\'/,
          comment: "action annotation"
        }, {
          token: "entity.name.tag.jssmLabel.doublequoted",
          regex: /\"[^"]*\"/,
          comment: "jssm label annotation"
        }, {
          token: "entity.name.tag.jssmLabel.atom",
          regex: /[a-zA-Z0-9_.+&()#@!?,]/,
          comment: "jssm label annotation"
        }]
      };
      this.normalizeRules();
    };
    JSSMHighlightRules.metaData = {
      fileTypes: ["jssm", "jssm_state"],
      name: "JSSM",
      scopeName: "source.jssm"
    };
    oop.inherits(JSSMHighlightRules, TextHighlightRules);
    exports.JSSMHighlightRules = JSSMHighlightRules;
  }
});

// src/mode/jssm.js
var require_jssm = __commonJS({
  "src/mode/jssm.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var JSSMHighlightRules = require_jssm_highlight_rules().JSSMHighlightRules;
    var FoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = JSSMHighlightRules;
      this.foldingRules = new FoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.blockComment = { start: "/*", end: "*/" };
      this.$id = "ace/mode/jssm";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_jssm();

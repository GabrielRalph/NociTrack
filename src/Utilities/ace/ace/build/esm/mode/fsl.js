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

// src/mode/fsl_highlight_rules.js
var require_fsl_highlight_rules = __commonJS({
  "src/mode/fsl_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var FSLHighlightRules = function() {
      this.$rules = {
        start: [{
          token: "punctuation.definition.comment.mn",
          regex: /\/\*/,
          push: [{
            token: "punctuation.definition.comment.mn",
            regex: /\*\//,
            next: "pop"
          }, {
            defaultToken: "comment.block.fsl"
          }]
        }, {
          token: "comment.line.fsl",
          regex: /\/\//,
          push: [{
            token: "comment.line.fsl",
            regex: /$/,
            next: "pop"
          }, {
            defaultToken: "comment.line.fsl"
          }]
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
          token: "constant.language.fslLanguage",
          regex: "(?:graph_layout|machine_name|machine_author|machine_license|machine_comment|machine_language|machine_version|machine_reference|npm_name|graph_layout|on_init|on_halt|on_end|on_terminate|on_finalize|on_transition|on_action|on_stochastic_action|on_legal|on_main|on_forced|on_validation|on_validation_failure|on_transition_refused|on_forced_transition_refused|on_action_refused|on_enter|on_exit|start_states|end_states|terminal_states|final_states|fsl_version)\\s*:"
        }, {
          token: "keyword.control.transition.fslArrow",
          regex: /<->|<-|->|<=>|=>|<=|<~>|~>|<~|<-=>|<=->|<-~>|<~->|<=~>|<~=>/
        }, {
          token: "constant.numeric.fslProbability",
          regex: /[0-9]+%/,
          comment: "edge probability annotation"
        }, {
          token: "constant.character.fslAction",
          regex: /\'[^']*\'/,
          comment: "action annotation"
        }, {
          token: "string.quoted.double.fslLabel.doublequoted",
          regex: /\"[^"]*\"/,
          comment: "fsl label annotation"
        }, {
          token: "entity.name.tag.fslLabel.atom",
          regex: /[a-zA-Z0-9_.+&()#@!?,]/,
          comment: "fsl label annotation"
        }]
      };
      this.normalizeRules();
    };
    FSLHighlightRules.metaData = {
      fileTypes: ["fsl", "fsl_state"],
      name: "FSL",
      scopeName: "source.fsl"
    };
    oop.inherits(FSLHighlightRules, TextHighlightRules);
    exports.FSLHighlightRules = FSLHighlightRules;
  }
});

// src/mode/fsl.js
var require_fsl = __commonJS({
  "src/mode/fsl.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var FSLHighlightRules = require_fsl_highlight_rules().FSLHighlightRules;
    var FoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = FSLHighlightRules;
      this.foldingRules = new FoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.blockComment = { start: "/*", end: "*/" };
      this.$id = "ace/mode/fsl";
      this.snippetFileId = "ace/snippets/fsl";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_fsl();

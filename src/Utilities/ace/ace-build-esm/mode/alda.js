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

// src/mode/alda_highlight_rules.js
var require_alda_highlight_rules = __commonJS({
  "src/mode/alda_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var AldaHighlightRules = function() {
      this.$rules = {
        pitch: [{
          token: "variable.parameter.operator.pitch.alda",
          regex: /(?:[+\-]+|\=)/
        }, {
          token: "",
          regex: "",
          next: "timing"
        }],
        timing: [{
          token: "string.quoted.operator.timing.alda",
          regex: /\d+(?:s|ms)?/
        }, {
          token: "",
          regex: "",
          next: "start"
        }],
        start: [{
          token: [
            "constant.language.instrument.alda",
            "constant.language.instrument.alda",
            "meta.part.call.alda",
            "storage.type.nickname.alda",
            "meta.part.call.alda"
          ],
          regex: /^([a-zA-Z]{2}[\w\-+\'()]*)((?:\s*\/\s*[a-zA-Z]{2}[\w\-+\'()]*)*)(?:(\s*)(\"[a-zA-Z]{2}[\w\-+\'()]*\"))?(\s*:)/
        }, {
          token: [
            "text",
            "entity.other.inherited-class.voice.alda",
            "text"
          ],
          regex: /^(\s*)(V\d+)(:)/
        }, {
          token: "comment.line.number-sign.alda",
          regex: /#.*$/
        }, {
          token: "entity.name.function.pipe.measure.alda",
          regex: /\|/
        }, {
          token: "comment.block.inline.alda",
          regex: /\(comment\b/,
          push: [{
            token: "comment.block.inline.alda",
            regex: /\)/,
            next: "pop"
          }, {
            defaultToken: "comment.block.inline.alda"
          }]
        }, {
          token: "entity.name.function.marker.alda",
          regex: /%[a-zA-Z]{2}[\w\-+\'()]*/
        }, {
          token: "entity.name.function.at-marker.alda",
          regex: /@[a-zA-Z]{2}[\w\-+\'()]*/
        }, {
          token: "keyword.operator.octave-change.alda",
          regex: /\bo\d+\b/
        }, {
          token: "keyword.operator.octave-shift.alda",
          regex: /[><]/
        }, {
          token: "keyword.operator.repeat.alda",
          regex: /\*\s*\d+/
        }, {
          token: "string.quoted.operator.timing.alda",
          regex: /[.]|r\d*(?:s|ms)?/
        }, {
          token: "text",
          regex: /([cdefgab])/,
          next: "pitch"
        }, {
          token: "string.quoted.operator.timing.alda",
          regex: /~/,
          next: "timing"
        }, {
          token: "punctuation.section.embedded.cram.alda",
          regex: /\}/,
          next: "timing"
        }, {
          token: "constant.numeric.subchord.alda",
          regex: /\//
        }, {
          todo: {
            token: "punctuation.section.embedded.cram.alda",
            regex: /\{/,
            push: [{
              token: "punctuation.section.embedded.cram.alda",
              regex: /\}/,
              next: "pop"
            }, {
              include: "$self"
            }]
          }
        }, {
          todo: {
            token: "keyword.control.sequence.alda",
            regex: /\[/,
            push: [{
              token: "keyword.control.sequence.alda",
              regex: /\]/,
              next: "pop"
            }, {
              include: "$self"
            }]
          }
        }, {
          token: "meta.inline.clojure.alda",
          regex: /\(/,
          push: [{
            token: "meta.inline.clojure.alda",
            regex: /\)/,
            next: "pop"
          }, {
            include: "source.clojure"
          }, {
            defaultToken: "meta.inline.clojure.alda"
          }]
        }]
      };
      this.normalizeRules();
    };
    AldaHighlightRules.metaData = {
      scopeName: "source.alda",
      fileTypes: ["alda"],
      name: "Alda"
    };
    oop.inherits(AldaHighlightRules, TextHighlightRules);
    exports.AldaHighlightRules = AldaHighlightRules;
  }
});

// src/mode/alda.js
var require_alda = __commonJS({
  "src/mode/alda.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var AldaHighlightRules = require_alda_highlight_rules().AldaHighlightRules;
    var FoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = AldaHighlightRules;
      this.foldingRules = new FoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.$id = "ace/mode/alda";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_alda();

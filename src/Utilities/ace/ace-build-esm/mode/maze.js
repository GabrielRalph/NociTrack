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

// src/mode/maze_highlight_rules.js
var require_maze_highlight_rules = __commonJS({
  "src/mode/maze_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var MazeHighlightRules = function() {
      this.$rules = {
        start: [{
          token: "keyword.control",
          regex: /##|``/,
          comment: "Wall"
        }, {
          token: "entity.name.tag",
          regex: /\.\./,
          comment: "Path"
        }, {
          token: "keyword.control",
          regex: /<>/,
          comment: "Splitter"
        }, {
          token: "entity.name.tag",
          regex: /\*[\*A-Za-z0-9]/,
          comment: "Signal"
        }, {
          token: "constant.numeric",
          regex: /[0-9]{2}/,
          comment: "Pause"
        }, {
          token: "keyword.control",
          regex: /\^\^/,
          comment: "Start"
        }, {
          token: "keyword.control",
          regex: /\(\)/,
          comment: "Hole"
        }, {
          token: "support.function",
          regex: />>/,
          comment: "Out"
        }, {
          token: "support.function",
          regex: />\//,
          comment: "Ln Out"
        }, {
          token: "support.function",
          regex: /<</,
          comment: "In"
        }, {
          token: "keyword.control",
          regex: /--/,
          comment: "One use"
        }, {
          token: "constant.language",
          regex: /%[LRUDNlrudn]/,
          comment: "Direction"
        }, {
          token: [
            "entity.name.function",
            "keyword.other",
            "keyword.operator",
            "keyword.other",
            "keyword.operator",
            "constant.numeric",
            "keyword.operator",
            "keyword.other",
            "keyword.operator",
            "constant.numeric",
            "string.quoted.double",
            "string.quoted.single"
          ],
          regex: /([A-Za-z][A-Za-z0-9])( *-> *)(?:([-+*\/]=)( *)((?:-)?)([0-9]+)|(=)( *)(?:((?:-)?)([0-9]+)|("[^"]*")|('[^']*')))/,
          comment: "Assignment function"
        }, {
          token: [
            "entity.name.function",
            "keyword.other",
            "keyword.control",
            "keyword.other",
            "keyword.operator",
            "keyword.other",
            "keyword.operator",
            "constant.numeric",
            "entity.name.tag",
            "keyword.other",
            "keyword.control",
            "keyword.other",
            "constant.language",
            "keyword.other",
            "keyword.control",
            "keyword.other",
            "constant.language"
          ],
          regex: /([A-Za-z][A-Za-z0-9])( *-> *)(IF|if)( *)(?:([<>]=?|==)( *)((?:-)?)([0-9]+)|(\*[\*A-Za-z0-9]))( *)(THEN|then)( *)(%[LRUDNlrudn])(?:( *)(ELSE|else)( *)(%[LRUDNlrudn]))?/,
          comment: "Equality Function"
        }, {
          token: "entity.name.function",
          regex: /[A-Za-z][A-Za-z0-9]/,
          comment: "Function cell"
        }, {
          token: "comment.line.double-slash",
          regex: / *\/\/.*/,
          comment: "Comment"
        }]
      };
      this.normalizeRules();
    };
    MazeHighlightRules.metaData = {
      fileTypes: ["mz"],
      name: "Maze",
      scopeName: "source.maze"
    };
    oop.inherits(MazeHighlightRules, TextHighlightRules);
    exports.MazeHighlightRules = MazeHighlightRules;
  }
});

// src/mode/maze.js
var require_maze = __commonJS({
  "src/mode/maze.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var MazeHighlightRules = require_maze_highlight_rules().MazeHighlightRules;
    var FoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = MazeHighlightRules;
      this.foldingRules = new FoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.$id = "ace/mode/maze";
      this.snippetFileId = "ace/snippets/maze";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_maze();

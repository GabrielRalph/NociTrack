import {
  require_ini
} from "../chunk-EHUXSSGC.js";
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

// src/mode/ini_highlight_rules.js
var require_ini_highlight_rules = __commonJS({
  "src/mode/ini_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var escapeRe = "\\\\(?:[\\\\0abtrn;#=:]|x[a-fA-F\\d]{4})";
    var IniHighlightRules = function() {
      this.$rules = {
        start: [{
          token: "punctuation.definition.comment.ini",
          regex: "#.*",
          push_: [{
            token: "comment.line.number-sign.ini",
            regex: "$|^",
            next: "pop"
          }, {
            defaultToken: "comment.line.number-sign.ini"
          }]
        }, {
          token: "punctuation.definition.comment.ini",
          regex: ";.*",
          push_: [{
            token: "comment.line.semicolon.ini",
            regex: "$|^",
            next: "pop"
          }, {
            defaultToken: "comment.line.semicolon.ini"
          }]
        }, {
          token: ["keyword.other.definition.ini", "text", "punctuation.separator.key-value.ini"],
          regex: "\\b([a-zA-Z0-9_.-]+)\\b(\\s*)(=)"
        }, {
          token: ["punctuation.definition.entity.ini", "constant.section.group-title.ini", "punctuation.definition.entity.ini"],
          regex: "^(\\[)(.*?)(\\])"
        }, {
          token: "punctuation.definition.string.begin.ini",
          regex: "'",
          push: [{
            token: "punctuation.definition.string.end.ini",
            regex: "'",
            next: "pop"
          }, {
            token: "constant.language.escape",
            regex: escapeRe
          }, {
            defaultToken: "string.quoted.single.ini"
          }]
        }, {
          token: "punctuation.definition.string.begin.ini",
          regex: '"',
          push: [{
            token: "constant.language.escape",
            regex: escapeRe
          }, {
            token: "punctuation.definition.string.end.ini",
            regex: '"',
            next: "pop"
          }, {
            defaultToken: "string.quoted.double.ini"
          }]
        }]
      };
      this.normalizeRules();
    };
    IniHighlightRules.metaData = {
      fileTypes: ["ini", "conf"],
      keyEquivalent: "^~I",
      name: "Ini",
      scopeName: "source.ini"
    };
    oop.inherits(IniHighlightRules, TextHighlightRules);
    exports.IniHighlightRules = IniHighlightRules;
  }
});

// src/mode/ini.js
var require_ini2 = __commonJS({
  "src/mode/ini.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var IniHighlightRules = require_ini_highlight_rules().IniHighlightRules;
    var FoldMode = require_ini().FoldMode;
    var Mode = function() {
      this.HighlightRules = IniHighlightRules;
      this.foldingRules = new FoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = ";";
      this.blockComment = null;
      this.$id = "ace/mode/ini";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_ini2();

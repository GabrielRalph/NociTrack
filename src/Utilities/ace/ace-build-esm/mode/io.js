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

// src/mode/io_highlight_rules.js
var require_io_highlight_rules = __commonJS({
  "src/mode/io_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var IoHighlightRules = function() {
      this.$rules = { start: [
        {
          token: "keyword.control.io",
          regex: "\\b(?:if|ifTrue|ifFalse|ifTrueIfFalse|for|loop|reverseForeach|foreach|map|continue|break|while|do|return)\\b"
        },
        {
          token: "punctuation.definition.comment.io",
          regex: "/\\*",
          push: [
            {
              token: "punctuation.definition.comment.io",
              regex: "\\*/",
              next: "pop"
            },
            { defaultToken: "comment.block.io" }
          ]
        },
        {
          token: "punctuation.definition.comment.io",
          regex: "//",
          push: [
            {
              token: "comment.line.double-slash.io",
              regex: "$",
              next: "pop"
            },
            { defaultToken: "comment.line.double-slash.io" }
          ]
        },
        {
          token: "punctuation.definition.comment.io",
          regex: "#",
          push: [
            { token: "comment.line.number-sign.io", regex: "$", next: "pop" },
            { defaultToken: "comment.line.number-sign.io" }
          ]
        },
        {
          token: "variable.language.io",
          regex: "\\b(?:self|sender|target|proto|protos|parent)\\b",
          comment: "I wonder if some of this isn't variable.other.language? --Allan; scoping this as variable.language to match Objective-C's handling of 'self', which is inconsistent with C++'s handling of 'this' but perhaps intentionally so -- Rob"
        },
        {
          token: "keyword.operator.io",
          regex: "<=|>=|=|:=|\\*|\\||\\|\\||\\+|-|/|&|&&|>|<|\\?|@|@@|\\b(?:and|or)\\b"
        },
        { token: "constant.other.io", regex: "\\bGL[\\w_]+\\b" },
        { token: "support.class.io", regex: "\\b[A-Z](?:\\w+)?\\b" },
        {
          token: "support.function.io",
          regex: "\\b(?:clone|call|init|method|list|vector|block|\\w+(?=\\s*\\())\\b"
        },
        {
          token: "support.function.open-gl.io",
          regex: "\\bgl(?:u|ut)?[A-Z]\\w+\\b"
        },
        {
          token: "punctuation.definition.string.begin.io",
          regex: '"""',
          push: [
            {
              token: "punctuation.definition.string.end.io",
              regex: '"""',
              next: "pop"
            },
            { token: "constant.character.escape.io", regex: "\\\\." },
            { defaultToken: "string.quoted.triple.io" }
          ]
        },
        {
          token: "punctuation.definition.string.begin.io",
          regex: '"',
          push: [
            {
              token: "punctuation.definition.string.end.io",
              regex: '"',
              next: "pop"
            },
            { token: "constant.character.escape.io", regex: "\\\\." },
            { defaultToken: "string.quoted.double.io" }
          ]
        },
        {
          token: "constant.numeric.io",
          regex: "\\b(?:0(?:x|X)[0-9a-fA-F]*|(?:[0-9]+\\.?[0-9]*|\\.[0-9]+)(?:(?:e|E)(?:\\+|-)?[0-9]+)?)(?:L|l|UL|ul|u|U|F|f)?\\b"
        },
        { token: "variable.other.global.io", regex: "Lobby\\b" },
        {
          token: "constant.language.io",
          regex: "\\b(?:TRUE|true|FALSE|false|NULL|null|Null|Nil|nil|YES|NO)\\b"
        }
      ] };
      this.normalizeRules();
    };
    IoHighlightRules.metaData = {
      fileTypes: ["io"],
      keyEquivalent: "^~I",
      name: "Io",
      scopeName: "source.io"
    };
    oop.inherits(IoHighlightRules, TextHighlightRules);
    exports.IoHighlightRules = IoHighlightRules;
  }
});

// src/mode/io.js
var require_io = __commonJS({
  "src/mode/io.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var IoHighlightRules = require_io_highlight_rules().IoHighlightRules;
    var FoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = IoHighlightRules;
      this.foldingRules = new FoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.blockComment = { start: "/*", end: "*/" };
      this.$id = "ace/mode/io";
      this.snippetFileId = "ace/snippets/io";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_io();

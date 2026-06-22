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

// src/mode/batchfile_highlight_rules.js
var require_batchfile_highlight_rules = __commonJS({
  "src/mode/batchfile_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var BatchFileHighlightRules = function() {
      this.$rules = {
        start: [
          {
            token: "keyword.command.dosbatch",
            regex: "\\b(?:append|assoc|at|attrib|break|cacls|cd|chcp|chdir|chkdsk|chkntfs|cls|cmd|color|comp|compact|convert|copy|date|del|dir|diskcomp|diskcopy|doskey|echo|endlocal|erase|fc|find|findstr|format|ftype|graftabl|help|keyb|label|md|mkdir|mode|more|move|path|pause|popd|print|prompt|pushd|rd|recover|ren|rename|replace|restore|rmdir|set|setlocal|shift|sort|start|subst|time|title|tree|type|ver|verify|vol|xcopy)\\b",
            caseInsensitive: true
          },
          {
            token: "keyword.control.statement.dosbatch",
            regex: "\\b(?:goto|call|exit)\\b",
            caseInsensitive: true
          },
          {
            token: "keyword.control.conditional.if.dosbatch",
            regex: "\\bif\\s+not\\s+(?:exist|defined|errorlevel|cmdextversion)\\b",
            caseInsensitive: true
          },
          {
            token: "keyword.control.conditional.dosbatch",
            regex: "\\b(?:if|else)\\b",
            caseInsensitive: true
          },
          {
            token: "keyword.control.repeat.dosbatch",
            regex: "\\bfor\\b",
            caseInsensitive: true
          },
          {
            token: "keyword.operator.dosbatch",
            regex: "\\b(?:EQU|NEQ|LSS|LEQ|GTR|GEQ)\\b"
          },
          {
            token: ["doc.comment", "comment"],
            regex: "(?:^|\\b)(rem)($|\\s.*$)",
            caseInsensitive: true
          },
          {
            token: "comment.line.colons.dosbatch",
            regex: "::.*$"
          },
          { include: "variable" },
          {
            token: "punctuation.definition.string.begin.shell",
            regex: '"',
            push: [
              { token: "punctuation.definition.string.end.shell", regex: '"', next: "pop" },
              { include: "variable" },
              { defaultToken: "string.quoted.double.dosbatch" }
            ]
          },
          { token: "keyword.operator.pipe.dosbatch", regex: "[|]" },
          {
            token: "keyword.operator.redirect.shell",
            regex: "&>|\\d*>&\\d*|\\d*(?:>>|>|<)|\\d*<&|\\d*<>"
          }
        ],
        variable: [
          { token: "constant.numeric", regex: "%%\\w+|%[*\\d]|%\\w+%" },
          { token: "constant.numeric", regex: "%~\\d+" },
          {
            token: ["markup.list", "constant.other", "markup.list"],
            regex: "(%)(\\w+)(%?)"
          }
        ]
      };
      this.normalizeRules();
    };
    BatchFileHighlightRules.metaData = {
      name: "Batch File",
      scopeName: "source.dosbatch",
      fileTypes: ["bat"]
    };
    oop.inherits(BatchFileHighlightRules, TextHighlightRules);
    exports.BatchFileHighlightRules = BatchFileHighlightRules;
  }
});

// src/mode/batchfile.js
var require_batchfile = __commonJS({
  "src/mode/batchfile.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var BatchFileHighlightRules = require_batchfile_highlight_rules().BatchFileHighlightRules;
    var FoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = BatchFileHighlightRules;
      this.foldingRules = new FoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "::";
      this.blockComment = "";
      this.$id = "ace/mode/batchfile";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_batchfile();

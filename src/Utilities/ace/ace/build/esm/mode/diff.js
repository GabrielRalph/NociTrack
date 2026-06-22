import {
  require_fold_mode
} from "../chunk-JEWW6F7O.js";
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
import {
  require_range
} from "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/diff_highlight_rules.js
var require_diff_highlight_rules = __commonJS({
  "src/mode/diff_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var DiffHighlightRules = function() {
      this.$rules = {
        "start": [
          {
            regex: "^(?:\\*{15}|={67}|-{3}|\\+{3})$",
            token: "punctuation.definition.separator.diff",
            "name": "keyword"
          },
          {
            //diff.range.unified
            regex: "^(@@)(\\s*.+?\\s*)(@@)(.*)$",
            token: [
              "constant",
              "constant.numeric",
              "constant",
              "comment.doc.tag"
            ]
          },
          {
            //diff.range.normal
            regex: "^(\\d+)([,\\d]+)(a|d|c)(\\d+)([,\\d]+)(.*)$",
            token: [
              "constant.numeric",
              "punctuation.definition.range.diff",
              "constant.function",
              "constant.numeric",
              "punctuation.definition.range.diff",
              "invalid"
            ],
            "name": "meta."
          },
          {
            regex: "^(\\-{3}|\\+{3}|\\*{3})( .+)$",
            token: [
              "constant.numeric",
              "meta.tag"
            ]
          },
          {
            // added
            regex: "^([!+>])(.*?)(\\s*)$",
            token: [
              "support.constant",
              "text",
              "invalid"
            ]
          },
          {
            // removed
            regex: "^([<\\-])(.*?)(\\s*)$",
            token: [
              "support.function",
              "string",
              "invalid"
            ]
          },
          {
            regex: "^(diff)(\\s+--\\w+)?(.+?)( .+)?$",
            token: ["variable", "variable", "keyword", "variable"]
          },
          {
            regex: "^Index.+$",
            token: "variable"
          },
          {
            regex: "^\\s+$",
            token: "text"
          },
          {
            regex: "\\s*$",
            token: "invalid"
          },
          {
            defaultToken: "invisible",
            caseInsensitive: true
          }
        ]
      };
    };
    oop.inherits(DiffHighlightRules, TextHighlightRules);
    exports.DiffHighlightRules = DiffHighlightRules;
  }
});

// src/mode/folding/diff.js
var require_diff = __commonJS({
  "src/mode/folding/diff.js"(exports) {
    "use strict";
    var oop = require_oop();
    var BaseFoldMode = require_fold_mode().FoldMode;
    var Range = require_range().Range;
    var FoldMode = exports.FoldMode = function(levels, flag) {
      this.regExpList = levels;
      this.flag = flag;
      this.foldingStartMarker = RegExp("^(" + levels.join("|") + ")", this.flag);
    };
    oop.inherits(FoldMode, BaseFoldMode);
    (function() {
      this.getFoldWidgetRange = function(session, foldStyle, row) {
        var line = session.getLine(row);
        var start = { row, column: line.length };
        var regList = this.regExpList;
        for (var i = 1; i <= regList.length; i++) {
          var re = RegExp("^(" + regList.slice(0, i).join("|") + ")", this.flag);
          if (re.test(line))
            break;
        }
        for (var l = session.getLength(); ++row < l; ) {
          line = session.getLine(row);
          if (re.test(line))
            break;
        }
        if (row == start.row + 1)
          return;
        return new Range(start.row, start.column, row - 1, line.length);
      };
    }).call(FoldMode.prototype);
  }
});

// src/mode/diff.js
var require_diff2 = __commonJS({
  "src/mode/diff.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var HighlightRules = require_diff_highlight_rules().DiffHighlightRules;
    var FoldMode = require_diff().FoldMode;
    var Mode = function() {
      this.HighlightRules = HighlightRules;
      this.foldingRules = new FoldMode(["diff", "@@|\\*{5}"], "i");
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.$id = "ace/mode/diff";
      this.snippetFileId = "ace/snippets/diff";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_diff2();

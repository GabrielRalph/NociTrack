import {
  require_html2 as require_html
} from "../chunk-2RIJSYM2.js";
import "../chunk-O7XPGT62.js";
import "../chunk-WK3XC3NH.js";
import "../chunk-U2RKG7VZ.js";
import "../chunk-QKY627QG.js";
import "../chunk-QMZLOC5Q.js";
import "../chunk-YNHGF363.js";
import {
  require_html_highlight_rules
} from "../chunk-QUH7KENW.js";
import "../chunk-CYWDEW5M.js";
import "../chunk-IWXN4N2Q.js";
import "../chunk-6CORPKBO.js";
import "../chunk-5GQPFTLG.js";
import "../chunk-67VAGNRS.js";
import "../chunk-5O3J7W3G.js";
import {
  require_fold_mode
} from "../chunk-JEWW6F7O.js";
import {
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
import {
  require_lang
} from "../chunk-NNGFYYI3.js";
import "../chunk-3SNEZHBJ.js";
import {
  require_range
} from "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/velocity_highlight_rules.js
var require_velocity_highlight_rules = __commonJS({
  "src/mode/velocity_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var lang = require_lang();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    var VelocityHighlightRules = function() {
      HtmlHighlightRules.call(this);
      var builtinConstants = lang.arrayToMap(
        "true|false|null".split("|")
      );
      var builtinFunctions = lang.arrayToMap(
        "_DateTool|_DisplayTool|_EscapeTool|_FieldTool|_MathTool|_NumberTool|_SerializerTool|_SortTool|_StringTool|_XPathTool".split("|")
      );
      var builtinVariables = lang.arrayToMap(
        "$contentRoot|$foreach".split("|")
      );
      var keywords = lang.arrayToMap(
        "#set|#macro|#include|#parse|#if|#elseif|#else|#foreach|#break|#end|#stop".split("|")
      );
      this.$rules.start.push(
        {
          token: "comment",
          regex: "##.*$"
        },
        {
          token: "comment.block",
          // multi line comment
          regex: "#\\*",
          next: "vm_comment"
        },
        {
          token: "string.regexp",
          regex: "[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"
        },
        {
          token: "string",
          // single line
          regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
        },
        {
          token: "string",
          // single line
          regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
        },
        {
          token: "constant.numeric",
          // hex
          regex: "0[xX][0-9a-fA-F]+\\b"
        },
        {
          token: "constant.numeric",
          // float
          regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
        },
        {
          token: "constant.language.boolean",
          regex: "(?:true|false)\\b"
        },
        {
          token: function(value) {
            if (keywords.hasOwnProperty(value))
              return "keyword";
            else if (builtinConstants.hasOwnProperty(value))
              return "constant.language";
            else if (builtinVariables.hasOwnProperty(value))
              return "variable.language";
            else if (builtinFunctions.hasOwnProperty(value) || builtinFunctions.hasOwnProperty(value.substring(1)))
              return "support.function";
            else if (value == "debugger")
              return "invalid.deprecated";
            else if (value.match(/^(\$[a-zA-Z_][a-zA-Z0-9_]*)$/))
              return "variable";
            return "identifier";
          },
          // TODO: Unicode escape sequences
          // TODO: Unicode identifiers
          regex: "[a-zA-Z$#][a-zA-Z0-9_]*\\b"
        },
        {
          token: "keyword.operator",
          regex: "!|&|\\*|\\-|\\+|=|!=|<=|>=|<|>|&&|\\|\\|"
        },
        {
          token: "lparen",
          regex: "[[({]"
        },
        {
          token: "rparen",
          regex: "[\\])}]"
        },
        {
          token: "text",
          regex: "\\s+"
        }
      );
      this.$rules["vm_comment"] = [
        {
          token: "comment",
          // closing comment
          regex: "\\*#|-->",
          next: "start"
        },
        {
          defaultToken: "comment"
        }
      ];
      this.$rules["vm_start"] = [
        {
          token: "variable",
          regex: "}",
          next: "pop"
        },
        {
          token: "string.regexp",
          regex: "[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"
        },
        {
          token: "string",
          // single line
          regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
        },
        {
          token: "string",
          // single line
          regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
        },
        {
          token: "constant.numeric",
          // hex
          regex: "0[xX][0-9a-fA-F]+\\b"
        },
        {
          token: "constant.numeric",
          // float
          regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
        },
        {
          token: "constant.language.boolean",
          regex: "(?:true|false)\\b"
        },
        {
          token: function(value) {
            if (keywords.hasOwnProperty(value))
              return "keyword";
            else if (builtinConstants.hasOwnProperty(value))
              return "constant.language";
            else if (builtinVariables.hasOwnProperty(value))
              return "variable.language";
            else if (builtinFunctions.hasOwnProperty(value) || builtinFunctions.hasOwnProperty(value.substring(1)))
              return "support.function";
            else if (value == "debugger")
              return "invalid.deprecated";
            else if (value.match(/^(\$[a-zA-Z_$][a-zA-Z0-9_]*)$/))
              return "variable";
            return "identifier";
          },
          // TODO: Unicode escape sequences
          // TODO: Unicode identifiers
          regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        },
        {
          token: "keyword.operator",
          regex: "!|&|\\*|\\-|\\+|=|!=|<=|>=|<|>|&&|\\|\\|"
        },
        {
          token: "lparen",
          regex: "[[({]"
        },
        {
          token: "rparen",
          regex: "[\\])}]"
        },
        {
          token: "text",
          regex: "\\s+"
        }
      ];
      for (var i in this.$rules) {
        this.$rules[i].unshift({
          token: "variable",
          regex: "\\${",
          push: "vm_start"
        });
      }
      this.normalizeRules();
    };
    oop.inherits(VelocityHighlightRules, TextHighlightRules);
    exports.VelocityHighlightRules = VelocityHighlightRules;
  }
});

// src/mode/folding/velocity.js
var require_velocity = __commonJS({
  "src/mode/folding/velocity.js"(exports) {
    "use strict";
    var oop = require_oop();
    var BaseFoldMode = require_fold_mode().FoldMode;
    var Range = require_range().Range;
    var FoldMode = exports.FoldMode = function() {
    };
    oop.inherits(FoldMode, BaseFoldMode);
    (function() {
      this.getFoldWidgetRange = function(session, foldStyle, row) {
        var range = this.indentationBlock(session, row);
        if (range)
          return range;
        var re = /\S/;
        var line = session.getLine(row);
        var startLevel = line.search(re);
        if (startLevel == -1 || line[startLevel] != "##")
          return;
        var startColumn = line.length;
        var maxRow = session.getLength();
        var startRow = row;
        var endRow = row;
        while (++row < maxRow) {
          line = session.getLine(row);
          var level = line.search(re);
          if (level == -1)
            continue;
          if (line[level] != "##")
            break;
          endRow = row;
        }
        if (endRow > startRow) {
          var endColumn = session.getLine(endRow).length;
          return new Range(startRow, startColumn, endRow, endColumn);
        }
      };
      this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
        var indent = line.search(/\S/);
        var next = session.getLine(row + 1);
        var prev = session.getLine(row - 1);
        var prevIndent = prev.search(/\S/);
        var nextIndent = next.search(/\S/);
        if (indent == -1) {
          session.foldWidgets[row - 1] = prevIndent != -1 && prevIndent < nextIndent ? "start" : "";
          return "";
        }
        if (prevIndent == -1) {
          if (indent == nextIndent && line[indent] == "##" && next[indent] == "##") {
            session.foldWidgets[row - 1] = "";
            session.foldWidgets[row + 1] = "";
            return "start";
          }
        } else if (prevIndent == indent && line[indent] == "##" && prev[indent] == "##") {
          if (session.getLine(row - 2).search(/\S/) == -1) {
            session.foldWidgets[row - 1] = "start";
            session.foldWidgets[row + 1] = "";
            return "";
          }
        }
        if (prevIndent != -1 && prevIndent < indent)
          session.foldWidgets[row - 1] = "start";
        else
          session.foldWidgets[row - 1] = "";
        if (indent < nextIndent)
          return "start";
        else
          return "";
      };
    }).call(FoldMode.prototype);
  }
});

// src/mode/velocity.js
var require_velocity2 = __commonJS({
  "src/mode/velocity.js"(exports) {
    var oop = require_oop();
    var HtmlMode = require_html().Mode;
    var VelocityHighlightRules = require_velocity_highlight_rules().VelocityHighlightRules;
    var FoldMode = require_velocity().FoldMode;
    var Mode = function() {
      HtmlMode.call(this);
      this.HighlightRules = VelocityHighlightRules;
      this.foldingRules = new FoldMode();
    };
    oop.inherits(Mode, HtmlMode);
    (function() {
      this.lineCommentStart = "##";
      this.blockComment = { start: "#*", end: "*#" };
      this.$id = "ace/mode/velocity";
      this.snippetFileId = "ace/snippets/velocity";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_velocity2();

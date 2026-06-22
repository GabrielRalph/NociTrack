import {
  require_xml
} from "./chunk-AUMNEEOP.js";
import {
  require_markdown_highlight_rules
} from "./chunk-FFLEYC7K.js";
import {
  require_sh
} from "./chunk-LPXLUTKN.js";
import {
  require_html2 as require_html
} from "./chunk-2RIJSYM2.js";
import {
  require_javascript3 as require_javascript
} from "./chunk-WK3XC3NH.js";
import {
  require_css
} from "./chunk-QKY627QG.js";
import {
  require_fold_mode
} from "./chunk-JEWW6F7O.js";
import {
  require_cstyle,
  require_text
} from "./chunk-LMYBRGOM.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  require_range
} from "./chunk-VZTAWSAA.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/folding/markdown.js
var require_markdown = __commonJS({
  "src/mode/folding/markdown.js"(exports) {
    "use strict";
    var oop = require_oop();
    var BaseFoldMode = require_fold_mode().FoldMode;
    var Range = require_range().Range;
    var FoldMode = exports.FoldMode = function() {
    };
    oop.inherits(FoldMode, BaseFoldMode);
    (function() {
      this.foldingStartMarker = /^(?:[=-]+\s*$|#{1,6} |`{3})/;
      this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
        if (!this.foldingStartMarker.test(line))
          return "";
        if (line[0] == "`") {
          if (session.bgTokenizer.getState(row) == "start")
            return "end";
          return "start";
        }
        return "start";
      };
      this.getFoldWidgetRange = function(session, foldStyle, row) {
        var line = session.getLine(row);
        var startColumn = line.length;
        var maxRow = session.getLength();
        var startRow = row;
        var endRow = row;
        if (!line.match(this.foldingStartMarker))
          return;
        if (line[0] == "`") {
          if (session.bgTokenizer.getState(row) !== "start") {
            while (++row < maxRow) {
              line = session.getLine(row);
              if (line[0] == "`" & line.substring(0, 3) == "```")
                break;
            }
            return new Range(startRow, startColumn, row, 0);
          } else {
            while (row-- > 0) {
              line = session.getLine(row);
              if (line[0] == "`" & line.substring(0, 3) == "```")
                break;
            }
            return new Range(row, line.length, startRow, 0);
          }
        }
        var token;
        function isHeading(row2) {
          token = session.getTokens(row2)[0];
          return token && token.type.lastIndexOf(heading, 0) === 0;
        }
        var heading = "markup.heading";
        function getLevel() {
          var ch = token.value[0];
          if (ch == "=") return 6;
          if (ch == "-") return 5;
          return 7 - token.value.search(/[^#]|$/);
        }
        if (isHeading(row)) {
          var startHeadingLevel = getLevel();
          while (++row < maxRow) {
            if (!isHeading(row))
              continue;
            var level = getLevel();
            if (level >= startHeadingLevel)
              break;
          }
          endRow = row - (!token || ["=", "-"].indexOf(token.value[0]) == -1 ? 1 : 2);
          if (endRow > startRow) {
            while (endRow > startRow && /^\s*$/.test(session.getLine(endRow)))
              endRow--;
          }
          if (endRow > startRow) {
            var endColumn = session.getLine(endRow).length;
            return new Range(startRow, startColumn, endRow, endColumn);
          }
        }
      };
    }).call(FoldMode.prototype);
  }
});

// src/mode/markdown.js
var require_markdown2 = __commonJS({
  "src/mode/markdown.js"(exports) {
    var oop = require_oop();
    var CstyleBehaviour = require_cstyle().CstyleBehaviour;
    var TextMode = require_text().Mode;
    var MarkdownHighlightRules = require_markdown_highlight_rules().MarkdownHighlightRules;
    var MarkdownFoldMode = require_markdown().FoldMode;
    var Mode = function() {
      this.HighlightRules = MarkdownHighlightRules;
      this.createModeDelegates({
        javascript: require_javascript().Mode,
        html: require_html().Mode,
        bash: require_sh().Mode,
        sh: require_sh().Mode,
        xml: require_xml().Mode,
        css: require_css().Mode
      });
      this.foldingRules = new MarkdownFoldMode();
      this.$behaviour = new CstyleBehaviour({ braces: true });
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.type = "text";
      this.blockComment = { start: "<!--", end: "-->" };
      this.$quotes = { '"': '"', "`": "`" };
      this.getNextLineIndent = function(state, line, tab) {
        if (state == "listblock") {
          var match = /^(\s*)(?:([-+*])|(\d+)\.)(\s+)/.exec(line);
          if (!match)
            return "";
          var marker = match[2];
          if (!marker)
            marker = parseInt(match[3], 10) + 1 + ".";
          return match[1] + marker + match[4];
        } else {
          return this.$getIndent(line);
        }
      };
      this.$id = "ace/mode/markdown";
      this.snippetFileId = "ace/snippets/markdown";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});

export {
  require_markdown2 as require_markdown
};

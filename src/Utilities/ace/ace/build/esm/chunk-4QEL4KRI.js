import {
  require_text,
  require_text_highlight_rules
} from "./chunk-QXTEMBPD.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  require_lang
} from "./chunk-NNGFYYI3.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/csv_highlight_rules.js
var require_csv_highlight_rules = __commonJS({
  "src/mode/csv_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var CsvHighlightRules = function() {
      TextHighlightRules.call(this);
    };
    oop.inherits(CsvHighlightRules, TextHighlightRules);
    exports.CsvHighlightRules = CsvHighlightRules;
  }
});

// src/mode/csv.js
var require_csv = __commonJS({
  "src/mode/csv.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var escapeRegExp = require_lang().escapeRegExp;
    var CsvHighlightRules = require_csv_highlight_rules().CsvHighlightRules;
    var Mode = function(options) {
      this.HighlightRules = CsvHighlightRules;
      if (!options) options = {};
      var separatorRegex = [options.splitter || ",", options.quote || '"'].map(escapeRegExp).join("|");
      this.$tokenizer = {
        getLineTokens: function(line, state, row) {
          return tokenizeCsv(line, state, this.options);
        },
        options: {
          quotes: options.quote || '"',
          separatorRegex: new RegExp("(" + separatorRegex + ")"),
          spliter: options.splitter || ","
        },
        states: {}
      };
      this.$highlightRules = new this.HighlightRules();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.getTokenizer = function() {
        return this.$tokenizer;
      };
      this.$id = "ace/mode/csv";
    }).call(Mode.prototype);
    exports.Mode = Mode;
    var classNames = ["keyword", "text", "string", "string.regex", "variable", "constant.numeric"];
    function tokenizeCsv(line, state, options) {
      var result = [];
      var parts = line.split(options.separatorRegex);
      var spliter = options.spliter;
      var quote = options.quote || '"';
      var stateParts = (state || "start").split("-");
      var column = parseInt(stateParts[1]) || 0;
      var inString = stateParts[0] == "string";
      var atColumnStart = !inString;
      for (var i = 0; i < parts.length; i++) {
        var value = parts[i];
        if (value) {
          var isSeparator = false;
          if (value == spliter && !inString) {
            column++;
            atColumnStart = true;
            isSeparator = true;
          } else if (value == quote) {
            if (atColumnStart) {
              inString = true;
              atColumnStart = false;
            } else if (inString) {
              if (parts[i + 1] == "" && parts[i + 2] == quote) {
                value = quote + quote;
                i += 2;
              } else {
                inString = false;
              }
            }
          } else {
            atColumnStart = false;
          }
          result.push(
            {
              value,
              type: classNames[column % classNames.length] + ".csv_" + column + (isSeparator ? ".csv_separator" : "")
            }
          );
        }
      }
      return { tokens: result, state: inString ? "string-" + column : "start" };
    }
  }
});

export {
  require_csv
};

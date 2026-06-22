import {
  require_sql
} from "../chunk-GEGWNING.js";
import "../chunk-67VAGNRS.js";
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

// src/mode/sql_highlight_rules.js
var require_sql_highlight_rules = __commonJS({
  "src/mode/sql_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var SqlHighlightRules = function() {
      var keywords = "select|insert|update|delete|from|where|and|or|group|by|order|limit|offset|having|as|case|when|then|else|end|type|left|right|join|on|outer|desc|asc|union|create|table|primary|key|if|foreign|not|references|default|null|inner|cross|natural|database|drop|grant|distinct|is|in|all|alter|any|array|at|authorization|between|both|cast|check|collate|column|commit|constraint|cube|current|current_date|current_time|current_timestamp|current_user|describe|escape|except|exists|external|extract|fetch|filter|for|full|function|global|grouping|intersect|interval|into|leading|like|local|no|of|only|out|overlaps|partition|position|range|revoke|rollback|rollup|row|rows|session_user|set|some|start|tablesample|time|to|trailing|truncate|unique|unknown|user|using|values|window|with";
      var builtinConstants = "true|false";
      var builtinFunctions = "avg|count|first|last|max|min|sum|ucase|lcase|mid|len|round|rank|now|format|coalesce|ifnull|isnull|nvl";
      var dataTypes = "int|numeric|decimal|date|varchar|char|bigint|float|double|bit|binary|text|set|timestamp|money|real|number|integer|string";
      var keywordMapper = this.createKeywordMapper({
        "support.function": builtinFunctions,
        "keyword": keywords,
        "constant.language": builtinConstants,
        "storage.type": dataTypes
      }, "identifier", true);
      this.$rules = {
        "start": [{
          token: "comment",
          regex: "--.*$"
        }, {
          token: "comment",
          start: "/\\*",
          end: "\\*/"
        }, {
          token: "string",
          // " string
          regex: '".*?"'
        }, {
          token: "string",
          // ' string
          regex: "'.*?'"
        }, {
          token: "string",
          // ` string (apache drill)
          regex: "`.*?`"
        }, {
          token: "constant.numeric",
          // float
          regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
        }, {
          token: keywordMapper,
          regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        }, {
          token: "keyword.operator",
          regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
        }, {
          token: "paren.lparen",
          regex: "[\\(]"
        }, {
          token: "paren.rparen",
          regex: "[\\)]"
        }, {
          token: "text",
          regex: "\\s+"
        }]
      };
      this.normalizeRules();
    };
    oop.inherits(SqlHighlightRules, TextHighlightRules);
    exports.SqlHighlightRules = SqlHighlightRules;
  }
});

// src/mode/sql.js
var require_sql2 = __commonJS({
  "src/mode/sql.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var SqlHighlightRules = require_sql_highlight_rules().SqlHighlightRules;
    var SqlFoldMode = require_sql().FoldMode;
    var Mode = function() {
      this.HighlightRules = SqlHighlightRules;
      this.foldingRules = new SqlFoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "--";
      this.blockComment = { start: "/*", end: "*/" };
      this.$id = "ace/mode/sql";
      this.snippetFileId = "ace/snippets/sql";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_sql2();

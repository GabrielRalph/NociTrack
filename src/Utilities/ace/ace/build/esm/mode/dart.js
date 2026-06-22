import {
  require_c_cpp
} from "../chunk-7XOPRG3C.js";
import "../chunk-5U6N3BKW.js";
import "../chunk-5GQPFTLG.js";
import {
  require_doc_comment_highlight_rules
} from "../chunk-XTXP6FMQ.js";
import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
import "../chunk-JEWW6F7O.js";
import {
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

// src/mode/dart_highlight_rules.js
var require_dart_highlight_rules = __commonJS({
  "src/mode/dart_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var DocCommentHighlightRules = require_doc_comment_highlight_rules().DocCommentHighlightRules;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var DartHighlightRules = function() {
      var constantLanguage = "true|false|null";
      var variableLanguage = "this|super";
      var keywordControl = "try|catch|finally|throw|rethrow|assert|break|case|continue|default|do|else|for|if|in|return|switch|while|new|deferred|async|await";
      var keywordDeclaration = "abstract|class|extends|external|factory|implements|get|native|operator|set|typedef|with|enum";
      var storageModifier = "static|final|const";
      var storageType = "void|bool|num|int|double|dynamic|var|String";
      var keywordMapper = this.createKeywordMapper({
        "constant.language.dart": constantLanguage,
        "variable.language.dart": variableLanguage,
        "keyword.control.dart": keywordControl,
        "keyword.declaration.dart": keywordDeclaration,
        "storage.modifier.dart": storageModifier,
        "storage.type.primitive.dart": storageType
      }, "identifier");
      var stringfill = [{
        token: "constant.language.escape",
        regex: /\\./
      }, {
        token: "text",
        regex: /\$(?:\w+|{[^"'}]+})?/
      }, {
        defaultToken: "string"
      }];
      this.$rules = {
        "start": [
          {
            token: "comment",
            regex: /\/\/.*$/
          },
          DocCommentHighlightRules.getStartRule("doc-start"),
          {
            token: "comment",
            // multi line comment
            regex: /\/\*/,
            next: "comment"
          },
          {
            token: ["meta.preprocessor.script.dart"],
            regex: "^(#!.*)$"
          },
          {
            token: "keyword.other.import.dart",
            regex: "(?:\\b)(?:library|import|export|part|of|show|hide)(?:\\b)"
          },
          {
            token: ["keyword.other.import.dart", "text"],
            regex: "(?:\\b)(prefix)(\\s*:)"
          },
          {
            regex: "\\bas\\b",
            token: "keyword.cast.dart"
          },
          {
            regex: "\\?|:",
            token: "keyword.control.ternary.dart"
          },
          {
            regex: "(?:\\b)(is\\!?)(?:\\b)",
            token: ["keyword.operator.dart"]
          },
          {
            regex: "(<<|>>>?|~|\\^|\\||&)",
            token: ["keyword.operator.bitwise.dart"]
          },
          {
            regex: "((?:&|\\^|\\||<<|>>>?)=)",
            token: ["keyword.operator.assignment.bitwise.dart"]
          },
          {
            regex: "(===?|!==?|<=?|>=?)",
            token: ["keyword.operator.comparison.dart"]
          },
          {
            regex: "((?:[+*/%-]|\\~)=)",
            token: ["keyword.operator.assignment.arithmetic.dart"]
          },
          {
            regex: "=",
            token: "keyword.operator.assignment.dart"
          },
          {
            token: "string",
            regex: "'''",
            next: "qdoc"
          },
          {
            token: "string",
            regex: '"""',
            next: "qqdoc"
          },
          {
            token: "string",
            regex: "'",
            next: "qstring"
          },
          {
            token: "string",
            regex: '"',
            next: "qqstring"
          },
          {
            regex: "(\\-\\-|\\+\\+)",
            token: ["keyword.operator.increment-decrement.dart"]
          },
          {
            regex: "(\\-|\\+|\\*|\\/|\\~\\/|%)",
            token: ["keyword.operator.arithmetic.dart"]
          },
          {
            regex: "(!|&&|\\|\\|)",
            token: ["keyword.operator.logical.dart"]
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
            token: keywordMapper,
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
          }
        ],
        "comment": [
          {
            token: "comment",
            // closing comment
            regex: "\\*\\/",
            next: "start"
          },
          {
            defaultToken: "comment"
          }
        ],
        "qdoc": [
          {
            token: "string",
            regex: "'''",
            next: "start"
          }
        ].concat(stringfill),
        "qqdoc": [
          {
            token: "string",
            regex: '"""',
            next: "start"
          }
        ].concat(stringfill),
        "qstring": [
          {
            token: "string",
            regex: "'|$",
            next: "start"
          }
        ].concat(stringfill),
        "qqstring": [
          {
            token: "string",
            regex: '"|$',
            next: "start"
          }
        ].concat(stringfill)
        // TODO add support for interpolation and raw strings
      };
      this.embedRules(
        DocCommentHighlightRules,
        "doc-",
        [DocCommentHighlightRules.getEndRule("start")]
      );
    };
    oop.inherits(DartHighlightRules, TextHighlightRules);
    exports.DartHighlightRules = DartHighlightRules;
  }
});

// src/mode/dart.js
var require_dart = __commonJS({
  "src/mode/dart.js"(exports) {
    var oop = require_oop();
    var CMode = require_c_cpp().Mode;
    var DartHighlightRules = require_dart_highlight_rules().DartHighlightRules;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      CMode.call(this);
      this.HighlightRules = DartHighlightRules;
      this.foldingRules = new CStyleFoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, CMode);
    (function() {
      this.lineCommentStart = "//";
      this.blockComment = { start: "/*", end: "*/" };
      this.$id = "ace/mode/dart";
      this.snippetFileId = "ace/snippets/dart";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_dart();

import {
  require_java_highlight_rules
} from "../chunk-XGFHPVIP.js";
import {
  require_doc_comment_highlight_rules
} from "../chunk-KWFYXSQI.js";
import {
  require_fold_mode
} from "../chunk-JEWW6F7O.js";
import {
  require_text,
  require_text_highlight_rules
} from "../chunk-LMYBRGOM.js";
import "../chunk-VVYM7U3C.js";
import {
  require_token_iterator
} from "../chunk-GLBKRGPE.js";
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
import {
  require_range
} from "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/drools_highlight_rules.js
var require_drools_highlight_rules = __commonJS({
  "src/mode/drools_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var JavaHighlightRules = require_java_highlight_rules().JavaHighlightRules;
    var DocCommentHighlightRules = require_doc_comment_highlight_rules().DocCommentHighlightRules;
    var identifierRe = "[a-zA-Z\\$_\xA1-\uFFFF][a-zA-Z\\d\\$_\xA1-\uFFFF]*";
    var packageIdentifierRe = "[a-zA-Z\\$_\xA1-\uFFFF][\\.a-zA-Z\\d\\$_\xA1-\uFFFF]*";
    var DroolsHighlightRules = function() {
      var keywords = "date|effective|expires|lock|on|active|no|loop|auto|focus|activation|group|agenda|ruleflow|duration|timer|calendars|refract|direct|dialect|salience|enabled|attributes|extends|template|function|contains|matches|eval|excludes|soundslike|memberof|not|in|or|and|exists|forall|over|from|entry|point|accumulate|acc|collect|action|reverse|result|end|init|instanceof|extends|super|boolean|char|byte|short|int|long|float|double|this|void|class|new|case|final|if|else|for|while|do|default|try|catch|finally|switch|synchronized|return|throw|break|continue|assert|modify|static|public|protected|private|abstract|native|transient|volatile|strictfp|throws|interface|enum|implements|type|window|trait|no-loop|str";
      var langClasses = "AbstractMethodError|AssertionError|ClassCircularityError|ClassFormatError|Deprecated|EnumConstantNotPresentException|ExceptionInInitializerError|IllegalAccessError|IllegalThreadStateException|InstantiationError|InternalError|NegativeArraySizeException|NoSuchFieldError|Override|Process|ProcessBuilder|SecurityManager|StringIndexOutOfBoundsException|SuppressWarnings|TypeNotPresentException|UnknownError|UnsatisfiedLinkError|UnsupportedClassVersionError|VerifyError|InstantiationException|IndexOutOfBoundsException|ArrayIndexOutOfBoundsException|CloneNotSupportedException|NoSuchFieldException|IllegalArgumentException|NumberFormatException|SecurityException|Void|InheritableThreadLocal|IllegalStateException|InterruptedException|NoSuchMethodException|IllegalAccessException|UnsupportedOperationException|Enum|StrictMath|Package|Compiler|Readable|Runtime|StringBuilder|Math|IncompatibleClassChangeError|NoSuchMethodError|ThreadLocal|RuntimePermission|ArithmeticException|NullPointerException|Long|Integer|Short|Byte|Double|Number|Float|Character|Boolean|StackTraceElement|Appendable|StringBuffer|Iterable|ThreadGroup|Runnable|Thread|IllegalMonitorStateException|StackOverflowError|OutOfMemoryError|VirtualMachineError|ArrayStoreException|ClassCastException|LinkageError|NoClassDefFoundError|ClassNotFoundException|RuntimeException|Exception|ThreadDeath|Error|Throwable|System|ClassLoader|Cloneable|Class|CharSequence|Comparable|String|Object";
      var keywordMapper = this.createKeywordMapper({
        "variable.language": "this",
        "keyword": keywords,
        "constant.language": "null",
        "support.class": langClasses,
        "support.function": "retract|update|modify|insert"
      }, "identifier");
      var stringRules = function() {
        return [{
          token: "string",
          // single line
          regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
        }, {
          token: "string",
          // single line
          regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
        }];
      };
      var basicPreRules = function(blockCommentRules2) {
        return [
          {
            token: "comment",
            regex: "\\/\\/.*$"
          },
          DocCommentHighlightRules.getStartRule("doc-start"),
          {
            token: "comment",
            // multi line comment
            regex: "\\/\\*",
            next: blockCommentRules2
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
          }
        ];
      };
      var blockCommentRules = function(returnRule) {
        return [
          {
            token: "comment.block",
            // closing comment
            regex: "\\*\\/",
            next: returnRule
          },
          {
            defaultToken: "comment.block"
          }
        ];
      };
      var basicPostRules = function() {
        return [{
          token: keywordMapper,
          // TODO: Unicode escape sequences
          // TODO: Unicode identifiers
          regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        }, {
          token: "keyword.operator",
          regex: "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"
        }, {
          token: "lparen",
          regex: "[[({]"
        }, {
          token: "rparen",
          regex: "[\\])}]"
        }, {
          token: "text",
          regex: "\\s+"
        }];
      };
      this.$rules = {
        "start": [].concat(
          basicPreRules("block.comment"),
          [
            {
              token: "entity.name.type",
              regex: "@[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            },
            {
              // package com.example
              token: ["keyword", "text", "entity.name.type"],
              regex: "(package)(\\s+)(" + packageIdentifierRe + ")"
            },
            {
              // import function com.Util.staticMethod
              token: ["keyword", "text", "keyword", "text", "entity.name.type"],
              regex: "(import)(\\s+)(function)(\\s+)(" + packageIdentifierRe + ")"
            },
            {
              // import function com.Util.staticMethod
              token: ["keyword", "text", "entity.name.type"],
              regex: "(import)(\\s+)(" + packageIdentifierRe + ")"
            },
            {
              // global com.example.Type identifier
              token: ["keyword", "text", "entity.name.type", "text", "variable"],
              regex: "(global)(\\s+)(" + packageIdentifierRe + ")(\\s+)(" + identifierRe + ")"
            },
            {
              // declare trait DeclaredType
              token: ["keyword", "text", "keyword", "text", "entity.name.type"],
              regex: "(declare)(\\s+)(trait)(\\s+)(" + identifierRe + ")"
            },
            {
              // declare trait DeclaredType
              token: ["keyword", "text", "entity.name.type"],
              regex: "(declare)(\\s+)(" + identifierRe + ")"
            },
            {
              // declare trait DeclaredType
              token: ["keyword", "text", "entity.name.type"],
              regex: "(extends)(\\s+)(" + packageIdentifierRe + ")"
            },
            {
              // rule ...
              token: ["keyword", "text"],
              regex: "(rule)(\\s+)",
              next: "asset.name"
            }
          ],
          stringRules(),
          [{
            // variable :
            token: ["variable.other", "text", "text"],
            regex: "(" + identifierRe + ")(\\s*)(:)"
          }, {
            // query ...
            token: ["keyword", "text"],
            regex: "(query)(\\s+)",
            next: "asset.name"
          }, {
            // when ...
            token: ["keyword", "text"],
            regex: "(when)(\\s*)"
          }, {
            // then <java/mvel code> end
            token: ["keyword", "text"],
            regex: "(then)(\\s*)",
            next: "java-start"
          }, {
            token: "paren.lparen",
            regex: /[\[({]/
          }, {
            token: "paren.rparen",
            regex: /[\])}]/
          }],
          basicPostRules()
        ),
        "block.comment": blockCommentRules("start"),
        "asset.name": [
          {
            token: "entity.name",
            regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
          },
          {
            token: "entity.name",
            regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
          },
          {
            token: "entity.name",
            regex: identifierRe
          },
          {
            regex: "",
            token: "empty",
            next: "start"
          }
        ]
      };
      this.embedRules(
        DocCommentHighlightRules,
        "doc-",
        [DocCommentHighlightRules.getEndRule("start")]
      );
      this.embedRules(JavaHighlightRules, "java-", [
        {
          token: "support.function",
          regex: "\\b(insert|modify|retract|update)\\b"
        },
        {
          token: "keyword",
          regex: "\\bend\\b",
          next: "start"
        }
      ]);
    };
    oop.inherits(DroolsHighlightRules, TextHighlightRules);
    exports.DroolsHighlightRules = DroolsHighlightRules;
  }
});

// src/mode/folding/drools.js
var require_drools = __commonJS({
  "src/mode/folding/drools.js"(exports) {
    "use strict";
    var oop = require_oop();
    var Range = require_range().Range;
    var BaseFoldMode = require_fold_mode().FoldMode;
    var TokenIterator = require_token_iterator().TokenIterator;
    var FoldMode = exports.FoldMode = function() {
    };
    oop.inherits(FoldMode, BaseFoldMode);
    (function() {
      this.foldingStartMarker = /\b(rule|declare|query|when|then)\b/;
      this.foldingStopMarker = /\bend\b/;
      this.importRegex = /^import /;
      this.globalRegex = /^global /;
      this.getBaseFoldWidget = this.getFoldWidget;
      this.getFoldWidget = function(session, foldStyle, row) {
        if (foldStyle === "markbegin") {
          var line = session.getLine(row);
          if (this.importRegex.test(line)) {
            if (row === 0 || !this.importRegex.test(session.getLine(row - 1)))
              return "start";
          }
          if (this.globalRegex.test(line)) {
            if (row === 0 || !this.globalRegex.test(session.getLine(row - 1)))
              return "start";
          }
        }
        return this.getBaseFoldWidget(session, foldStyle, row);
      };
      this.getFoldWidgetRange = function(session, foldStyle, row) {
        var line = session.getLine(row);
        var match = line.match(this.foldingStartMarker);
        if (match) {
          if (match[1]) {
            var position = { row, column: line.length };
            var iterator = new TokenIterator(session, position.row, position.column);
            var seek = "end";
            var token = iterator.getCurrentToken();
            if (token.value == "when") {
              seek = "then";
            }
            while (token) {
              if (token.value == seek) {
                return Range.fromPoints(position, {
                  row: iterator.getCurrentTokenRow(),
                  column: iterator.getCurrentTokenColumn()
                });
              }
              token = iterator.stepForward();
            }
          }
        }
        match = line.match(this.importRegex);
        if (match) {
          return getMatchedFoldRange(session, this.importRegex, match, row);
        }
        match = line.match(this.globalRegex);
        if (match) {
          return getMatchedFoldRange(session, this.globalRegex, match, row);
        }
      };
    }).call(FoldMode.prototype);
    function getMatchedFoldRange(session, regex, match, row) {
      let startColumn = match[0].length;
      let maxRow = session.getLength();
      let startRow = row;
      let endRow = row;
      while (++row < maxRow) {
        let line = session.getLine(row);
        if (line.match(/^\s*$/))
          continue;
        if (!line.match(regex))
          break;
        endRow = row;
      }
      if (endRow > startRow) {
        let endColumn = session.getLine(endRow).length;
        return new Range(startRow, startColumn, endRow, endColumn);
      }
    }
  }
});

// src/mode/drools.js
var require_drools2 = __commonJS({
  "src/mode/drools.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var DroolsHighlightRules = require_drools_highlight_rules().DroolsHighlightRules;
    var DroolsFoldMode = require_drools().FoldMode;
    var Mode = function() {
      this.HighlightRules = DroolsHighlightRules;
      this.foldingRules = new DroolsFoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.$id = "ace/mode/drools";
      this.snippetFileId = "ace/snippets/drools";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_drools2();

import {
  require_javascript3 as require_javascript
} from "../chunk-GUNMO7YX.js";
import "../chunk-OXTSUXGN.js";
import "../chunk-ELLQ4DAZ.js";
import "../chunk-5GQPFTLG.js";
import {
  require_doc_comment_highlight_rules
} from "../chunk-XTXP6FMQ.js";
import "../chunk-67VAGNRS.js";
import "../chunk-5O3J7W3G.js";
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

// src/mode/groovy_highlight_rules.js
var require_groovy_highlight_rules = __commonJS({
  "src/mode/groovy_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var DocCommentHighlightRules = require_doc_comment_highlight_rules().DocCommentHighlightRules;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var GroovyHighlightRules = function() {
      var keywords = "assert|with|abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|def|float|native|super|while";
      var buildinConstants = "null|Infinity|NaN|undefined";
      var langClasses = "AbstractMethodError|AssertionError|ClassCircularityError|ClassFormatError|Deprecated|EnumConstantNotPresentException|ExceptionInInitializerError|IllegalAccessError|IllegalThreadStateException|InstantiationError|InternalError|NegativeArraySizeException|NoSuchFieldError|Override|Process|ProcessBuilder|SecurityManager|StringIndexOutOfBoundsException|SuppressWarnings|TypeNotPresentException|UnknownError|UnsatisfiedLinkError|UnsupportedClassVersionError|VerifyError|InstantiationException|IndexOutOfBoundsException|ArrayIndexOutOfBoundsException|CloneNotSupportedException|NoSuchFieldException|IllegalArgumentException|NumberFormatException|SecurityException|Void|InheritableThreadLocal|IllegalStateException|InterruptedException|NoSuchMethodException|IllegalAccessException|UnsupportedOperationException|Enum|StrictMath|Package|Compiler|Readable|Runtime|StringBuilder|Math|IncompatibleClassChangeError|NoSuchMethodError|ThreadLocal|RuntimePermission|ArithmeticException|NullPointerException|Long|Integer|Short|Byte|Double|Number|Float|Character|Boolean|StackTraceElement|Appendable|StringBuffer|Iterable|ThreadGroup|Runnable|Thread|IllegalMonitorStateException|StackOverflowError|OutOfMemoryError|VirtualMachineError|ArrayStoreException|ClassCastException|LinkageError|NoClassDefFoundError|ClassNotFoundException|RuntimeException|Exception|ThreadDeath|Error|Throwable|System|ClassLoader|Cloneable|Class|CharSequence|Comparable|String|Object";
      var keywordMapper = this.createKeywordMapper({
        "variable.language": "this",
        "keyword": keywords,
        "support.function": langClasses,
        "constant.language": buildinConstants
      }, "identifier");
      this.$rules = {
        "start": [
          {
            token: "comment",
            regex: "\\/\\/.*$"
          },
          DocCommentHighlightRules.getStartRule("doc-start"),
          {
            token: "comment",
            // multi line comment
            regex: "\\/\\*",
            next: "comment"
          },
          {
            token: "string.regexp",
            regex: "[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"
          },
          {
            token: "string",
            regex: '"""',
            next: "qqstring"
          },
          {
            token: "string",
            regex: "'''",
            next: "qstring"
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
            token: keywordMapper,
            // TODO: Unicode escape sequences
            // TODO: Unicode identifiers
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
          },
          {
            token: "keyword.operator",
            regex: "\\?:|\\?\\.|\\*\\.|<=>|=~|==~|\\.@|\\*\\.@|\\.&|as|in|is|!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"
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
        "qqstring": [
          {
            token: "constant.language.escape",
            regex: /\\(?:u[0-9A-Fa-f]{4}|.|$)/
          },
          {
            token: "constant.language.escape",
            regex: /\$[\w\d]+/
          },
          {
            token: "constant.language.escape",
            regex: /\$\{[^"\}]+\}?/
          },
          {
            token: "string",
            regex: '"{3,5}',
            next: "start"
          },
          {
            token: "string",
            regex: ".+?"
          }
        ],
        "qstring": [
          {
            token: "constant.language.escape",
            regex: /\\(?:u[0-9A-Fa-f]{4}|.|$)/
          },
          {
            token: "string",
            regex: "'{3,5}",
            next: "start"
          },
          {
            token: "string",
            regex: ".+?"
          }
        ]
      };
      this.embedRules(
        DocCommentHighlightRules,
        "doc-",
        [DocCommentHighlightRules.getEndRule("start")]
      );
    };
    oop.inherits(GroovyHighlightRules, TextHighlightRules);
    exports.GroovyHighlightRules = GroovyHighlightRules;
  }
});

// src/mode/groovy.js
var require_groovy = __commonJS({
  "src/mode/groovy.js"(exports) {
    var oop = require_oop();
    var JavaScriptMode = require_javascript().Mode;
    var GroovyHighlightRules = require_groovy_highlight_rules().GroovyHighlightRules;
    var Mode = function() {
      JavaScriptMode.call(this);
      this.HighlightRules = GroovyHighlightRules;
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, JavaScriptMode);
    (function() {
      this.createWorker = function(session) {
        return null;
      };
      this.$id = "ace/mode/groovy";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_groovy();

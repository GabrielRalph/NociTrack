import {
  require_javascript3 as require_javascript
} from "../chunk-WK3XC3NH.js";
import "../chunk-U2RKG7VZ.js";
import "../chunk-IWXN4N2Q.js";
import "../chunk-5GQPFTLG.js";
import {
  require_doc_comment_highlight_rules
} from "../chunk-KWFYXSQI.js";
import "../chunk-67VAGNRS.js";
import "../chunk-5O3J7W3G.js";
import "../chunk-JEWW6F7O.js";
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
import "../chunk-NNGFYYI3.js";
import "../chunk-3SNEZHBJ.js";
import "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/scala_highlight_rules.js
var require_scala_highlight_rules = __commonJS({
  "src/mode/scala_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var DocCommentHighlightRules = require_doc_comment_highlight_rules().DocCommentHighlightRules;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var ScalaHighlightRules = function() {
      var keywords = "case|default|do|else|for|if|match|while|throw|return|try|trye|catch|finally|yield|abstract|class|def|extends|final|forSome|implicit|implicits|import|lazy|new|object|null|override|package|private|protected|sealed|super|this|trait|type|val|var|with|assert|assume|require|print|println|printf|readLine|readBoolean|readByte|readShort|readChar|readInt|readLong|readFloat|readDouble";
      var buildinConstants = "true|false";
      var langClasses = "AbstractMethodError|AssertionError|ClassCircularityError|ClassFormatError|Deprecated|EnumConstantNotPresentException|ExceptionInInitializerError|IllegalAccessError|IllegalThreadStateException|InstantiationError|InternalError|NegativeArraySizeException|NoSuchFieldError|Override|Process|ProcessBuilder|SecurityManager|StringIndexOutOfBoundsException|SuppressWarnings|TypeNotPresentException|UnknownError|UnsatisfiedLinkError|UnsupportedClassVersionError|VerifyError|InstantiationException|IndexOutOfBoundsException|ArrayIndexOutOfBoundsException|CloneNotSupportedException|NoSuchFieldException|IllegalArgumentException|NumberFormatException|SecurityException|Void|InheritableThreadLocal|IllegalStateException|InterruptedException|NoSuchMethodException|IllegalAccessException|UnsupportedOperationException|Enum|StrictMath|Package|Compiler|Readable|Runtime|StringBuilder|Math|IncompatibleClassChangeError|NoSuchMethodError|ThreadLocal|RuntimePermission|ArithmeticException|NullPointerException|Long|Integer|Short|Byte|Double|Number|Float|Character|Boolean|StackTraceElement|Appendable|StringBuffer|Iterable|ThreadGroup|Runnable|Thread|IllegalMonitorStateException|StackOverflowError|OutOfMemoryError|VirtualMachineError|ArrayStoreException|ClassCastException|LinkageError|NoClassDefFoundError|ClassNotFoundException|RuntimeException|Exception|ThreadDeath|Error|Throwable|System|ClassLoader|Cloneable|Class|CharSequence|Comparable|String|Object|Unit|Any|AnyVal|AnyRef|Null|ScalaObject|Singleton|Seq|Iterable|List|Option|Array|Char|Byte|Int|Long|Nothing|App|Application|BufferedIterator|BigDecimal|BigInt|Console|Either|Enumeration|Equiv|Fractional|Function|IndexedSeq|Integral|Iterator|Map|Numeric|Nil|NotNull|Ordered|Ordering|PartialFunction|PartialOrdering|Product|Proxy|Range|Responder|Seq|Serializable|Set|Specializable|Stream|StringContext|Symbol|Traversable|TraversableOnce|Tuple|Vector|Pair|Triple";
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
            next: "tstring"
          },
          {
            token: "string",
            regex: '"(?=.)',
            // " strings can't span multiple lines
            next: "string"
          },
          {
            token: "symbol.constant",
            // single line
            regex: "'[\\w\\d_]+"
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
            regex: "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"
          },
          {
            token: "paren.lparen",
            regex: "[[({]"
          },
          {
            token: "paren.rparen",
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
        "string": [
          {
            token: "escape",
            regex: '\\\\"'
          },
          {
            token: "string",
            regex: '"',
            next: "start"
          },
          {
            token: "string.invalid",
            regex: '[^"\\\\]*$',
            next: "start"
          },
          {
            token: "string",
            regex: '[^"\\\\]+'
          }
        ],
        "tstring": [
          {
            token: "string",
            regex: '"{3,5}',
            next: "start"
          },
          {
            defaultToken: "string"
          }
        ]
      };
      this.embedRules(
        DocCommentHighlightRules,
        "doc-",
        [DocCommentHighlightRules.getEndRule("start")]
      );
    };
    oop.inherits(ScalaHighlightRules, TextHighlightRules);
    exports.ScalaHighlightRules = ScalaHighlightRules;
  }
});

// src/mode/scala.js
var require_scala = __commonJS({
  "src/mode/scala.js"(exports) {
    var oop = require_oop();
    var JavaScriptMode = require_javascript().Mode;
    var ScalaHighlightRules = require_scala_highlight_rules().ScalaHighlightRules;
    var Mode = function() {
      JavaScriptMode.call(this);
      this.HighlightRules = ScalaHighlightRules;
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, JavaScriptMode);
    (function() {
      this.createWorker = function(session) {
        return null;
      };
      this.$id = "ace/mode/scala";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_scala();

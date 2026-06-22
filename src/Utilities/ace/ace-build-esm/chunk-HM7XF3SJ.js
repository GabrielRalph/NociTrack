import {
  require_doc_comment_highlight_rules
} from "./chunk-KWFYXSQI.js";
import {
  require_text_highlight_rules
} from "./chunk-LMYBRGOM.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/csharp_highlight_rules.js
var require_csharp_highlight_rules = __commonJS({
  "src/mode/csharp_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var DocCommentHighlightRules = require_doc_comment_highlight_rules().DocCommentHighlightRules;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var CSharpHighlightRules = function() {
      var keywordMapper = this.createKeywordMapper({
        "variable.language": "this",
        "keyword": "abstract|async|await|event|new|struct|as|explicit|null|switch|base|extern|object|this|bool|false|operator|throw|break|finally|out|true|byte|fixed|override|try|case|float|params|typeof|catch|for|private|uint|char|foreach|protected|ulong|checked|goto|public|unchecked|class|if|readonly|unsafe|const|implicit|ref|ushort|continue|in|return|using|decimal|int|sbyte|virtual|default|interface|sealed|volatile|delegate|internal|partial|short|void|do|is|sizeof|while|double|lock|stackalloc|else|long|static|enum|namespace|string|var|dynamic",
        "constant.language": "null|true|false"
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
            token: "string",
            // character
            regex: /'(?:.|\\(:?u[\da-fA-F]+|x[\da-fA-F]+|[tbrf'"n]))?'/
          },
          {
            token: "string",
            start: '"',
            end: '"|$',
            next: [
              { token: "constant.language.escape", regex: /\\(:?u[\da-fA-F]+|x[\da-fA-F]+|[tbrf'"n])/ },
              { token: "invalid", regex: /\\./ }
            ]
          },
          {
            token: "string",
            start: '@"',
            end: '"',
            next: [
              { token: "constant.language.escape", regex: '""' }
            ]
          },
          {
            token: "string",
            start: /\$"/,
            end: '"|$',
            next: [
              { token: "constant.language.escape", regex: /\\(:?$)|{{/ },
              { token: "constant.language.escape", regex: /\\(:?u[\da-fA-F]+|x[\da-fA-F]+|[tbrf'"n])/ },
              { token: "invalid", regex: /\\./ }
            ]
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
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
          },
          {
            token: "keyword.operator",
            regex: "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"
          },
          {
            token: "keyword",
            regex: "^\\s*#(if|else|elif|endif|define|undef|warning|error|line|region|endregion|pragma)"
          },
          {
            token: "punctuation.operator",
            regex: "\\?|\\:|\\,|\\;|\\."
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
        ]
      };
      this.embedRules(
        DocCommentHighlightRules,
        "doc-",
        [DocCommentHighlightRules.getEndRule("start")]
      );
      this.normalizeRules();
    };
    oop.inherits(CSharpHighlightRules, TextHighlightRules);
    exports.CSharpHighlightRules = CSharpHighlightRules;
  }
});

export {
  require_csharp_highlight_rules
};

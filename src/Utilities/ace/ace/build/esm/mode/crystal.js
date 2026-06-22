import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
import {
  require_coffee
} from "../chunk-2I2EWIJ7.js";
import "../chunk-JEWW6F7O.js";
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

// src/mode/crystal_highlight_rules.js
var require_crystal_highlight_rules = __commonJS({
  "src/mode/crystal_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var CrystalHighlightRules = function() {
      var builtinFunctions = "puts|initialize|previous_def|typeof|as|pointerof|sizeof|instance_sizeof";
      var keywords = "if|end|else|elsif|unless|case|when|break|while|next|until|def|return|class|new|getter|setter|property|lib|fun|do|struct|private|protected|public|module|super|abstract|include|extend|begin|enum|raise|yield|with|alias|rescue|ensure|macro|uninitialized|union|type|require";
      var buildinConstants = "true|TRUE|false|FALSE|nil|NIL|__LINE__|__END_LINE__|__FILE__|__DIR__";
      var builtinVariables = "$DEBUG|$defout|$FILENAME|$LOAD_PATH|$SAFE|$stdin|$stdout|$stderr|$VERBOSE|root_url|flash|session|cookies|params|request|response|logger|self";
      var keywordMapper = this.$keywords = this.createKeywordMapper({
        "keyword": keywords,
        "constant.language": buildinConstants,
        "variable.language": builtinVariables,
        "support.function": builtinFunctions
      }, "identifier");
      var hexNumber = "(?:0[xX][\\dA-Fa-f]+)";
      var decNumber = "(?:[0-9][\\d_]*)";
      var octNumber = "(?:0o[0-7][0-7]*)";
      var binNumber = "(?:0[bB][01]+)";
      var intNumber = "(?:[+-]?)(?:" + hexNumber + "|" + decNumber + "|" + octNumber + "|" + binNumber + ")(?:_?[iIuU](?:8|16|32|64))?\\b";
      var escapeExpression = /\\(?:[nsrtvfbae'"\\]|[0-7]{3}|x[\da-fA-F]{2}|u[\da-fA-F]{4}|u{[\da-fA-F]{1,6}})/;
      var extEscapeExspresssion = /\\(?:[nsrtvfbae'"\\]|[0-7]{3}|x[\da-fA-F]{2}|u[\da-fA-F]{4}|u{[\da-fA-F]{1,6}}|u{(:?[\da-fA-F]{2}\s)*[\da-fA-F]{2}})/;
      this.$rules = {
        "start": [
          {
            token: "comment",
            regex: "#.*$"
          },
          {
            token: "string.regexp",
            regex: "[/]",
            push: [{
              token: "constant.language.escape",
              regex: extEscapeExspresssion
            }, {
              token: "string.regexp",
              regex: "[/][imx]*(?=[).,;\\s]|$)",
              next: "pop"
            }, {
              defaultToken: "string.regexp"
            }]
          },
          [{
            regex: "[{}]",
            onMatch: function(val, state, stack) {
              this.next = val == "{" ? this.nextState : "";
              if (val == "{" && stack.length) {
                stack.unshift("start", state);
                return "paren.lparen";
              }
              if (val == "}" && stack.length) {
                stack.shift();
                this.next = stack.shift();
                if (this.next.indexOf("string") != -1)
                  return "paren.end";
              }
              return val == "{" ? "paren.lparen" : "paren.rparen";
            },
            nextState: "start"
          }, {
            token: "string.start",
            regex: /"/,
            push: [{
              token: "constant.language.escape",
              regex: extEscapeExspresssion
            }, {
              token: "string",
              regex: /\\#{/
            }, {
              token: "paren.start",
              regex: /#{/,
              push: "start"
            }, {
              token: "string.end",
              regex: /"/,
              next: "pop"
            }, {
              defaultToken: "string"
            }]
          }, {
            token: "string.start",
            regex: /`/,
            push: [{
              token: "constant.language.escape",
              regex: extEscapeExspresssion
            }, {
              token: "string",
              regex: /\\#{/
            }, {
              token: "paren.start",
              regex: /#{/,
              push: "start"
            }, {
              token: "string.end",
              regex: /`/,
              next: "pop"
            }, {
              defaultToken: "string"
            }]
          }, {
            stateName: "rpstring",
            token: "string.start",
            regex: /%[Qx]?\(/,
            push: [{
              token: "constant.language.escape",
              regex: extEscapeExspresssion
            }, {
              token: "string.start",
              regex: /\(/,
              push: "rpstring"
            }, {
              token: "string.end",
              regex: /\)/,
              next: "pop"
            }, {
              token: "paren.start",
              regex: /#{/,
              push: "start"
            }, {
              defaultToken: "string"
            }]
          }, {
            stateName: "spstring",
            token: "string.start",
            regex: /%[Qx]?\[/,
            push: [{
              token: "constant.language.escape",
              regex: extEscapeExspresssion
            }, {
              token: "string.start",
              regex: /\[/,
              push: "spstring"
            }, {
              token: "string.end",
              regex: /]/,
              next: "pop"
            }, {
              token: "paren.start",
              regex: /#{/,
              push: "start"
            }, {
              defaultToken: "string"
            }]
          }, {
            stateName: "fpstring",
            token: "string.start",
            regex: /%[Qx]?{/,
            push: [{
              token: "constant.language.escape",
              regex: extEscapeExspresssion
            }, {
              token: "string.start",
              regex: /{/,
              push: "fpstring"
            }, {
              token: "string.end",
              regex: /}/,
              next: "pop"
            }, {
              token: "paren.start",
              regex: /#{/,
              push: "start"
            }, {
              defaultToken: "string"
            }]
          }, {
            stateName: "tpstring",
            token: "string.start",
            regex: /%[Qx]?</,
            push: [{
              token: "constant.language.escape",
              regex: extEscapeExspresssion
            }, {
              token: "string.start",
              regex: /</,
              push: "tpstring"
            }, {
              token: "string.end",
              regex: />/,
              next: "pop"
            }, {
              token: "paren.start",
              regex: /#{/,
              push: "start"
            }, {
              defaultToken: "string"
            }]
          }, {
            stateName: "ppstring",
            token: "string.start",
            regex: /%[Qx]?\|/,
            push: [{
              token: "constant.language.escape",
              regex: extEscapeExspresssion
            }, {
              token: "string.end",
              regex: /\|/,
              next: "pop"
            }, {
              token: "paren.start",
              regex: /#{/,
              push: "start"
            }, {
              defaultToken: "string"
            }]
          }, {
            stateName: "rpqstring",
            token: "string.start",
            regex: /%[qwir]\(/,
            push: [{
              token: "string.start",
              regex: /\(/,
              push: "rpqstring"
            }, {
              token: "string.end",
              regex: /\)/,
              next: "pop"
            }, {
              defaultToken: "string"
            }]
          }, {
            stateName: "spqstring",
            token: "string.start",
            regex: /%[qwir]\[/,
            push: [{
              token: "string.start",
              regex: /\[/,
              push: "spqstring"
            }, {
              token: "string.end",
              regex: /]/,
              next: "pop"
            }, {
              defaultToken: "string"
            }]
          }, {
            stateName: "fpqstring",
            token: "string.start",
            regex: /%[qwir]{/,
            push: [{
              token: "string.start",
              regex: /{/,
              push: "fpqstring"
            }, {
              token: "string.end",
              regex: /}/,
              next: "pop"
            }, {
              defaultToken: "string"
            }]
          }, {
            stateName: "tpqstring",
            token: "string.start",
            regex: /%[qwir]</,
            push: [{
              token: "string.start",
              regex: /</,
              push: "tpqstring"
            }, {
              token: "string.end",
              regex: />/,
              next: "pop"
            }, {
              defaultToken: "string"
            }]
          }, {
            stateName: "ppqstring",
            token: "string.start",
            regex: /%[qwir]\|/,
            push: [{
              token: "string.end",
              regex: /\|/,
              next: "pop"
            }, {
              defaultToken: "string"
            }]
          }, {
            token: "string.start",
            regex: /'/,
            push: [{
              token: "constant.language.escape",
              regex: escapeExpression
            }, {
              token: "string.end",
              regex: /'|$/,
              next: "pop"
            }, {
              defaultToken: "string"
            }]
          }],
          {
            token: "text",
            // namespaces aren't symbols
            regex: "::"
          },
          {
            token: "variable.instance",
            // instance variable
            regex: "@{1,2}[a-zA-Z_\\d]+"
          },
          {
            token: "variable.fresh",
            // fresh variable
            regex: "%[a-zA-Z_\\d]+"
          },
          {
            token: "support.class",
            // class name
            regex: "[A-Z][a-zA-Z_\\d]+"
          },
          {
            token: "constant.other.symbol",
            // symbol
            regex: "[:](?:(?:===|<=>|\\[]\\?|\\[]=|\\[]|>>|\\*\\*|<<|==|!=|>=|<=|!~|=~|<|\\+|-|\\*|\\/|%|&|\\||\\^|>|!|~)|(?:(?:[A-Za-z_]|[@$](?=[a-zA-Z0-9_]))[a-zA-Z0-9_]*[!=?]?))"
          },
          {
            token: "constant.numeric",
            // float
            regex: "[+-]?\\d(?:\\d|_(?=\\d))*(?:(?:\\.\\d(?:\\d|_(?=\\d))*)?(?:[eE][+-]?\\d+)?)?(?:_?[fF](?:32|64))?\\b"
          },
          {
            token: "constant.numeric",
            regex: intNumber
          },
          {
            token: "constant.other.symbol",
            regex: ':"',
            push: [{
              token: "constant.language.escape",
              regex: extEscapeExspresssion
            }, {
              token: "constant.other.symbol",
              regex: '"',
              next: "pop"
            }, {
              defaultToken: "constant.other.symbol"
            }]
          },
          {
            token: "constant.language.boolean",
            regex: "(?:true|false)\\b"
          },
          {
            token: "support.function",
            regex: "(?:is_a\\?|nil\\?|responds_to\\?|as\\?)"
          },
          {
            token: keywordMapper,
            regex: "[a-zA-Z_$][a-zA-Z0-9_$!?]*\\b"
          },
          {
            token: "variable.system",
            regex: "\\$\\!|\\$\\?"
          },
          {
            token: "punctuation.separator.key-value",
            regex: "=>"
          },
          {
            stateName: "heredoc",
            onMatch: function(value, currentState, stack) {
              var next = "heredoc";
              var tokens = value.split(this.splitRegex);
              stack.push(next, tokens[3]);
              return [
                { type: "constant", value: tokens[1] },
                { type: "string", value: tokens[2] },
                { type: "support.class", value: tokens[3] },
                { type: "string", value: tokens[4] }
              ];
            },
            regex: "(<<-)([']?)([\\w]+)([']?)",
            rules: {
              heredoc: [{
                token: "string",
                regex: "^ +"
              }, {
                onMatch: function(value, currentState, stack) {
                  if (value === stack[1]) {
                    stack.shift();
                    stack.shift();
                    this.next = stack[0] || "start";
                    return "support.class";
                  }
                  this.next = "";
                  return "string";
                },
                regex: ".*$",
                next: "start"
              }]
            }
          },
          {
            regex: "$",
            token: "empty",
            next: function(currentState, stack) {
              if (stack[0] === "heredoc")
                return stack[0];
              return currentState;
            }
          },
          {
            token: "punctuation.operator",
            regex: /[.]\s*(?![.])/,
            push: [{
              token: "punctuation.operator",
              regex: /[.]\s*(?![.])/
            }, {
              token: "support.function",
              regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            }, {
              regex: "",
              token: "empty",
              next: "pop"
            }]
          },
          {
            token: "keyword.operator",
            regex: "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|\\?|\\:|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\^|\\|"
          },
          {
            token: "punctuation.operator",
            regex: /[?:,;.]/
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
        ]
      };
      this.normalizeRules();
    };
    oop.inherits(CrystalHighlightRules, TextHighlightRules);
    exports.CrystalHighlightRules = CrystalHighlightRules;
  }
});

// src/mode/crystal.js
var require_crystal = __commonJS({
  "src/mode/crystal.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var CrystalHighlightRules = require_crystal_highlight_rules().CrystalHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var Range = require_range().Range;
    var FoldMode = require_coffee().FoldMode;
    var Mode = function() {
      this.HighlightRules = CrystalHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = this.$defaultBehaviour;
      this.foldingRules = new FoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "#";
      this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;
        if (tokens.length && tokens[tokens.length - 1].type == "comment") {
          return indent;
        }
        if (state == "start") {
          var match = line.match(/^.*[\{\(\[]\s*$/);
          var startingClassOrMethod = line.match(/^\s*(class|def|module)\s.*$/);
          var startingDoBlock = line.match(/.*do(\s*|\s+\|.*\|\s*)$/);
          var startingConditional = line.match(/^\s*(if|else|when)\s*/);
          if (match || startingClassOrMethod || startingDoBlock || startingConditional) {
            indent += tab;
          }
        }
        return indent;
      };
      this.checkOutdent = function(state, line, input) {
        return /^\s+(end|else)$/.test(line + input) || this.$outdent.checkOutdent(line, input);
      };
      this.autoOutdent = function(state, session, row) {
        var line = session.getLine(row);
        if (/}/.test(line))
          return this.$outdent.autoOutdent(session, row);
        var indent = this.$getIndent(line);
        var prevLine = session.getLine(row - 1);
        var prevIndent = this.$getIndent(prevLine);
        var tab = session.getTabString();
        if (prevIndent.length <= indent.length) {
          if (indent.slice(-tab.length) == tab)
            session.remove(new Range(row, indent.length - tab.length, row, indent.length));
        }
      };
      this.$id = "ace/mode/crystal";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_crystal();

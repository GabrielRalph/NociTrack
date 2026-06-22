import {
  require_yaml
} from "../chunk-6WIBUYFR.js";
import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
import "../chunk-2I2EWIJ7.js";
import {
  require_worker_client
} from "../chunk-5O3J7W3G.js";
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

// src/mode/yaml2_highlight_rules.js
var require_yaml2_highlight_rules = __commonJS({
  "src/mode/yaml2_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var Yaml2HighlightRules = function() {
      this.$rules = {
        "start": [
          {
            token: "comment",
            regex: "#.*$"
          },
          {
            token: "list.markup",
            regex: /^(?:-{3}|\.{3})\s*(?=#|$)/
          },
          {
            token: ["list.markup", "meta.tag", "keyword"],
            regex: /^(\s*[\-?]\s+)(\w[^\s:]*?)(\s*:(?=\s+\S))/,
            next: "yaml_scalar_value"
          },
          {
            token: ["list.markup", "meta.tag", "keyword"],
            regex: /^(\s*[\-?]\s+)(\w[^\s:]*?)(\s*:(?=\s*(?:#|$)))/
          },
          {
            token: "list.markup",
            regex: /^\s*[\-?](?:$|\s)/
          },
          {
            token: "constant",
            regex: "!![\\w//]+"
          },
          {
            token: "constant.language",
            regex: "[&\\*][a-zA-Z0-9-_]+"
          },
          {
            token: ["meta.tag", "keyword"],
            regex: /^(\s*\w[^\s:]*?)(:(?=\s+\S))/,
            next: "yaml_scalar_value"
          },
          {
            token: ["meta.tag", "keyword"],
            regex: /^(\s*\w[^\s:]*?)(:(?=\s*(?:#|$)))/
          },
          {
            token: ["meta.tag", "keyword"],
            regex: /(\w[^\s:]*?)(\s*:(?=\s+\S))/,
            next: "yaml_scalar_value"
          },
          {
            token: ["meta.tag", "keyword"],
            regex: /(\w[^\s:]*?)(\s*:(?=\s*(?:#|$)))/
          },
          {
            token: "keyword.operator",
            regex: "<<\\w*:\\w*"
          },
          {
            token: "keyword.operator",
            regex: "-\\s*(?=[{])"
          },
          {
            token: "string",
            // single line
            regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
          },
          {
            token: "string",
            // multi line string start
            regex: /[|>][-+\d]*(?:$|\s+(?:$|#))/,
            onMatch: function(val, state, stack, line) {
              line = line.replace(/ #.*/, "");
              var indent = /^ *((:\s*)?-(\s*[^|>])?)?/.exec(line)[0].replace(/\S\s*$/, "").length;
              var indentationIndicator = parseInt(/\d+[\s+-]*$/.exec(line));
              if (indentationIndicator) {
                indent += indentationIndicator - 1;
                this.next = "mlString";
              } else {
                this.next = "mlStringPre";
              }
              if (!stack.length) {
                stack.push(this.next);
                stack.push(indent);
              } else {
                stack[0] = this.next;
                stack[1] = indent;
              }
              return this.token;
            },
            next: "mlString"
          },
          {
            token: "string",
            // single quoted string
            regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
          },
          {
            token: "constant.numeric",
            // numbers in flow sequences / other non-value contexts
            regex: /[+\-]?(?:\.inf\b|NaN\b|0x[\dA-Fa-f_]+|0b[10_]+|[\d_]+(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)(?=\s*(?:[,\]\}]|#|$))/
          },
          {
            token: "constant.language.boolean",
            regex: "\\b(?:true|false|TRUE|FALSE|True|False|yes|no)\\b"
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
            token: "string",
            regex: /[^\s,:\[\]\{\}]+/
          }
        ],
        "yaml_scalar_value": [
          {
            token: "text",
            // leading whitespace
            regex: /\s+/
          },
          {
            token: "comment",
            regex: /#.*$/,
            next: "start"
          },
          {
            token: "string",
            // double quoted
            regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',
            next: "start"
          },
          {
            token: "string",
            // single quoted
            regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",
            next: "start"
          },
          {
            token: "string",
            // block string
            regex: /[|>][-+\d]*(?:$|\s+(?:$|#))/,
            onMatch: function(val, state, stack, line) {
              line = line.replace(/ #.*/, "");
              var indent = /^ *((:\s*)?-(\s*[^|>])?)?/.exec(line)[0].replace(/\S\s*$/, "").length;
              var indentationIndicator = parseInt(/\d+[\s+-]*$/.exec(line));
              if (indentationIndicator) {
                indent += indentationIndicator - 1;
                this.next = "mlString";
              } else {
                this.next = "mlStringPre";
              }
              if (!stack.length) {
                stack.push(this.next);
                stack.push(indent);
              } else {
                stack[0] = this.next;
                stack[1] = indent;
              }
              return this.token;
            },
            next: "mlString"
          },
          {
            token: "constant.language.boolean",
            // only when it's the entire value (nothing else follows except comment/end)
            regex: /\b(?:true|false|TRUE|FALSE|True|False|yes|no)\b(?=\s*(?:#|$))/,
            next: "start"
          },
          {
            token: "constant.numeric",
            // only when the value is a standalone number (no trailing non-comment text)
            regex: /[+\-]?(?:\.inf\b|NaN\b|0x[\dA-Fa-f_]+|0b[10_]+|[\d_]+(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)(?=\s*(?:#|$))/,
            next: "start"
          },
          {
            token: "string",
            // everything else (plain scalars, mixed content like "some 4" or "1 2 3")
            regex: /\S[^#\n]*?(?=\s*(?:#|$))/,
            next: "start"
          },
          {
            token: "text",
            regex: /$/,
            next: "start"
          }
        ],
        "mlStringPre": [
          {
            token: "indent",
            regex: /^ *$/
          },
          {
            token: "indent",
            regex: /^ */,
            onMatch: function(val, state, stack) {
              var curIndent = stack[1];
              if (curIndent >= val.length) {
                this.next = "start";
                stack.shift();
                stack.shift();
              } else {
                stack[1] = val.length - 1;
                this.next = stack[0] = "mlString";
              }
              return this.token;
            },
            next: "mlString"
          },
          {
            defaultToken: "string"
          }
        ],
        "mlString": [
          {
            token: "indent",
            regex: /^ *$/
          },
          {
            token: "indent",
            regex: /^ */,
            onMatch: function(val, state, stack) {
              var curIndent = stack[1];
              if (curIndent >= val.length) {
                this.next = "start";
                stack.splice(0);
              } else {
                this.next = "mlString";
              }
              return this.token;
            },
            next: "mlString"
          },
          {
            token: "string",
            regex: ".+"
          }
        ]
      };
      this.normalizeRules();
    };
    oop.inherits(Yaml2HighlightRules, TextHighlightRules);
    exports.Yaml2HighlightRules = Yaml2HighlightRules;
  }
});

// src/mode/yaml2.js
var require_yaml2 = __commonJS({
  "src/mode/yaml2.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var Yaml2HighlightRules = require_yaml2_highlight_rules().Yaml2HighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var FoldMode = require_yaml().FoldMode;
    var WorkerClient = require_worker_client().WorkerClient;
    var Mode = function() {
      this.HighlightRules = Yaml2HighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.foldingRules = new FoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = ["#"];
      this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        if (state == "start") {
          var match = line.match(/^.*[\{\(\[]\s*$/);
          if (match) {
            indent += tab;
          }
        }
        return indent;
      };
      this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
      };
      this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
      };
      this.createWorker = function(session) {
        var worker = new WorkerClient(["ace"], "ace/mode/yaml_worker", "YamlWorker");
        worker.attachToDocument(session.getDocument());
        worker.on("annotate", function(results) {
          session.setAnnotations(results.data);
        });
        worker.on("terminate", function() {
          session.clearAnnotations();
        });
        return worker;
      };
      this.$id = "ace/mode/yaml2";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_yaml2();

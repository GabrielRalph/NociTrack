import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
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

// src/mode/terraform_highlight_rules.js
var require_terraform_highlight_rules = __commonJS({
  "src/mode/terraform_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var TerraformHighlightRules = function() {
      this.$rules = {
        "start": [
          {
            token: ["storage.function.terraform"],
            regex: "\\b(output|resource|data|variable|module|export)\\b"
          },
          {
            token: "variable.terraform",
            regex: "\\$\\s",
            push: [
              {
                token: "keyword.terraform",
                regex: "(-var-file|-var)"
              },
              {
                token: "variable.terraform",
                regex: "\\n|$",
                next: "pop"
              },
              { include: "strings" },
              { include: "variables" },
              { include: "operators" },
              { defaultToken: "text" }
            ]
          },
          {
            token: "language.support.class",
            regex: "\\b(timeouts|provider|connection|provisioner|lifecycleprovider|atlas)\\b"
          },
          {
            token: "singleline.comment.terraform",
            regex: "#.*$"
          },
          {
            token: "singleline.comment.terraform",
            regex: "//.*$"
          },
          {
            token: "multiline.comment.begin.terraform",
            regex: /\/\*/,
            push: "blockComment"
          },
          {
            token: "storage.function.terraform",
            regex: "^\\s*(locals|terraform)\\s*{"
          },
          {
            token: "paren.lparen",
            regex: "[[({]"
          },
          {
            token: "paren.rparen",
            regex: "[\\])}]"
          },
          { include: "constants" },
          { include: "strings" },
          { include: "operators" },
          { include: "variables" }
        ],
        blockComment: [{
          regex: /\*\//,
          token: "multiline.comment.end.terraform",
          next: "pop"
        }, {
          defaultToken: "comment"
        }],
        "constants": [
          {
            token: "constant.language.terraform",
            regex: "\\b(true|false|yes|no|on|off|EOF)\\b"
          },
          {
            token: "constant.numeric.terraform",
            regex: "(\\b([0-9]+)([kKmMgG]b?)?\\b)|(\\b(0x[0-9A-Fa-f]+)([kKmMgG]b?)?\\b)"
          }
        ],
        "variables": [
          {
            token: ["variable.assignment.terraform", "keyword.operator"],
            regex: "\\b([a-zA-Z_]+)(\\s*=)"
          }
        ],
        "interpolated_variables": [
          {
            token: "variable.terraform",
            regex: "\\b(var|self|count|path|local)\\b(?:\\.*[a-zA-Z_-]*)?"
          }
        ],
        "strings": [
          {
            token: "punctuation.quote.terraform",
            regex: "'",
            push: [
              {
                token: "punctuation.quote.terraform",
                regex: "'",
                next: "pop"
              },
              { include: "escaped_chars" },
              { defaultToken: "string" }
            ]
          },
          {
            token: "punctuation.quote.terraform",
            regex: '"',
            push: [
              {
                token: "punctuation.quote.terraform",
                regex: '"',
                next: "pop"
              },
              { include: "interpolation" },
              { include: "escaped_chars" },
              { defaultToken: "string" }
            ]
          }
        ],
        "escaped_chars": [
          {
            token: "constant.escaped_char.terraform",
            regex: "\\\\."
          }
        ],
        "operators": [
          {
            token: "keyword.operator",
            regex: "\\?|:|==|!=|>|<|>=|<=|&&|\\|\\||!|%|&|\\*|\\+|\\-|/|="
          }
        ],
        "interpolation": [
          {
            // TODO: double $
            token: "punctuation.interpolated.begin.terraform",
            regex: "\\$?\\$\\{",
            push: [
              {
                token: "punctuation.interpolated.end.terraform",
                regex: "\\}",
                next: "pop"
              },
              { include: "interpolated_variables" },
              { include: "operators" },
              { include: "constants" },
              { include: "strings" },
              { include: "functions" },
              { include: "parenthesis" },
              { defaultToken: "punctuation" }
            ]
          }
        ],
        "functions": [
          {
            token: "keyword.function.terraform",
            regex: "\\b(abs|basename|base64decode|base64encode|base64gzip|base64sha256|base64sha512|bcrypt|ceil|chomp|chunklist|cidrhost|cidrnetmask|cidrsubnet|coalesce|coalescelist|compact|concat|contains|dirname|distinct|element|file|floor|flatten|format|formatlist|indent|index|join|jsonencode|keys|length|list|log|lookup|lower|map|matchkeys|max|merge|min|md5|pathexpand|pow|replace|rsadecrypt|sha1|sha256|sha512|signum|slice|sort|split|substr|timestamp|timeadd|title|transpose|trimspace|upper|urlencode|uuid|values|zipmap)\\b"
          }
        ],
        "parenthesis": [
          {
            token: "paren.lparen",
            regex: "\\["
          },
          {
            token: "paren.rparen",
            regex: "\\]"
          }
        ]
      };
      this.normalizeRules();
    };
    oop.inherits(TerraformHighlightRules, TextHighlightRules);
    exports.TerraformHighlightRules = TerraformHighlightRules;
  }
});

// src/mode/terraform.js
var require_terraform = __commonJS({
  "src/mode/terraform.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var TerraformHighlightRules = require_terraform_highlight_rules().TerraformHighlightRules;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var Mode = function() {
      TextMode.call(this);
      this.HighlightRules = TerraformHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = this.$defaultBehaviour;
      this.foldingRules = new CStyleFoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = ["#", "//"];
      this.blockComment = { start: "/*", end: "*/" };
      this.$id = "ace/mode/terraform";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_terraform();

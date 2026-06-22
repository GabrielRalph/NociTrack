import {
  require_php,
  require_php_highlight_rules
} from "../chunk-4ZR7D5Z3.js";
import {
  require_html2 as require_html
} from "../chunk-2RIJSYM2.js";
import "../chunk-O7XPGT62.js";
import {
  require_javascript3 as require_javascript
} from "../chunk-WK3XC3NH.js";
import "../chunk-U2RKG7VZ.js";
import {
  require_css
} from "../chunk-QKY627QG.js";
import "../chunk-QMZLOC5Q.js";
import "../chunk-YNHGF363.js";
import "../chunk-QUH7KENW.js";
import "../chunk-CYWDEW5M.js";
import "../chunk-IWXN4N2Q.js";
import "../chunk-6CORPKBO.js";
import "../chunk-5GQPFTLG.js";
import "../chunk-KWFYXSQI.js";
import "../chunk-67VAGNRS.js";
import "../chunk-5O3J7W3G.js";
import "../chunk-JEWW6F7O.js";
import "../chunk-LMYBRGOM.js";
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

// src/mode/php_laravel_blade_highlight_rules.js
var require_php_laravel_blade_highlight_rules = __commonJS({
  "src/mode/php_laravel_blade_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var PhpHighlightRules = require_php_highlight_rules().PhpHighlightRules;
    var PHPLaravelBladeHighlightRules = function() {
      PhpHighlightRules.call(this);
      var bladeRules = {
        start: [{
          include: "bladeComments"
        }, {
          include: "directives"
        }, {
          include: "parenthesis"
        }],
        comments: [{
          include: "bladeComments"
        }, {
          token: "punctuation.definition.comment.blade",
          regex: "(\\/\\/(.)*)|(\\#(.)*)"
        }, {
          token: "punctuation.definition.comment.begin.php",
          regex: "(?:\\/\\*)",
          push: [{
            token: "punctuation.definition.comment.end.php",
            regex: "(?:\\*\\/)",
            next: "pop"
          }, {
            defaultToken: "comment.block.blade"
          }]
        }],
        bladeComments: [{
          token: "punctuation.definition.comment.begin.blade",
          regex: "(?:\\{\\{\\-\\-)",
          push: [{
            token: "punctuation.definition.comment.end.blade",
            regex: "(?:\\-\\-\\}\\})",
            next: "pop"
          }, {
            defaultToken: "comment.block.blade"
          }]
        }],
        parenthesis: [{
          token: "parenthesis.begin.blade",
          regex: "\\(",
          push: [{
            token: "parenthesis.end.blade",
            regex: "\\)",
            next: "pop"
          }, {
            include: "strings"
          }, {
            include: "variables"
          }, {
            include: "lang"
          }, {
            include: "parenthesis"
          }, {
            include: "comments"
          }, {
            defaultToken: "source.blade"
          }]
        }],
        directives: [
          {
            token: ["directive.declaration.blade", "keyword.directives.blade"],
            regex: "(@)(endunless|endisset|endempty|endauth|endguest|endcomponent|endslot|endalert|endverbatim|endsection|show|php|endphp|endpush|endprepend|endenv|endforelse|isset|empty|component|slot|alert|json|verbatim|section|auth|guest|hasSection|forelse|includeIf|includeWhen|includeFirst|each|push|stack|prepend|inject|env|elseenv|unless|yield|extends|parent|include|acfrepeater|block|can|cannot|choice|debug|elsecan|elsecannot|embed|hipchat|lang|layout|macro|macrodef|minify|partial|render|servers|set|slack|story|task|unset|wpposts|acfend|after|append|breakpoint|endafter|endcan|endcannot|endembed|endmacro|endmarkdown|endminify|endpartial|endsetup|endstory|endtask|endunless|markdown|overwrite|setup|stop|wpempty|wpend|wpquery)"
          },
          {
            token: ["directive.declaration.blade", "keyword.control.blade"],
            regex: "(@)(if|else|elseif|endif|foreach|endforeach|switch|case|break|default|endswitch|for|endfor|while|endwhile|continue)"
          },
          {
            token: ["directive.ignore.blade", "injections.begin.blade"],
            regex: "(@?)(\\{\\{)",
            push: [{
              token: "injections.end.blade",
              regex: "\\}\\}",
              next: "pop"
            }, {
              include: "strings"
            }, {
              include: "variables"
            }, {
              include: "comments"
            }, {
              defaultToken: "source.blade"
            }]
          },
          {
            token: "injections.unescaped.begin.blade",
            regex: "\\{\\!\\!",
            push: [{
              token: "injections.unescaped.end.blade",
              regex: "\\!\\!\\}",
              next: "pop"
            }, {
              include: "strings"
            }, {
              include: "variables"
            }, {
              defaultToken: "source.blade"
            }]
          }
        ],
        lang: [{
          token: "keyword.operator.blade",
          regex: "(?:!=|!|<=|>=|<|>|===|==|=|\\+\\+|\\;|\\,|%|&&|\\|\\|)|\\b(?:and|or|eq|neq|ne|gte|gt|ge|lte|lt|le|not|mod|as)\\b"
        }, {
          token: "constant.language.blade",
          regex: "\\b(?:TRUE|FALSE|true|false)\\b"
        }],
        strings: [{
          token: "punctuation.definition.string.begin.blade",
          regex: '"',
          push: [{
            token: "punctuation.definition.string.end.blade",
            regex: '"',
            next: "pop"
          }, {
            token: "string.character.escape.blade",
            regex: "\\\\."
          }, {
            defaultToken: "string.quoted.single.blade"
          }]
        }, {
          token: "punctuation.definition.string.begin.blade",
          regex: "'",
          push: [{
            token: "punctuation.definition.string.end.blade",
            regex: "'",
            next: "pop"
          }, {
            token: "string.character.escape.blade",
            regex: "\\\\."
          }, {
            defaultToken: "string.quoted.double.blade"
          }]
        }],
        variables: [{
          token: "variable.blade",
          regex: "\\$([a-zA-Z_][a-zA-Z0-9_]*)\\b"
        }, {
          token: ["keyword.operator.blade", "constant.other.property.blade"],
          regex: "(->)([a-zA-Z_][a-zA-Z0-9_]*)\\b"
        }, {
          token: [
            "keyword.operator.blade",
            "meta.function-call.object.blade",
            "punctuation.definition.variable.blade",
            "variable.blade",
            "punctuation.definition.variable.blade"
          ],
          regex: "(->)([a-zA-Z_][a-zA-Z0-9_]*)(\\()(.*?)(\\))"
        }]
      };
      var bladeStart = bladeRules.start;
      for (var rule in this.$rules) {
        this.$rules[rule].unshift.apply(this.$rules[rule], bladeStart);
      }
      Object.keys(bladeRules).forEach(function(x) {
        if (!this.$rules[x])
          this.$rules[x] = bladeRules[x];
      }, this);
      this.normalizeRules();
    };
    oop.inherits(PHPLaravelBladeHighlightRules, PhpHighlightRules);
    exports.PHPLaravelBladeHighlightRules = PHPLaravelBladeHighlightRules;
  }
});

// src/mode/php_laravel_blade.js
var require_php_laravel_blade = __commonJS({
  "src/mode/php_laravel_blade.js"(exports) {
    var oop = require_oop();
    var PHPLaravelBladeHighlightRules = require_php_laravel_blade_highlight_rules().PHPLaravelBladeHighlightRules;
    var PHPMode = require_php().Mode;
    var JavaScriptMode = require_javascript().Mode;
    var CssMode = require_css().Mode;
    var HtmlMode = require_html().Mode;
    var Mode = function() {
      PHPMode.call(this);
      this.HighlightRules = PHPLaravelBladeHighlightRules;
      this.createModeDelegates({
        "js-": JavaScriptMode,
        "css-": CssMode,
        "html-": HtmlMode
      });
    };
    oop.inherits(Mode, PHPMode);
    (function() {
      this.$id = "ace/mode/php_laravel_blade";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_php_laravel_blade();

import {
  require_html_highlight_rules
} from "../chunk-2TRMU5AT.js";
import "../chunk-VGQVSYAP.js";
import "../chunk-ELLQ4DAZ.js";
import "../chunk-KDDWKWK4.js";
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
import "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/ftl_highlight_rules.js
var require_ftl_highlight_rules = __commonJS({
  "src/mode/ftl_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var FtlLangHighlightRules = function() {
      var stringBuiltIns = "\\?|substring|cap_first|uncap_first|capitalize|chop_linebreak|date|time|datetime|ends_with|html|groups|index_of|j_string|js_string|json_string|last_index_of|length|lower_case|left_pad|right_pad|contains|matches|number|replace|rtf|url|split|starts_with|string|trim|upper_case|word_list|xhtml|xml";
      var numberBuiltIns = "c|round|floor|ceiling";
      var dateBuiltIns = "iso_[a-z_]+";
      var seqBuiltIns = "first|last|seq_contains|seq_index_of|seq_last_index_of|reverse|size|sort|sort_by|chunk";
      var hashBuiltIns = "keys|values";
      var xmlBuiltIns = "children|parent|root|ancestors|node_name|node_type|node_namespace";
      var expertBuiltIns = "byte|double|float|int|long|short|number_to_date|number_to_time|number_to_datetime|eval|has_content|interpret|is_[a-z_]+|namespacenew";
      var allBuiltIns = stringBuiltIns + numberBuiltIns + dateBuiltIns + seqBuiltIns + hashBuiltIns + xmlBuiltIns + expertBuiltIns;
      var deprecatedBuiltIns = "default|exists|if_exists|web_safe";
      var variables = "data_model|error|globals|lang|locale|locals|main|namespace|node|current_node|now|output_encoding|template_name|url_escaping_charset|vars|version";
      var operators = "gt|gte|lt|lte|as|in|using";
      var reserved = "true|false";
      var attributes = "encoding|parse|locale|number_format|date_format|time_format|datetime_format|time_zone|url_escaping_charset|classic_compatible|strip_whitespace|strip_text|strict_syntax|ns_prefixes|attributes";
      this.$rules = {
        "start": [{
          token: "constant.character.entity",
          regex: /&[^;]+;/
        }, {
          token: "support.function",
          regex: "\\?(" + allBuiltIns + ")"
        }, {
          token: "support.function.deprecated",
          regex: "\\?(" + deprecatedBuiltIns + ")"
        }, {
          token: "language.variable",
          regex: "\\.(?:" + variables + ")"
        }, {
          token: "constant.language",
          regex: "\\b(" + reserved + ")\\b"
        }, {
          token: "keyword.operator",
          regex: "\\b(?:" + operators + ")\\b"
        }, {
          token: "entity.other.attribute-name",
          regex: attributes
        }, {
          token: "string",
          //
          regex: /['"]/,
          next: "qstring"
        }, {
          // Deal with variable names that contains number
          // e.g. <#if var42 == 42 >
          token: function(value) {
            if (value.match("^[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?$")) {
              return "constant.numeric";
            } else {
              return "variable";
            }
          },
          regex: /[\w.+\-]+/
        }, {
          token: "keyword.operator",
          regex: "!|\\.|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^="
        }, {
          token: "paren.lparen",
          regex: "[[({]"
        }, {
          token: "paren.rparen",
          regex: "[\\])}]"
        }, {
          token: "text",
          regex: "\\s+"
        }],
        "qstring": [{
          token: "constant.character.escape",
          regex: '\\\\[nrtvef\\\\"$]'
        }, {
          token: "string",
          regex: /['"]/,
          next: "start"
        }, {
          defaultToken: "string"
        }]
      };
    };
    oop.inherits(FtlLangHighlightRules, TextHighlightRules);
    var FtlHighlightRules = function() {
      HtmlHighlightRules.call(this);
      var directives = "assign|attempt|break|case|compress|default|elseif|else|escape|fallback|function|flush|ftl|global|if|import|include|list|local|lt|macro|nested|noescape|noparse|nt|recover|recurse|return|rt|setting|stop|switch|t|visit";
      var startRules = [
        {
          token: "comment",
          regex: "<#--",
          next: "ftl-dcomment"
        },
        {
          token: "string.interpolated",
          regex: "\\${",
          push: "ftl-start"
        },
        {
          token: "keyword.function",
          regex: "</?#(" + directives + ")",
          push: "ftl-start"
        },
        {
          token: "keyword.other",
          regex: "</?@[a-zA-Z\\.]+",
          push: "ftl-start"
        }
      ];
      var endRules = [
        {
          token: "keyword",
          regex: "/?>",
          next: "pop"
        },
        {
          token: "string.interpolated",
          regex: "}",
          next: "pop"
        }
      ];
      for (var key in this.$rules)
        this.$rules[key].unshift.apply(this.$rules[key], startRules);
      this.embedRules(FtlLangHighlightRules, "ftl-", endRules, ["start"]);
      this.addRules({
        "ftl-dcomment": [{
          token: "comment",
          regex: "-->",
          next: "pop"
        }, {
          defaultToken: "comment"
        }]
      });
      this.normalizeRules();
    };
    oop.inherits(FtlHighlightRules, HtmlHighlightRules);
    exports.FtlHighlightRules = FtlHighlightRules;
  }
});

// src/mode/ftl.js
var require_ftl = __commonJS({
  "src/mode/ftl.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var FtlHighlightRules = require_ftl_highlight_rules().FtlHighlightRules;
    var Mode = function() {
      this.HighlightRules = FtlHighlightRules;
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.$id = "ace/mode/ftl";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_ftl();

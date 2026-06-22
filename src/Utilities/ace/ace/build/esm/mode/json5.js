import {
  require_json_highlight_rules
} from "../chunk-PXIHKCWK.js";
import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
import "../chunk-JEWW6F7O.js";
import {
  require_text
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

// src/mode/json5_highlight_rules.js
var require_json5_highlight_rules = __commonJS({
  "src/mode/json5_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var JsonHighlightRules = require_json_highlight_rules().JsonHighlightRules;
    var Json5HighlightRules = function() {
      JsonHighlightRules.call(this);
      var startRules = [{
        token: "variable",
        regex: /[a-zA-Z$_\u00a1-\uffff][\w$\u00a1-\uffff]*\s*(?=:)/
      }, {
        token: "variable",
        regex: /['](?:(?:\\.)|(?:[^'\\]))*?[']\s*(?=:)/
      }, {
        token: "constant.language.boolean",
        regex: /(?:null)\b/
      }, {
        token: "string",
        regex: /'/,
        next: [{
          token: "constant.language.escape",
          regex: /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\/bfnrt]|$)/,
          consumeLineEnd: true
        }, {
          token: "string",
          regex: /'|$/,
          next: "start"
        }, {
          defaultToken: "string"
        }]
      }, {
        token: "string",
        regex: /"(?![^"]*":)/,
        next: [{
          token: "constant.language.escape",
          regex: /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\/bfnrt]|$)/,
          consumeLineEnd: true
        }, {
          token: "string",
          regex: /"|$/,
          next: "start"
        }, {
          defaultToken: "string"
        }]
      }, {
        token: "constant.numeric",
        regex: /[+-]?(?:Infinity|NaN)\b/
      }];
      for (var key in this.$rules)
        this.$rules[key].unshift.apply(this.$rules[key], startRules);
      this.normalizeRules();
    };
    oop.inherits(Json5HighlightRules, JsonHighlightRules);
    exports.Json5HighlightRules = Json5HighlightRules;
  }
});

// src/mode/json5.js
var require_json5 = __commonJS({
  "src/mode/json5.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var HighlightRules = require_json5_highlight_rules().Json5HighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = HighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = this.$defaultBehaviour;
      this.foldingRules = new CStyleFoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.blockComment = { start: "/*", end: "*/" };
      this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
      };
      this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
      };
      this.$id = "ace/mode/json5";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_json5();

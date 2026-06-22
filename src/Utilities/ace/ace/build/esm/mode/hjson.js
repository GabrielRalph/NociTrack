import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
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
import "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/hjson_highlight_rules.js
var require_hjson_highlight_rules = __commonJS({
  "src/mode/hjson_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var HjsonHighlightRules = function() {
      this.$rules = {
        start: [{
          include: "#comments"
        }, {
          include: "#rootObject"
        }, {
          include: "#value"
        }],
        "#array": [{
          token: "paren.lparen",
          regex: /\[/,
          push: [{
            token: "paren.rparen",
            regex: /\]/,
            next: "pop"
          }, {
            include: "#value"
          }, {
            include: "#comments"
          }, {
            token: "text",
            regex: /,|$/
          }, {
            token: "invalid.illegal",
            regex: /[^\s\]]/
          }, {
            defaultToken: "array"
          }]
        }],
        "#comments": [{
          token: [
            "comment.punctuation",
            "comment.line"
          ],
          regex: /(#)(.*$)/
        }, {
          token: "comment.punctuation",
          regex: /\/\*/,
          push: [{
            token: "comment.punctuation",
            regex: /\*\//,
            next: "pop"
          }, {
            defaultToken: "comment.block"
          }]
        }, {
          token: [
            "comment.punctuation",
            "comment.line"
          ],
          regex: /(\/\/)(.*$)/
        }],
        "#constant": [{
          token: "constant",
          regex: /\b(?:true|false|null)\b/
        }],
        "#keyname": [{
          token: "keyword",
          regex: /(?:[^,\{\[\}\]\s]+|"(?:[^"\\]|\\.)*")\s*(?=:)/
        }],
        "#mstring": [{
          token: "string",
          regex: /'''/,
          push: [{
            token: "string",
            regex: /'''/,
            next: "pop"
          }, {
            defaultToken: "string"
          }]
        }],
        "#number": [{
          token: "constant.numeric",
          regex: /-?(?:0|[1-9]\d*)(?:(?:\.\d+)?(?:[eE][+-]?\d+)?)?/,
          comment: "handles integer and decimal numbers"
        }],
        "#object": [{
          token: "paren.lparen",
          regex: /\{/,
          push: [{
            token: "paren.rparen",
            regex: /\}/,
            next: "pop"
          }, {
            include: "#keyname"
          }, {
            include: "#value"
          }, {
            token: "text",
            regex: /:/
          }, {
            token: "text",
            regex: /,/
          }, {
            defaultToken: "paren"
          }]
        }],
        "#rootObject": [{
          token: "paren",
          regex: /(?=\s*(?:[^,\{\[\}\]\s]+|"(?:[^"\\]|\\.)*")\s*:)/,
          push: [{
            token: "paren.rparen",
            regex: /---none---/,
            next: "pop"
          }, {
            include: "#keyname"
          }, {
            include: "#value"
          }, {
            token: "text",
            regex: /:/
          }, {
            token: "text",
            regex: /,/
          }, {
            defaultToken: "paren"
          }]
        }],
        "#string": [{
          token: "string",
          regex: /"/,
          push: [{
            token: "string",
            regex: /"/,
            next: "pop"
          }, {
            token: "constant.language.escape",
            regex: /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/
          }, {
            token: "invalid.illegal",
            regex: /\\./
          }, {
            defaultToken: "string"
          }]
        }],
        "#ustring": [{
          token: "string",
          regex: /\b[^:,0-9\-\{\[\}\]\s].*$/
        }],
        "#value": [{
          include: "#constant"
        }, {
          include: "#number"
        }, {
          include: "#string"
        }, {
          include: "#array"
        }, {
          include: "#object"
        }, {
          include: "#comments"
        }, {
          include: "#mstring"
        }, {
          include: "#ustring"
        }]
      };
      this.normalizeRules();
    };
    HjsonHighlightRules.metaData = {
      fileTypes: ["hjson"],
      foldingStartMarker: "(?x:     # turn on extended mode\n              ^    # a line beginning with\n              \\s*    # some optional space\n              [{\\[]  # the start of an object or array\n              (?!    # but not followed by\n              .*   # whatever\n              [}\\]]  # and the close of an object or array\n              ,?   # an optional comma\n              \\s*  # some optional space\n              $    # at the end of the line\n              )\n              |    # ...or...\n              [{\\[]  # the start of an object or array\n              \\s*    # some optional space\n              $    # at the end of the line\n            )",
      foldingStopMarker: "(?x:   # turn on extended mode\n             ^    # a line beginning with\n             \\s*  # some optional space\n             [}\\]]  # and the close of an object or array\n             )",
      keyEquivalent: "^~J",
      name: "Hjson",
      scopeName: "source.hjson"
    };
    oop.inherits(HjsonHighlightRules, TextHighlightRules);
    exports.HjsonHighlightRules = HjsonHighlightRules;
  }
});

// src/mode/hjson.js
var require_hjson = __commonJS({
  "src/mode/hjson.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var HjsonHighlightRules = require_hjson_highlight_rules().HjsonHighlightRules;
    var FoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = HjsonHighlightRules;
      this.foldingRules = new FoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "//";
      this.blockComment = { start: "/*", end: "*/" };
      this.$id = "ace/mode/hjson";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_hjson();

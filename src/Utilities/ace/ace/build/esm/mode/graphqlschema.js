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

// src/mode/graphqlschema_highlight_rules.js
var require_graphqlschema_highlight_rules = __commonJS({
  "src/mode/graphqlschema_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var GraphQLSchemaHighlightRules = function() {
      var keywords = "type|interface|union|enum|schema|input|implements|extends|scalar";
      var dataTypes = "Int|Float|String|ID|Boolean";
      var keywordMapper = this.createKeywordMapper({
        "keyword": keywords,
        "storage.type": dataTypes
      }, "identifier");
      this.$rules = {
        "start": [{
          token: "comment",
          regex: "#.*$"
        }, {
          token: "paren.lparen",
          regex: /[\[({]/,
          next: "start"
        }, {
          token: "paren.rparen",
          regex: /[\])}]/
        }, {
          token: keywordMapper,
          regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        }]
      };
      this.normalizeRules();
    };
    oop.inherits(GraphQLSchemaHighlightRules, TextHighlightRules);
    exports.GraphQLSchemaHighlightRules = GraphQLSchemaHighlightRules;
  }
});

// src/mode/graphqlschema.js
var require_graphqlschema = __commonJS({
  "src/mode/graphqlschema.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var GraphQLSchemaHighlightRules = require_graphqlschema_highlight_rules().GraphQLSchemaHighlightRules;
    var FoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = GraphQLSchemaHighlightRules;
      this.foldingRules = new FoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "#";
      this.$id = "ace/mode/graphqlschema";
      this.snippetFileId = "ace/snippets/graphqlschema";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_graphqlschema();

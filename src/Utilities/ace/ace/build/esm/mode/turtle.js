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

// src/mode/turtle_highlight_rules.js
var require_turtle_highlight_rules = __commonJS({
  "src/mode/turtle_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var TurtleHighlightRules = function() {
      this.$rules = {
        start: [{
          include: "#comments"
        }, {
          include: "#strings"
        }, {
          include: "#base-prefix-declarations"
        }, {
          include: "#string-language-suffixes"
        }, {
          include: "#string-datatype-suffixes"
        }, {
          include: "#relative-urls"
        }, {
          include: "#xml-schema-types"
        }, {
          include: "#rdf-schema-types"
        }, {
          include: "#owl-types"
        }, {
          include: "#qnames"
        }, {
          include: "#punctuation-operators"
        }],
        "#base-prefix-declarations": [{
          token: "keyword.other.prefix.turtle",
          regex: /@(?:base|prefix)/
        }],
        "#comments": [{
          token: [
            "punctuation.definition.comment.turtle",
            "comment.line.hash.turtle"
          ],
          regex: /(#)(.*$)/
        }],
        "#owl-types": [{
          token: "support.type.datatype.owl.turtle",
          regex: /owl:[a-zA-Z]+/
        }],
        "#punctuation-operators": [{
          token: "keyword.operator.punctuation.turtle",
          regex: /;|,|\.|\(|\)|\[|\]/
        }],
        "#qnames": [{
          token: "entity.name.other.qname.turtle",
          regex: /(?:[a-zA-Z][-_a-zA-Z0-9]*)?:(?:[_a-zA-Z][-_a-zA-Z0-9]*)?/
        }],
        "#rdf-schema-types": [{
          token: "support.type.datatype.rdf.schema.turtle",
          regex: /rdfs?:[a-zA-Z]+|(?:^|\s)a(?:\s|$)/
        }],
        "#relative-urls": [{
          token: "string.quoted.other.relative.url.turtle",
          regex: /</,
          push: [{
            token: "string.quoted.other.relative.url.turtle",
            regex: />/,
            next: "pop"
          }, {
            defaultToken: "string.quoted.other.relative.url.turtle"
          }]
        }],
        "#string-datatype-suffixes": [{
          token: "keyword.operator.datatype.suffix.turtle",
          regex: /\^\^/
        }],
        "#string-language-suffixes": [{
          token: [
            "keyword.operator.language.suffix.turtle",
            "constant.language.suffix.turtle"
          ],
          regex: /(?!")(@)([a-z]+(?:\-[a-z0-9]+)*)/
        }],
        "#strings": [{
          token: "string.quoted.triple.turtle",
          regex: /"""/,
          push: [{
            token: "string.quoted.triple.turtle",
            regex: /"""/,
            next: "pop"
          }, {
            defaultToken: "string.quoted.triple.turtle"
          }]
        }, {
          token: "string.quoted.double.turtle",
          regex: /"/,
          push: [{
            token: "string.quoted.double.turtle",
            regex: /"/,
            next: "pop"
          }, {
            token: "invalid.string.newline",
            regex: /$/
          }, {
            token: "constant.character.escape.turtle",
            regex: /\\./
          }, {
            defaultToken: "string.quoted.double.turtle"
          }]
        }],
        "#xml-schema-types": [{
          token: "support.type.datatype.xml.schema.turtle",
          regex: /xsd?:[a-z][a-zA-Z]+/
        }]
      };
      this.normalizeRules();
    };
    TurtleHighlightRules.metaData = {
      fileTypes: ["ttl", "nt"],
      name: "Turtle",
      scopeName: "source.turtle"
    };
    oop.inherits(TurtleHighlightRules, TextHighlightRules);
    exports.TurtleHighlightRules = TurtleHighlightRules;
  }
});

// src/mode/turtle.js
var require_turtle = __commonJS({
  "src/mode/turtle.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var TurtleHighlightRules = require_turtle_highlight_rules().TurtleHighlightRules;
    var FoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = TurtleHighlightRules;
      this.foldingRules = new FoldMode();
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.$id = "ace/mode/turtle";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_turtle();

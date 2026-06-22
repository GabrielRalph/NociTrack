import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
import {
  require_doc_comment_highlight_rules
} from "../chunk-XTXP6FMQ.js";
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
import {
  require_lang
} from "../chunk-NNGFYYI3.js";
import "../chunk-3SNEZHBJ.js";
import "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/dot_highlight_rules.js
var require_dot_highlight_rules = __commonJS({
  "src/mode/dot_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var lang = require_lang();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var DocCommentHighlightRules = require_doc_comment_highlight_rules().DocCommentHighlightRules;
    var DotHighlightRules = function() {
      var keywords = lang.arrayToMap(
        "strict|node|edge|graph|digraph|subgraph".split("|")
      );
      var attributes = lang.arrayToMap(
        "damping|k|url|area|arrowhead|arrowsize|arrowtail|aspect|bb|bgcolor|center|charset|clusterrank|color|colorscheme|comment|compound|concentrate|constraint|decorate|defaultdist|dim|dimen|dir|diredgeconstraints|distortion|dpi|edgeurl|edgehref|edgetarget|edgetooltip|epsilon|esep|fillcolor|fixedsize|fontcolor|fontname|fontnames|fontpath|fontsize|forcelabels|gradientangle|group|headurl|head_lp|headclip|headhref|headlabel|headport|headtarget|headtooltip|height|href|id|image|imagepath|imagescale|label|labelurl|label_scheme|labelangle|labeldistance|labelfloat|labelfontcolor|labelfontname|labelfontsize|labelhref|labeljust|labelloc|labeltarget|labeltooltip|landscape|layer|layerlistsep|layers|layerselect|layersep|layout|len|levels|levelsgap|lhead|lheight|lp|ltail|lwidth|margin|maxiter|mclimit|mindist|minlen|mode|model|mosek|nodesep|nojustify|normalize|nslimit|nslimit1|ordering|orientation|outputorder|overlap|overlap_scaling|pack|packmode|pad|page|pagedir|pencolor|penwidth|peripheries|pin|pos|quadtree|quantum|rank|rankdir|ranksep|ratio|rects|regular|remincross|repulsiveforce|resolution|root|rotate|rotation|samehead|sametail|samplepoints|scale|searchsize|sep|shape|shapefile|showboxes|sides|size|skew|smoothing|sortv|splines|start|style|stylesheet|tailurl|tail_lp|tailclip|tailhref|taillabel|tailport|tailtarget|tailtooltip|target|tooltip|truecolor|vertices|viewport|voro_margin|weight|width|xlabel|xlp|z".split("|")
      );
      this.$rules = {
        "start": [
          {
            token: "comment",
            regex: /\/\/.*$/
          },
          {
            token: "comment",
            regex: /#.*$/
          },
          {
            token: "comment",
            // multi line comment
            merge: true,
            regex: /\/\*/,
            next: "comment"
          },
          {
            token: "string",
            regex: "'(?=.)",
            next: "qstring"
          },
          {
            token: "string",
            regex: '"(?=.)',
            next: "qqstring"
          },
          {
            token: "constant.numeric",
            regex: /[+\-]?\d+(?:(?:\.\d*)?(?:[eE][+\-]?\d+)?)?\b/
          },
          {
            token: "keyword.operator",
            regex: /\+|=|\->/
          },
          {
            token: "punctuation.operator",
            regex: /,|;/
          },
          {
            token: "paren.lparen",
            regex: /[\[{]/
          },
          {
            token: "paren.rparen",
            regex: /[\]}]/
          },
          {
            token: "comment",
            regex: /^#!.*$/
          },
          {
            token: function(value) {
              if (keywords.hasOwnProperty(value.toLowerCase())) {
                return "keyword";
              } else if (attributes.hasOwnProperty(value.toLowerCase())) {
                return "variable";
              } else {
                return "text";
              }
            },
            regex: "\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"
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
        ],
        "qqstring": [
          {
            token: "string",
            regex: '[^"\\\\]+',
            merge: true
          },
          {
            token: "string",
            regex: "\\\\$",
            next: "qqstring",
            merge: true
          },
          {
            token: "string",
            regex: '"|$',
            next: "start",
            merge: true
          }
        ],
        "qstring": [
          {
            token: "string",
            regex: "[^'\\\\]+",
            merge: true
          },
          {
            token: "string",
            regex: "\\\\$",
            next: "qstring",
            merge: true
          },
          {
            token: "string",
            regex: "'|$",
            next: "start",
            merge: true
          }
        ]
      };
    };
    oop.inherits(DotHighlightRules, TextHighlightRules);
    exports.DotHighlightRules = DotHighlightRules;
  }
});

// src/mode/dot.js
var require_dot = __commonJS({
  "src/mode/dot.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var DotHighlightRules = require_dot_highlight_rules().DotHighlightRules;
    var DotFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = DotHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.foldingRules = new DotFoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = ["//", "#"];
      this.blockComment = { start: "/*", end: "*/" };
      this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;
        var endState = tokenizedLine.state;
        if (tokens.length && tokens[tokens.length - 1].type == "comment") {
          return indent;
        }
        if (state == "start") {
          var match = line.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);
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
      this.$id = "ace/mode/dot";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_dot();

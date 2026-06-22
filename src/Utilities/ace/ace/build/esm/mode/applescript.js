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

// src/mode/applescript_highlight_rules.js
var require_applescript_highlight_rules = __commonJS({
  "src/mode/applescript_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var AppleScriptHighlightRules = function() {
      var keywords = "about|above|after|against|and|around|as|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|contain|contains|continue|copy|div|does|eighth|else|end|equal|equals|error|every|exit|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|into|is|it|its|last|local|me|middle|mod|my|ninth|not|of|on|onto|or|over|prop|property|put|ref|reference|repeat|returning|script|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|try|until|where|while|whose|with|without";
      var builtinConstants = "AppleScript|false|linefeed|return|pi|quote|result|space|tab|true";
      var builtinFunctions = "activate|beep|count|delay|launch|log|offset|read|round|run|say|summarize|write";
      var builtinTypes = "alias|application|boolean|class|constant|date|file|integer|list|number|real|record|string|text|character|characters|contents|day|frontmost|id|item|length|month|name|paragraph|paragraphs|rest|reverse|running|time|version|weekday|word|words|year";
      var keywordMapper = this.createKeywordMapper({
        "support.function": builtinFunctions,
        "constant.language": builtinConstants,
        "support.type": builtinTypes,
        "keyword": keywords
      }, "identifier");
      this.$rules = {
        "start": [
          {
            token: "comment",
            regex: "--.*$"
          },
          {
            token: "comment",
            // multi line comment
            regex: "\\(\\*",
            next: "comment"
          },
          {
            token: "string",
            // " string
            regex: '".*?"'
          },
          {
            token: "support.type",
            regex: "\\b(POSIX file|POSIX path|(date|time) string|quoted form)\\b"
          },
          {
            token: "support.function",
            regex: "\\b(clipboard info|the clipboard|info for|list (disks|folder)|mount volume|path to|(close|open for) access|(get|set) eof|current date|do shell script|get volume settings|random number|set volume|system attribute|system info|time to GMT|(load|run|store) script|scripting components|ASCII (character|number)|localized string|choose (application|color|file|file name|folder|from list|remote application|URL)|display (alert|dialog))\\b|^\\s*return\\b"
          },
          {
            token: "constant.language",
            regex: "\\b(text item delimiters|current application|missing value)\\b"
          },
          {
            token: "keyword",
            regex: "\\b(apart from|aside from|instead of|out of|greater than|isn't|(doesn't|does not) (equal|come before|come after|contain)|(greater|less) than( or equal)?|(starts?|ends|begins?) with|contained by|comes (before|after)|a (ref|reference))\\b"
          },
          {
            token: keywordMapper,
            regex: "[a-zA-Z][a-zA-Z0-9_]*\\b"
          }
        ],
        "comment": [
          {
            token: "comment",
            // closing comment
            regex: "\\*\\)",
            next: "start"
          },
          {
            defaultToken: "comment"
          }
        ]
      };
      this.normalizeRules();
    };
    oop.inherits(AppleScriptHighlightRules, TextHighlightRules);
    exports.AppleScriptHighlightRules = AppleScriptHighlightRules;
  }
});

// src/mode/applescript.js
var require_applescript = __commonJS({
  "src/mode/applescript.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var AppleScriptHighlightRules = require_applescript_highlight_rules().AppleScriptHighlightRules;
    var FoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = AppleScriptHighlightRules;
      this.foldingRules = new FoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "--";
      this.blockComment = { start: "(*", end: "*)" };
      this.$id = "ace/mode/applescript";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_applescript();

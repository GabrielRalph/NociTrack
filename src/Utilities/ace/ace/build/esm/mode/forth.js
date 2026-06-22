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

// src/mode/forth_highlight_rules.js
var require_forth_highlight_rules = __commonJS({
  "src/mode/forth_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var ForthHighlightRules = function() {
      this.$rules = {
        start: [{ include: "#forth" }],
        "#comment": [
          {
            token: "comment.line.double-dash.forth",
            regex: "(?:^|\\s)--\\s.*$",
            comment: "line comments for iForth"
          },
          {
            token: "comment.line.backslash.forth",
            regex: "(?:^|\\s)\\\\[\\s\\S]*$",
            comment: "ANSI line comment"
          },
          {
            token: "comment.line.backslash-g.forth",
            regex: "(?:^|\\s)\\\\[Gg] .*$",
            comment: "gForth line comment"
          },
          {
            token: "comment.block.forth",
            regex: "(?:^|\\s)\\(\\*(?=\\s|$)",
            push: [
              {
                token: "comment.block.forth",
                regex: "(?:^|\\s)\\*\\)(?=\\s|$)",
                next: "pop"
              },
              { defaultToken: "comment.block.forth" }
            ],
            comment: "multiline comments for iForth"
          },
          {
            token: "comment.block.documentation.forth",
            regex: "\\bDOC\\b",
            caseInsensitive: true,
            push: [
              {
                token: "comment.block.documentation.forth",
                regex: "\\bENDDOC\\b",
                caseInsensitive: true,
                next: "pop"
              },
              { defaultToken: "comment.block.documentation.forth" }
            ],
            comment: "documentation comments for iForth"
          },
          {
            token: "comment.line.parentheses.forth",
            regex: "(?:^|\\s)\\.?\\( [^)]*\\)",
            comment: "ANSI line comment"
          }
        ],
        "#constant": [
          {
            token: "constant.language.forth",
            regex: "(?:^|\\s)(?:TRUE|FALSE|BL|PI|CELL|C/L|R/O|W/O|R/W)(?=\\s|$)",
            caseInsensitive: true
          },
          {
            token: "constant.numeric.forth",
            regex: "(?:^|\\s)[$#%]?[-+]?[0-9]+(?:\\.[0-9]*e-?[0-9]+|\\.?[0-9a-fA-F]*)(?=\\s|$)"
          },
          {
            token: "constant.character.forth",
            regex: `(?:^|\\s)(?:[&^]\\S|(?:"|')\\S(?:"|'))(?=\\s|$)`
          }
        ],
        "#forth": [
          { include: "#constant" },
          { include: "#comment" },
          { include: "#string" },
          { include: "#word" },
          { include: "#variable" },
          { include: "#storage" },
          { include: "#word-def" }
        ],
        "#storage": [{
          token: "storage.type.forth",
          regex: "(?:^|\\s)(?:2CONSTANT|2VARIABLE|ALIAS|CONSTANT|CREATE-INTERPRET/COMPILE[:]?|CREATE|DEFER|FCONSTANT|FIELD|FVARIABLE|USER|VALUE|VARIABLE|VOCABULARY)(?=\\s|$)",
          caseInsensitive: true
        }],
        "#string": [
          {
            token: "string.quoted.double.forth",
            regex: '(ABORT" |BREAK" |\\." |C" |0"|S\\\\?" )([^"]+")',
            caseInsensitive: true
          },
          {
            token: "string.unquoted.forth",
            regex: "(?:INCLUDE|NEEDS|REQUIRE|USE)[ ]\\S+(?=\\s|$)",
            caseInsensitive: true
          }
        ],
        "#variable": [{
          token: "variable.language.forth",
          regex: "\\b(?:I|J)\\b",
          caseInsensitive: true
        }],
        "#word": [
          {
            token: "keyword.control.immediate.forth",
            regex: "(?:^|\\s)\\[(?:\\?DO|\\+LOOP|AGAIN|BEGIN|DEFINED|DO|ELSE|ENDIF|FOR|IF|IFDEF|IFUNDEF|LOOP|NEXT|REPEAT|THEN|UNTIL|WHILE)\\](?=\\s|$)",
            caseInsensitive: true
          },
          {
            token: "keyword.other.immediate.forth",
            regex: "(?:^|\\s)(?:COMPILE-ONLY|IMMEDIATE|IS|RESTRICT|TO|WHAT'S|])(?=\\s|$)",
            caseInsensitive: true
          },
          {
            token: "keyword.control.compile-only.forth",
            regex: '(?:^|\\s)(?:-DO|\\-LOOP|\\?DO|\\?LEAVE|\\+DO|\\+LOOP|ABORT\\"|AGAIN|AHEAD|BEGIN|CASE|DO|ELSE|ENDCASE|ENDIF|ENDOF|ENDTRY\\-IFERROR|ENDTRY|FOR|IF|IFERROR|LEAVE|LOOP|NEXT|RECOVER|REPEAT|RESTORE|THEN|TRY|U\\-DO|U\\+DO|UNTIL|WHILE)(?=\\s|$)',
            caseInsensitive: true
          },
          {
            token: "keyword.other.compile-only.forth",
            regex: "(?:^|\\s)(?:\\?DUP-0=-IF|\\?DUP-IF|\\)|\\[|\\['\\]|\\[CHAR\\]|\\[COMPILE\\]|\\[IS\\]|\\[TO\\]|<COMPILATION|<INTERPRETATION|ASSERT\\(|ASSERT0\\(|ASSERT1\\(|ASSERT2\\(|ASSERT3\\(|COMPILATION>|DEFERS|DOES>|INTERPRETATION>|OF|POSTPONE)(?=\\s|$)",
            caseInsensitive: true
          },
          {
            token: "keyword.other.non-immediate.forth",
            regex: "(?:^|\\s)(?:'|<IS>|<TO>|CHAR|END-STRUCT|INCLUDE[D]?|LOAD|NEEDS|REQUIRE[D]?|REVISION|SEE|STRUCT|THRU|USE)(?=\\s|$)",
            caseInsensitive: true
          },
          {
            token: "keyword.other.warning.forth",
            regex: '(?:^|\\s)(?:~~|BREAK:|BREAK"|DBG)(?=\\s|$)',
            caseInsensitive: true
          }
        ],
        "#word-def": [{
          token: [
            "keyword.other.compile-only.forth",
            "keyword.other.compile-only.forth",
            "meta.block.forth",
            "entity.name.function.forth"
          ],
          regex: "(:NONAME)|(^:|\\s:)(\\s)(\\S+)(?=\\s|$)",
          caseInsensitive: true,
          push: [
            {
              token: "keyword.other.compile-only.forth",
              regex: ";(?:CODE)?",
              caseInsensitive: true,
              next: "pop"
            },
            { include: "#constant" },
            { include: "#comment" },
            { include: "#string" },
            { include: "#word" },
            { include: "#variable" },
            { include: "#storage" },
            { defaultToken: "meta.block.forth" }
          ]
        }]
      };
      this.normalizeRules();
    };
    ForthHighlightRules.metaData = {
      fileTypes: ["frt", "fs", "ldr", "fth", "4th"],
      foldingStartMarker: "/\\*\\*|\\{\\s*$",
      foldingStopMarker: "\\*\\*/|^\\s*\\}",
      keyEquivalent: "^~F",
      name: "Forth",
      scopeName: "source.forth"
    };
    oop.inherits(ForthHighlightRules, TextHighlightRules);
    exports.ForthHighlightRules = ForthHighlightRules;
  }
});

// src/mode/forth.js
var require_forth = __commonJS({
  "src/mode/forth.js"(exports) {
    var oop = require_oop();
    var TextMode = require_text().Mode;
    var ForthHighlightRules = require_forth_highlight_rules().ForthHighlightRules;
    var FoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = ForthHighlightRules;
      this.foldingRules = new FoldMode();
      this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function() {
      this.lineCommentStart = "--";
      this.blockComment = null;
      this.$id = "ace/mode/forth";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_forth();

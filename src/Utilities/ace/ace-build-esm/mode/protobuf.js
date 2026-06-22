import {
  require_c_cpp
} from "../chunk-72U7Z4CG.js";
import "../chunk-GCHQVQQ6.js";
import "../chunk-5GQPFTLG.js";
import "../chunk-KWFYXSQI.js";
import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
import "../chunk-JEWW6F7O.js";
import {
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

// src/mode/protobuf_highlight_rules.js
var require_protobuf_highlight_rules = __commonJS({
  "src/mode/protobuf_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var TextHighlightRules = require_text_highlight_rules().TextHighlightRules;
    var ProtobufHighlightRules = function() {
      var builtinTypes = "double|float|int32|int64|uint32|uint64|sint32|sint64|fixed32|fixed64|sfixed32|sfixed64|bool|string|bytes";
      var keywordDeclaration = "message|required|optional|repeated|package|import|option|enum";
      var keywordMapper = this.createKeywordMapper({
        "keyword.declaration.protobuf": keywordDeclaration,
        "support.type": builtinTypes
      }, "identifier");
      this.$rules = {
        "start": [{
          token: "comment",
          regex: /\/\/.*$/
        }, {
          token: "comment",
          regex: /\/\*/,
          next: "comment"
        }, {
          token: "constant",
          regex: "<[^>]+>"
        }, {
          regex: "=",
          token: "keyword.operator.assignment.protobuf"
        }, {
          token: "string",
          // single line
          regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
        }, {
          token: "string",
          // single line
          regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
        }, {
          token: "constant.numeric",
          // hex
          regex: "0[xX][0-9a-fA-F]+\\b"
        }, {
          token: "constant.numeric",
          // float
          regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
        }, {
          token: keywordMapper,
          regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        }],
        "comment": [{
          token: "comment",
          // closing comment
          regex: "\\*\\/",
          next: "start"
        }, {
          defaultToken: "comment"
        }]
      };
      this.normalizeRules();
    };
    oop.inherits(ProtobufHighlightRules, TextHighlightRules);
    exports.ProtobufHighlightRules = ProtobufHighlightRules;
  }
});

// src/mode/protobuf.js
var require_protobuf = __commonJS({
  "src/mode/protobuf.js"(exports) {
    var oop = require_oop();
    var CMode = require_c_cpp().Mode;
    var ProtobufHighlightRules = require_protobuf_highlight_rules().ProtobufHighlightRules;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      CMode.call(this);
      this.foldingRules = new CStyleFoldMode();
      this.HighlightRules = ProtobufHighlightRules;
    };
    oop.inherits(Mode, CMode);
    (function() {
      this.lineCommentStart = "//";
      this.blockComment = { start: "/*", end: "*/" };
      this.$id = "ace/mode/protobuf";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_protobuf();

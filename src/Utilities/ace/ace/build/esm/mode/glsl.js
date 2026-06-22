import {
  require_c_cpp
} from "../chunk-7XOPRG3C.js";
import {
  require_c_cpp_highlight_rules
} from "../chunk-5U6N3BKW.js";
import {
  require_matching_brace_outdent
} from "../chunk-5GQPFTLG.js";
import "../chunk-XTXP6FMQ.js";
import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
import "../chunk-JEWW6F7O.js";
import "../chunk-QXTEMBPD.js";
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

// src/mode/glsl_highlight_rules.js
var require_glsl_highlight_rules = __commonJS({
  "src/mode/glsl_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var c_cppHighlightRules = require_c_cpp_highlight_rules().c_cppHighlightRules;
    var glslHighlightRules = function() {
      var keywords = "attribute|const|uniform|varying|break|continue|do|for|while|if|else|in|out|inout|float|int|void|bool|true|false|lowp|mediump|highp|precision|invariant|discard|return|mat2|mat3|mat4|vec2|vec3|vec4|ivec2|ivec3|ivec4|bvec2|bvec3|bvec4|sampler2D|samplerCube|struct";
      var buildinConstants = "radians|degrees|sin|cos|tan|asin|acos|atan|pow|exp|log|exp2|log2|sqrt|inversesqrt|abs|sign|floor|ceil|fract|mod|min|max|clamp|mix|step|smoothstep|length|distance|dot|cross|normalize|faceforward|reflect|refract|matrixCompMult|lessThan|lessThanEqual|greaterThan|greaterThanEqual|equal|notEqual|any|all|not|dFdx|dFdy|fwidth|texture2D|texture2DProj|texture2DLod|texture2DProjLod|textureCube|textureCubeLod|gl_MaxVertexAttribs|gl_MaxVertexUniformVectors|gl_MaxVaryingVectors|gl_MaxVertexTextureImageUnits|gl_MaxCombinedTextureImageUnits|gl_MaxTextureImageUnits|gl_MaxFragmentUniformVectors|gl_MaxDrawBuffers|gl_DepthRangeParameters|gl_DepthRange|gl_Position|gl_PointSize|gl_FragCoord|gl_FrontFacing|gl_PointCoord|gl_FragColor|gl_FragData";
      var keywordMapper = this.createKeywordMapper({
        "variable.language": "this",
        "keyword": keywords,
        "constant.language": buildinConstants
      }, "identifier");
      this.$rules = new c_cppHighlightRules().$rules;
      this.$rules.start.forEach(function(rule) {
        if (typeof rule.token == "function")
          rule.token = keywordMapper;
      });
    };
    oop.inherits(glslHighlightRules, c_cppHighlightRules);
    exports.glslHighlightRules = glslHighlightRules;
  }
});

// src/mode/glsl.js
var require_glsl = __commonJS({
  "src/mode/glsl.js"(exports) {
    var oop = require_oop();
    var CMode = require_c_cpp().Mode;
    var glslHighlightRules = require_glsl_highlight_rules().glslHighlightRules;
    var MatchingBraceOutdent = require_matching_brace_outdent().MatchingBraceOutdent;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      this.HighlightRules = glslHighlightRules;
      this.$outdent = new MatchingBraceOutdent();
      this.$behaviour = this.$defaultBehaviour;
      this.foldingRules = new CStyleFoldMode();
    };
    oop.inherits(Mode, CMode);
    (function() {
      this.$id = "ace/mode/glsl";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_glsl();

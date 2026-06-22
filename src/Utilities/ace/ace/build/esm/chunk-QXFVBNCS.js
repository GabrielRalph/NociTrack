import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/layer/text_util.js
var require_text_util = __commonJS({
  "src/layer/text_util.js"(exports) {
    var textTokens = /* @__PURE__ */ new Set(["text", "rparen", "lparen"]);
    exports.isTextToken = function(tokenType) {
      return textTokens.has(tokenType);
    };
  }
});

export {
  require_text_util
};

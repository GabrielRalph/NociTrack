import {
  require_text_util
} from "../chunk-QXFVBNCS.js";
import {
  require_tokenizer
} from "../chunk-VVYM7U3C.js";
import "../chunk-BPTL7YIQ.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/ext/simple_tokenizer.js
var require_simple_tokenizer = __commonJS({
  "src/ext/simple_tokenizer.js"(exports) {
    var { Tokenizer } = require_tokenizer();
    var isTextToken = require_text_util().isTextToken;
    var SimpleTokenizer = class {
      /**
       * @param {string} content 
       * @param {Tokenizer} tokenizer 
       */
      constructor(content, tokenizer) {
        this._lines = content.split(/\r\n|\r|\n/);
        this._states = [];
        this._tokenizer = tokenizer;
      }
      /**
       * @param {number} row 
       * @returns {import("../../ace-internal").Ace.Token[]}
       */
      getTokens(row) {
        const line = this._lines[row];
        const previousState = this._states[row - 1];
        const data = this._tokenizer.getLineTokens(line, previousState);
        this._states[row] = data.state;
        return data.tokens;
      }
      /**
       * @returns {number} 
       */
      getLength() {
        return this._lines.length;
      }
    };
    function tokenize(content, highlightRules) {
      const tokenizer = new SimpleTokenizer(content, new Tokenizer(highlightRules.getRules()));
      let result = [];
      for (let lineIndex = 0; lineIndex < tokenizer.getLength(); lineIndex++) {
        const lineTokens = tokenizer.getTokens(lineIndex);
        result.push(lineTokens.map((token) => ({
          className: isTextToken(token.type) ? void 0 : "ace_" + token.type.replace(/\./g, " ace_"),
          value: token.value
        })));
      }
      return result;
    }
    exports.tokenize = tokenize;
  }
});
export default require_simple_tokenizer();

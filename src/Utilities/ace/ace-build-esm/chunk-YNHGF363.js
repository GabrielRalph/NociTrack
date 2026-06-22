import {
  require_behaviour,
  require_cstyle
} from "./chunk-LMYBRGOM.js";
import {
  require_token_iterator
} from "./chunk-GLBKRGPE.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/behaviour/css.js
var require_css = __commonJS({
  "src/mode/behaviour/css.js"(exports) {
    "use strict";
    var oop = require_oop();
    var Behaviour = require_behaviour().Behaviour;
    var CstyleBehaviour = require_cstyle().CstyleBehaviour;
    var TokenIterator = require_token_iterator().TokenIterator;
    var CssBehaviour = function() {
      this.inherit(CstyleBehaviour);
      this.add("colon", "insertion", function(state, action, editor, session, text) {
        if (text === ":" && editor.selection.isEmpty()) {
          var cursor = editor.getCursorPosition();
          var iterator = new TokenIterator(session, cursor.row, cursor.column);
          var token = iterator.getCurrentToken();
          if (token && token.value.match(/\s+/)) {
            token = iterator.stepBackward();
          }
          if (token && token.type === "support.type") {
            var line = session.doc.getLine(cursor.row);
            var rightChar = line.substring(cursor.column, cursor.column + 1);
            if (rightChar === ":") {
              return {
                text: "",
                selection: [1, 1]
              };
            }
            if (/^(\s+[^;]|\s*$)/.test(line.substring(cursor.column))) {
              return {
                text: ":;",
                selection: [1, 1]
              };
            }
          }
        }
      });
      this.add("colon", "deletion", function(state, action, editor, session, range) {
        var selected = session.doc.getTextRange(range);
        if (!range.isMultiLine() && selected === ":") {
          var cursor = editor.getCursorPosition();
          var iterator = new TokenIterator(session, cursor.row, cursor.column);
          var token = iterator.getCurrentToken();
          if (token && token.value.match(/\s+/)) {
            token = iterator.stepBackward();
          }
          if (token && token.type === "support.type") {
            var line = session.doc.getLine(range.start.row);
            var rightChar = line.substring(range.end.column, range.end.column + 1);
            if (rightChar === ";") {
              range.end.column++;
              return range;
            }
          }
        }
      });
      this.add("semicolon", "insertion", function(state, action, editor, session, text) {
        if (text === ";" && editor.selection.isEmpty()) {
          var cursor = editor.getCursorPosition();
          var line = session.doc.getLine(cursor.row);
          var rightChar = line.substring(cursor.column, cursor.column + 1);
          if (rightChar === ";") {
            return {
              text: "",
              selection: [1, 1]
            };
          }
        }
      });
      this.add("!important", "insertion", function(state, action, editor, session, text) {
        if (text === "!" && editor.selection.isEmpty()) {
          var cursor = editor.getCursorPosition();
          var line = session.doc.getLine(cursor.row);
          if (/^\s*(;|}|$)/.test(line.substring(cursor.column))) {
            return {
              text: "!important",
              selection: [10, 10]
            };
          }
        }
      });
    };
    oop.inherits(CssBehaviour, CstyleBehaviour);
    exports.CssBehaviour = CssBehaviour;
  }
});

export {
  require_css
};

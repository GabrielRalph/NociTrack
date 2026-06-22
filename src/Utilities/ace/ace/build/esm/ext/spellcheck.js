import {
  require_editor
} from "../chunk-LGRMV7JP.js";
import "../chunk-XUCFNKUQ.js";
import "../chunk-RJROKZFL.js";
import "../chunk-QXTEMBPD.js";
import "../chunk-VVYM7U3C.js";
import "../chunk-GLBKRGPE.js";
import "../chunk-DWD5Y233.js";
import {
  require_event
} from "../chunk-55AGPRH6.js";
import "../chunk-4SKNBIPH.js";
import {
  require_config
} from "../chunk-WVZ3WZY2.js";
import "../chunk-ZYSXI253.js";
import "../chunk-BPTL7YIQ.js";
import "../chunk-MF4T7I5J.js";
import "../chunk-WAWTRYJW.js";
import "../chunk-CVMYQKGX.js";
import "../chunk-NNGFYYI3.js";
import "../chunk-3SNEZHBJ.js";
import "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/ext/spellcheck.js
var require_spellcheck = __commonJS({
  "src/ext/spellcheck.js"(exports) {
    var event = require_event();
    exports.contextMenuHandler = function(e) {
      var host = e.target;
      var text = host.textInput.getElement();
      if (!host.selection.isEmpty())
        return;
      var c = host.getCursorPosition();
      var r = host.session.getWordRange(c.row, c.column);
      var w = host.session.getTextRange(r);
      host.session.tokenRe.lastIndex = 0;
      if (!host.session.tokenRe.test(w))
        return;
      var PLACEHOLDER = "";
      var value = w + " " + PLACEHOLDER;
      text.value = value;
      text.setSelectionRange(w.length, w.length + 1);
      text.setSelectionRange(0, 0);
      text.setSelectionRange(0, w.length);
      var afterKeydown = false;
      event.addListener(text, "keydown", function onKeydown() {
        event.removeListener(text, "keydown", onKeydown);
        afterKeydown = true;
      });
      host.textInput.setInputHandler(function(newVal) {
        if (newVal == value)
          return "";
        if (newVal.lastIndexOf(value, 0) === 0)
          return newVal.slice(value.length);
        if (newVal.substr(text.selectionEnd) == value)
          return newVal.slice(0, -value.length);
        if (newVal.slice(-2) == PLACEHOLDER) {
          var val = newVal.slice(0, -2);
          if (val.slice(-1) == " ") {
            if (afterKeydown)
              return val.substring(0, text.selectionEnd);
            val = val.slice(0, -1);
            host.session.replace(r, val);
            return "";
          }
        }
        return newVal;
      });
    };
    var Editor = require_editor().Editor;
    require_config().defineOptions(Editor.prototype, "editor", {
      spellcheck: {
        set: function(val) {
          var text = this.textInput.getElement();
          text.spellcheck = !!val;
          if (!val)
            this.removeListener("nativecontextmenu", exports.contextMenuHandler);
          else
            this.on("nativecontextmenu", exports.contextMenuHandler);
        },
        value: true
      }
    });
  }
});
export default require_spellcheck();

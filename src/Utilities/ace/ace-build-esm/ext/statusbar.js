import {
  require_dom
} from "../chunk-MUUMEFKV.js";
import {
  require_lang
} from "../chunk-NNGFYYI3.js";
import "../chunk-3SNEZHBJ.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/ext/statusbar.js
var require_statusbar = __commonJS({
  "src/ext/statusbar.js"(exports) {
    var dom = require_dom();
    var lang = require_lang();
    var StatusBar = class {
      /**
       * @param {Editor} editor
       * @param {HTMLElement} parentNode
       */
      constructor(editor, parentNode) {
        this.element = dom.createElement("div");
        this.element.className = "ace_status-indicator";
        this.element.style.cssText = "display: inline-block;";
        parentNode.appendChild(this.element);
        var statusUpdate = lang.delayedCall(function() {
          this.updateStatus(editor);
        }.bind(this)).schedule.bind(null, 100);
        editor.on("changeStatus", statusUpdate);
        editor.on("changeSelection", statusUpdate);
        editor.on("keyboardActivity", statusUpdate);
      }
      /**
       * @param {Editor} editor
       */
      updateStatus(editor) {
        var status = [];
        function add(str, separator) {
          str && status.push(str, separator || "|");
        }
        add(editor.keyBinding.getStatusText(editor));
        if (editor.commands.recording)
          add("REC");
        var sel = editor.selection;
        var c = sel.lead;
        if (!sel.isEmpty()) {
          var r = editor.getSelectionRange();
          add("(" + (r.end.row - r.start.row) + ":" + (r.end.column - r.start.column) + ")", " ");
        }
        add(c.row + ":" + c.column, " ");
        if (sel.rangeCount)
          add("[" + sel.rangeCount + "]", " ");
        status.pop();
        this.element.textContent = status.join("");
      }
    };
    exports.StatusBar = StatusBar;
  }
});
export default require_statusbar();

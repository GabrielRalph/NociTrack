import {
  require_editor
} from "../chunk-LGRMV7JP.js";
import "../chunk-XUCFNKUQ.js";
import "../chunk-RJROKZFL.js";
import "../chunk-QXTEMBPD.js";
import "../chunk-VVYM7U3C.js";
import "../chunk-GLBKRGPE.js";
import "../chunk-DWD5Y233.js";
import "../chunk-55AGPRH6.js";
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

// src/ext/linking.js
var require_linking = __commonJS({
  "src/ext/linking.js"(exports) {
    var Editor = require_editor().Editor;
    require_config().defineOptions(Editor.prototype, "editor", {
      enableLinking: {
        set: function(val) {
          if (val) {
            this.on("click", onClick);
            this.on("mousemove", onMouseMove);
          } else {
            this.off("click", onClick);
            this.off("mousemove", onMouseMove);
          }
        },
        value: false
      }
    });
    exports.previousLinkingHover = false;
    function onMouseMove(e) {
      var editor = e.editor;
      var ctrl = e.getAccelKey();
      if (ctrl) {
        var editor = e.editor;
        var docPos = e.getDocumentPosition();
        var session = editor.session;
        var token = session.getTokenAt(docPos.row, docPos.column);
        if (exports.previousLinkingHover && exports.previousLinkingHover != token) {
          editor._emit("linkHoverOut");
        }
        editor._emit("linkHover", { position: docPos, token });
        exports.previousLinkingHover = token;
      } else if (exports.previousLinkingHover) {
        editor._emit("linkHoverOut");
        exports.previousLinkingHover = false;
      }
    }
    function onClick(e) {
      var ctrl = e.getAccelKey();
      var button = e.getButton();
      if (button == 0 && ctrl) {
        var editor = e.editor;
        var docPos = e.getDocumentPosition();
        var session = editor.session;
        var token = session.getTokenAt(docPos.row, docPos.column);
        editor._emit("linkClick", { position: docPos, token });
      }
    }
  }
});
export default require_linking();

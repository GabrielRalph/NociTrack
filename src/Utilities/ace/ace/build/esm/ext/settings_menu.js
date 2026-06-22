import {
  require_options
} from "../chunk-NXELD77J.js";
import "../chunk-UBG4ZBJ6.js";
import {
  require_overlay_page
} from "../chunk-KEEUEV7D.js";
import "../chunk-UXAVAYVU.js";
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
import "../chunk-WVZ3WZY2.js";
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

// src/ext/settings_menu.js
var require_settings_menu = __commonJS({
  "src/ext/settings_menu.js"(exports, module) {
    var OptionPanel = require_options().OptionPanel;
    var overlayPage = require_overlay_page().overlayPage;
    function showSettingsMenu(editor) {
      if (!document.getElementById("ace_settingsmenu")) {
        var options = new OptionPanel(editor);
        options.render();
        options.container.id = "ace_settingsmenu";
        overlayPage(editor, options.container);
        options.container.querySelector("select,input,button,checkbox").focus();
      }
    }
    module.exports.init = function() {
      var Editor = require_editor().Editor;
      Editor.prototype.showSettingsMenu = function() {
        showSettingsMenu(this);
      };
    };
  }
});
export default require_settings_menu();

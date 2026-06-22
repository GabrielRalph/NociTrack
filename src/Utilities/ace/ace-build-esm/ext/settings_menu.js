import {
  require_options
} from "../chunk-CLHOVTEK.js";
import "../chunk-UBG4ZBJ6.js";
import {
  require_overlay_page
} from "../chunk-STX3X3IW.js";
import "../chunk-UXAVAYVU.js";
import {
  require_editor
} from "../chunk-RJPJVAUD.js";
import "../chunk-XUCFNKUQ.js";
import "../chunk-5IHNW3MH.js";
import "../chunk-LMYBRGOM.js";
import "../chunk-VVYM7U3C.js";
import "../chunk-GLBKRGPE.js";
import "../chunk-N3RSCRMZ.js";
import "../chunk-55AGPRH6.js";
import "../chunk-4SKNBIPH.js";
import "../chunk-7QZ52OVG.js";
import "../chunk-V24LW3SD.js";
import "../chunk-BPTL7YIQ.js";
import "../chunk-MF4T7I5J.js";
import "../chunk-WAWTRYJW.js";
import "../chunk-MUUMEFKV.js";
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

import {
  require_overlay_page
} from "../chunk-KEEUEV7D.js";
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
import {
  require_keys
} from "../chunk-4SKNBIPH.js";
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

// src/ext/menu_tools/get_editor_keyboard_shortcuts.js
var require_get_editor_keyboard_shortcuts = __commonJS({
  "src/ext/menu_tools/get_editor_keyboard_shortcuts.js"(exports, module) {
    "use strict";
    var keys = require_keys();
    module.exports.getEditorKeybordShortcuts = function(editor) {
      var KEY_MODS = keys.KEY_MODS;
      var keybindings = [];
      var commandMap = {};
      editor.keyBinding.$handlers.forEach(function(handler) {
        var ckb = handler["commandKeyBinding"];
        for (var i in ckb) {
          var key = i.replace(/(^|-)\w/g, function(x) {
            return x.toUpperCase();
          });
          var commands = ckb[i];
          if (!Array.isArray(commands))
            commands = [commands];
          commands.forEach(function(command) {
            if (typeof command != "string")
              command = command.name;
            if (commandMap[command]) {
              commandMap[command].key += "|" + key;
            } else {
              commandMap[command] = { key, command };
              keybindings.push(commandMap[command]);
            }
          });
        }
      });
      return keybindings;
    };
  }
});

// src/ext/keybinding_menu.js
var require_keybinding_menu = __commonJS({
  "src/ext/keybinding_menu.js"(exports, module) {
    var Editor = require_editor().Editor;
    function showKeyboardShortcuts(editor) {
      if (!document.getElementById("kbshortcutmenu")) {
        var overlayPage = require_overlay_page().overlayPage;
        var getEditorKeybordShortcuts = require_get_editor_keyboard_shortcuts().getEditorKeybordShortcuts;
        var kb = getEditorKeybordShortcuts(editor);
        var el = document.createElement("div");
        var commands = kb.reduce(function(previous, current) {
          return previous + '<div class="ace_optionsMenuEntry"><span class="ace_optionsMenuCommand">' + current.command + '</span> : <span class="ace_optionsMenuKey">' + current.key + "</span></div>";
        }, "");
        el.id = "kbshortcutmenu";
        el.innerHTML = "<h1>Keyboard Shortcuts</h1>" + commands + "</div>";
        overlayPage(editor, el);
      }
    }
    module.exports.init = function(editor) {
      Editor.prototype.showKeyboardShortcuts = function() {
        showKeyboardShortcuts(this);
      };
      editor.commands.addCommands([{
        name: "showKeyboardShortcuts",
        bindKey: {
          win: "Ctrl-Alt-h",
          mac: "Command-Alt-h"
        },
        exec: (
          /**
           * 
           * @param {Editor} editor
           * @param [line]
           */
          function(editor2, line) {
            editor2.showKeyboardShortcuts();
          }
        )
      }]);
    };
  }
});
export default require_keybinding_menu();

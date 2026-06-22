import {
  require_lua
} from "../chunk-43UDRJCC.js";
import {
  require_lua_highlight_rules
} from "../chunk-H3TMA63A.js";
import {
  require_html2 as require_html
} from "../chunk-2RIJSYM2.js";
import "../chunk-O7XPGT62.js";
import "../chunk-WK3XC3NH.js";
import "../chunk-U2RKG7VZ.js";
import "../chunk-QKY627QG.js";
import "../chunk-QMZLOC5Q.js";
import "../chunk-YNHGF363.js";
import {
  require_html_highlight_rules
} from "../chunk-QUH7KENW.js";
import "../chunk-CYWDEW5M.js";
import "../chunk-IWXN4N2Q.js";
import "../chunk-6CORPKBO.js";
import "../chunk-5GQPFTLG.js";
import "../chunk-67VAGNRS.js";
import "../chunk-5O3J7W3G.js";
import "../chunk-JEWW6F7O.js";
import "../chunk-LMYBRGOM.js";
import "../chunk-VVYM7U3C.js";
import "../chunk-GLBKRGPE.js";
import "../chunk-7QZ52OVG.js";
import "../chunk-V24LW3SD.js";
import "../chunk-BPTL7YIQ.js";
import "../chunk-MF4T7I5J.js";
import {
  require_oop
} from "../chunk-WAWTRYJW.js";
import "../chunk-MUUMEFKV.js";
import "../chunk-NNGFYYI3.js";
import "../chunk-3SNEZHBJ.js";
import "../chunk-VZTAWSAA.js";
import {
  __commonJS
} from "../chunk-GM7WFPGG.js";

// src/mode/luapage_highlight_rules.js
var require_luapage_highlight_rules = __commonJS({
  "src/mode/luapage_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var HtmlHighlightRules = require_html_highlight_rules().HtmlHighlightRules;
    var LuaHighlightRules = require_lua_highlight_rules().LuaHighlightRules;
    var LuaPageHighlightRules = function() {
      HtmlHighlightRules.call(this);
      var startRules = [
        {
          token: "keyword",
          regex: "<\\%\\=?",
          push: "lua-start"
        },
        {
          token: "keyword",
          regex: "<\\?lua\\=?",
          push: "lua-start"
        }
      ];
      var endRules = [
        {
          token: "keyword",
          regex: "\\%>",
          next: "pop"
        },
        {
          token: "keyword",
          regex: "\\?>",
          next: "pop"
        }
      ];
      this.embedRules(LuaHighlightRules, "lua-", endRules, ["start"]);
      for (var key in this.$rules)
        this.$rules[key].unshift.apply(this.$rules[key], startRules);
      this.normalizeRules();
    };
    oop.inherits(LuaPageHighlightRules, HtmlHighlightRules);
    exports.LuaPageHighlightRules = LuaPageHighlightRules;
  }
});

// src/mode/luapage.js
var require_luapage = __commonJS({
  "src/mode/luapage.js"(exports) {
    var oop = require_oop();
    var HtmlMode = require_html().Mode;
    var LuaMode = require_lua().Mode;
    var LuaPageHighlightRules = require_luapage_highlight_rules().LuaPageHighlightRules;
    var Mode = function() {
      HtmlMode.call(this);
      this.HighlightRules = LuaPageHighlightRules;
      this.createModeDelegates({
        "lua-": LuaMode
      });
    };
    oop.inherits(Mode, HtmlMode);
    (function() {
      this.$id = "ace/mode/luapage";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_luapage();

import {
  require_xml
} from "./chunk-OXTSUXGN.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/behaviour/html.js
var require_html = __commonJS({
  "src/mode/behaviour/html.js"(exports) {
    "use strict";
    var oop = require_oop();
    var XmlBehaviour = require_xml().XmlBehaviour;
    var HtmlBehaviour = function() {
      XmlBehaviour.call(this);
    };
    oop.inherits(HtmlBehaviour, XmlBehaviour);
    exports.HtmlBehaviour = HtmlBehaviour;
  }
});

export {
  require_html
};

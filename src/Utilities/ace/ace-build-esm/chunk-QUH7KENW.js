import {
  require_xml_highlight_rules
} from "./chunk-CYWDEW5M.js";
import {
  require_javascript_highlight_rules
} from "./chunk-IWXN4N2Q.js";
import {
  require_css_highlight_rules
} from "./chunk-6CORPKBO.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  require_lang
} from "./chunk-NNGFYYI3.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/mode/html_highlight_rules.js
var require_html_highlight_rules = __commonJS({
  "src/mode/html_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var lang = require_lang();
    var CssHighlightRules = require_css_highlight_rules().CssHighlightRules;
    var JavaScriptHighlightRules = require_javascript_highlight_rules().JavaScriptHighlightRules;
    var XmlHighlightRules = require_xml_highlight_rules().XmlHighlightRules;
    var tagMap = lang.createMap({
      a: "anchor",
      button: "form",
      form: "form",
      img: "image",
      input: "form",
      label: "form",
      option: "form",
      script: "script",
      select: "form",
      textarea: "form",
      style: "style",
      table: "table",
      tbody: "table",
      td: "table",
      tfoot: "table",
      th: "table",
      tr: "table"
    });
    var HtmlHighlightRules = function() {
      XmlHighlightRules.call(this);
      this.addRules({
        attributes: [{
          include: "tag_whitespace"
        }, {
          token: "entity.other.attribute-name.xml",
          regex: "[-_a-zA-Z0-9:.]+"
        }, {
          token: "keyword.operator.attribute-equals.xml",
          regex: "=",
          push: [{
            include: "tag_whitespace"
          }, {
            token: "string.unquoted.attribute-value.html",
            regex: "[^<>='\"`\\s]+",
            next: "pop"
          }, {
            token: "empty",
            regex: "",
            next: "pop"
          }]
        }, {
          include: "attribute_value"
        }],
        tag: [{
          token: function(start, tag) {
            var group = tagMap[tag];
            return [
              "meta.tag.punctuation." + (start == "<" ? "" : "end-") + "tag-open.xml",
              "meta.tag" + (group ? "." + group : "") + ".tag-name.xml"
            ];
          },
          regex: "(</?)([-_a-zA-Z0-9:.]+)",
          next: "tag_stuff"
        }],
        tag_stuff: [
          { include: "attributes" },
          { token: "meta.tag.punctuation.tag-close.xml", regex: "/?>", next: "start" }
        ]
      });
      this.embedTagRules(CssHighlightRules, "css-", "style");
      this.embedTagRules(new JavaScriptHighlightRules({ jsx: false }).getRules(), "js-", "script");
      if (this.constructor === HtmlHighlightRules)
        this.normalizeRules();
    };
    oop.inherits(HtmlHighlightRules, XmlHighlightRules);
    exports.HtmlHighlightRules = HtmlHighlightRules;
  }
});

export {
  require_html_highlight_rules
};

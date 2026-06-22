import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/lib/report_error.js
var require_report_error = __commonJS({
  "src/lib/report_error.js"(exports) {
    exports.reportError = function reportError(msg, data) {
      var e = new Error(msg);
      e["data"] = data;
      if (typeof console == "object" && console.error)
        console.error(e);
      setTimeout(function() {
        throw e;
      });
    };
  }
});

export {
  require_report_error
};

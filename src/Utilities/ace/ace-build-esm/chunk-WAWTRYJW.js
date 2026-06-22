import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/lib/oop.js
var require_oop = __commonJS({
  "src/lib/oop.js"(exports) {
    "use strict";
    exports.inherits = function(ctor, superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    };
    exports.mixin = function(obj, mixin) {
      for (var key in mixin) {
        obj[key] = mixin[key];
      }
      return obj;
    };
    exports.implement = function(proto, mixin) {
      exports.mixin(proto, mixin);
    };
  }
});

export {
  require_oop
};

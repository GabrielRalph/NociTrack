import {
  require_textmate
} from "./chunk-ZYSXI253.js";
import {
  require_report_error
} from "./chunk-BPTL7YIQ.js";
import {
  require_event_emitter
} from "./chunk-MF4T7I5J.js";
import {
  require_oop
} from "./chunk-WAWTRYJW.js";
import {
  require_dom
} from "./chunk-CVMYQKGX.js";
import {
  require_lang
} from "./chunk-NNGFYYI3.js";
import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/lib/net.js
var require_net = __commonJS({
  "src/lib/net.js"(exports) {
    "use strict";
    var dom = require_dom();
    exports.get = function(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          callback(xhr.responseText);
        }
      };
      xhr.send(null);
    };
    exports.loadScript = function(path, callback) {
      var head = dom.getDocumentHead();
      var s = document.createElement("script");
      s.src = path;
      head.appendChild(s);
      s.onload = s.onreadystatechange = function(_, isAbort) {
        if (isAbort || !s.readyState || s.readyState == "loaded" || s.readyState == "complete") {
          s = s.onload = s.onreadystatechange = null;
          if (!isAbort)
            callback();
        }
      };
    };
    exports.qualifyURL = function(url) {
      var a = document.createElement("a");
      a.href = url;
      return a.href;
    };
  }
});

// src/lib/default_english_messages.js
var require_default_english_messages = __commonJS({
  "src/lib/default_english_messages.js"(exports) {
    var defaultEnglishMessages = {
      "autocomplete.popup.aria-roledescription": "Autocomplete suggestions",
      "autocomplete.popup.aria-label": "Autocomplete suggestions",
      "autocomplete.popup.item.aria-roledescription": "item",
      "autocomplete.loading": "Loading...",
      "editor.scroller.aria-roledescription": "editor",
      "editor.scroller.aria-label": "Editor content, press Enter to start editing, press Escape to exit",
      "editor.gutter.aria-roledescription": "editor gutter",
      "editor.gutter.aria-label": "Editor gutter, press Enter to interact with controls using arrow keys, press Escape to exit",
      "error-marker.good-state": "Looks good!",
      "prompt.recently-used": "Recently used",
      "prompt.other-commands": "Other commands",
      "prompt.no-matching-commands": "No matching commands",
      "search-box.find.placeholder": "Search for",
      "search-box.find-all.text": "All",
      "search-box.replace.placeholder": "Replace with",
      "search-box.replace-next.text": "Replace",
      "search-box.replace-all.text": "All",
      "search-box.toggle-replace.title": "Toggle Replace mode",
      "search-box.toggle-regexp.title": "RegExp Search",
      "search-box.toggle-case.title": "CaseSensitive Search",
      "search-box.toggle-whole-word.title": "Whole Word Search",
      "search-box.toggle-in-selection.title": "Search In Selection",
      "search-box.search-counter": "$0 of $1",
      "text-input.aria-roledescription": "editor",
      "text-input.aria-label": "Cursor at row $0",
      "gutter.code-folding.range.aria-label": "Toggle code folding, rows $0 through $1",
      "gutter.code-folding.closed.aria-label": "Toggle code folding, rows $0 through $1",
      "gutter.code-folding.open.aria-label": "Toggle code folding, row $0",
      "gutter.code-folding.closed.title": "Unfold code",
      "gutter.code-folding.open.title": "Fold code",
      "gutter.annotation.aria-label.error": "Error, read annotations row $0",
      "gutter.annotation.aria-label.warning": "Warning, read annotations row $0",
      "gutter.annotation.aria-label.info": "Info, read annotations row $0",
      "inline-fold.closed.title": "Unfold code",
      "gutter-tooltip.aria-label.error.singular": "error",
      "gutter-tooltip.aria-label.error.plural": "errors",
      "gutter-tooltip.aria-label.warning.singular": "warning",
      "gutter-tooltip.aria-label.warning.plural": "warnings",
      "gutter-tooltip.aria-label.info.singular": "information message",
      "gutter-tooltip.aria-label.info.plural": "information messages",
      "gutter.annotation.aria-label.security": "Security finding, read annotations row $0",
      "gutter.annotation.aria-label.hint": "Suggestion, read annotations row $0",
      "gutter-tooltip.aria-label.security.singular": "security finding",
      "gutter-tooltip.aria-label.security.plural": "security findings",
      "gutter-tooltip.aria-label.hint.singular": "suggestion",
      "gutter-tooltip.aria-label.hint.plural": "suggestions",
      "editor.tooltip.disable-editing": "Editing is disabled"
    };
    exports.defaultEnglishMessages = defaultEnglishMessages;
  }
});

// src/lib/app_config.js
var require_app_config = __commonJS({
  "src/lib/app_config.js"(exports) {
    "no use strict";
    var oop = require_oop();
    var EventEmitter = require_event_emitter().EventEmitter;
    var reportError = require_report_error().reportError;
    var defaultEnglishMessages = require_default_english_messages().defaultEnglishMessages;
    var optionsProvider = {
      setOptions: function(optList) {
        Object.keys(optList).forEach(function(key) {
          this.setOption(key, optList[key]);
        }, this);
      },
      getOptions: function(optionNames) {
        var result = {};
        if (!optionNames) {
          var options = this.$options;
          optionNames = Object.keys(options).filter(function(key) {
            return !options[key].hidden;
          });
        } else if (!Array.isArray(optionNames)) {
          optionNames = Object.keys(optionNames);
        }
        optionNames.forEach(function(key) {
          result[key] = this.getOption(key);
        }, this);
        return result;
      },
      setOption: function(name, value) {
        if (this["$" + name] === value)
          return;
        var opt = this.$options[name];
        if (!opt) {
          return warn('misspelled option "' + name + '"');
        }
        if (opt.forwardTo)
          return this[opt.forwardTo] && this[opt.forwardTo].setOption(name, value);
        if (!opt.handlesSet)
          this["$" + name] = value;
        if (opt && opt.set)
          opt.set.call(this, value);
      },
      getOption: function(name) {
        var opt = this.$options[name];
        if (!opt) {
          return warn('misspelled option "' + name + '"');
        }
        if (opt.forwardTo)
          return this[opt.forwardTo] && this[opt.forwardTo].getOption(name);
        return opt && opt.get ? opt.get.call(this) : this["$" + name];
      }
    };
    function warn(message) {
      if (typeof console != "undefined" && console.warn)
        console.warn.apply(console, arguments);
    }
    var messages;
    var nlsPlaceholders;
    var AppConfig = class {
      constructor() {
        this.$defaultOptions = {};
        messages = defaultEnglishMessages;
        nlsPlaceholders = "dollarSigns";
      }
      /**
       * @param {Object} obj
       * @param {string} path
       * @param {{ [key: string]: any }} options
       * @returns {import("../../ace-internal").Ace.AppConfig}
       */
      defineOptions(obj, path, options) {
        if (!obj.$options)
          this.$defaultOptions[path] = obj.$options = {};
        Object.keys(options).forEach(function(key) {
          var opt = options[key];
          if (typeof opt == "string")
            opt = { forwardTo: opt };
          opt.name || (opt.name = key);
          obj.$options[opt.name] = opt;
          if ("initialValue" in opt)
            obj["$" + opt.name] = opt.initialValue;
        });
        oop.implement(obj, optionsProvider);
        return this;
      }
      /**
       * @param {Object} obj
       */
      resetOptions(obj) {
        Object.keys(obj.$options).forEach(function(key) {
          var opt = obj.$options[key];
          if ("value" in opt)
            obj.setOption(key, opt.value);
        });
      }
      /**
       * @param {string} path
       * @param {string} name
       * @param {any} value
       */
      setDefaultValue(path, name, value) {
        if (!path) {
          for (path in this.$defaultOptions)
            if (this.$defaultOptions[path][name])
              break;
          if (!this.$defaultOptions[path][name])
            return false;
        }
        var opts = this.$defaultOptions[path] || (this.$defaultOptions[path] = {});
        if (opts[name]) {
          if (opts.forwardTo)
            this.setDefaultValue(opts.forwardTo, name, value);
          else
            opts[name].value = value;
        }
      }
      /**
       * @param {string} path
       * @param {{ [key: string]: any; }} optionHash
       */
      setDefaultValues(path, optionHash) {
        Object.keys(optionHash).forEach(function(key) {
          this.setDefaultValue(path, key, optionHash[key]);
        }, this);
      }
      /**
       * @param {any} value
       * @param {{placeholders?: "dollarSigns" | "curlyBrackets"}} [options]
       */
      setMessages(value, options) {
        messages = value;
        if (options && options.placeholders) {
          nlsPlaceholders = options.placeholders;
        }
      }
      /**
       * @param {string} key
       * @param {string} defaultString
       * @param {{ [x: string]: any; }} [params]
       */
      nls(key, defaultString, params) {
        if (!messages[key]) {
          warn("No message found for the key '" + key + "' in messages with id " + messages.$id + ", trying to find a translation for the default string '" + defaultString + "'.");
          if (!messages[defaultString]) {
            warn("No message found for the default string '" + defaultString + "' in the provided messages. Falling back to the default English message.");
          }
        }
        var translated = messages[key] || messages[defaultString] || defaultString;
        if (params) {
          if (nlsPlaceholders === "dollarSigns") {
            translated = translated.replace(/\$(\$|[\d]+)/g, function(_, dollarMatch) {
              if (dollarMatch == "$") return "$";
              return params[dollarMatch];
            });
          }
          if (nlsPlaceholders === "curlyBrackets") {
            translated = translated.replace(/\{([^\}]+)\}/g, function(_, curlyBracketMatch) {
              return params[curlyBracketMatch];
            });
          }
        }
        return translated;
      }
    };
    AppConfig.prototype.warn = warn;
    AppConfig.prototype.reportError = reportError;
    oop.implement(AppConfig.prototype, EventEmitter);
    exports.AppConfig = AppConfig;
  }
});

// src/config.js
var require_config = __commonJS({
  "src/config.js"(exports, module) {
    "no use strict";
    var lang = require_lang();
    var net = require_net();
    var dom = require_dom();
    var AppConfig = require_app_config().AppConfig;
    module.exports = exports = new AppConfig();
    var options = {
      packaged: false,
      workerPath: null,
      modePath: null,
      themePath: null,
      basePath: "",
      suffix: ".js",
      $moduleUrls: {},
      loadWorkerFromBlob: true,
      sharedPopups: false,
      useStrictCSP: null
    };
    exports.get = function(key) {
      if (!options.hasOwnProperty(key))
        throw new Error("Unknown config key: " + key);
      return options[key];
    };
    exports.set = function(key, value) {
      if (options.hasOwnProperty(key))
        options[key] = value;
      else if (this.setDefaultValue("", key, value) == false)
        throw new Error("Unknown config key: " + key);
      if (key == "useStrictCSP")
        dom.useStrictCSP(value);
    };
    exports.all = function() {
      return lang.copyObject(options);
    };
    exports.$modes = {};
    exports.moduleUrl = function(name, component) {
      if (options.$moduleUrls[name])
        return options.$moduleUrls[name];
      var parts = name.split("/");
      component = component || parts[parts.length - 2] || "";
      var sep = component == "snippets" ? "/" : "-";
      var base = parts[parts.length - 1];
      if (component == "worker" && sep == "-") {
        var re = new RegExp("^" + component + "[\\-_]|[\\-_]" + component + "$", "g");
        base = base.replace(re, "");
      }
      if ((!base || base == component) && parts.length > 1)
        base = parts[parts.length - 2];
      var path = options[component + "Path"];
      if (path == null) {
        path = options.basePath;
      } else if (sep == "/") {
        component = sep = "";
      }
      if (path && path.slice(-1) != "/")
        path += "/";
      return path + component + sep + base + this.get("suffix");
    };
    exports.setModuleUrl = function(name, subst) {
      return options.$moduleUrls[name] = subst;
    };
    var loader = function(moduleName, cb) {
      if (moduleName === "ace/theme/textmate" || moduleName === "./theme/textmate")
        return cb(null, require_textmate());
      if (customLoader)
        return customLoader(moduleName, cb);
      console.error("loader is not configured");
    };
    var customLoader;
    exports.setLoader = function(cb) {
      customLoader = cb;
    };
    exports.dynamicModules = /* @__PURE__ */ Object.create(null);
    exports.$loading = {};
    exports.$loaded = {};
    exports.loadModule = function(moduleId, onLoad) {
      var loadedModule;
      if (Array.isArray(moduleId)) {
        var moduleType = moduleId[0];
        var moduleName = moduleId[1];
      } else if (typeof moduleId == "string") {
        var moduleName = moduleId;
      }
      var load = function(module2) {
        if (module2 && !exports.$loading[moduleName]) return onLoad && onLoad(module2);
        if (!exports.$loading[moduleName]) exports.$loading[moduleName] = [];
        exports.$loading[moduleName].push(onLoad);
        if (exports.$loading[moduleName].length > 1) return;
        var afterLoad = function() {
          loader(moduleName, function(err, module3) {
            if (module3) exports.$loaded[moduleName] = module3;
            exports._emit("load.module", { name: moduleName, module: module3 });
            var listeners = exports.$loading[moduleName];
            exports.$loading[moduleName] = null;
            listeners.forEach(function(onLoad2) {
              onLoad2 && onLoad2(module3);
            });
          });
        };
        if (!exports.get("packaged")) return afterLoad();
        net.loadScript(exports.moduleUrl(moduleName, moduleType), afterLoad);
        reportErrorIfPathIsNotConfigured();
      };
      if (exports.dynamicModules[moduleName]) {
        exports.dynamicModules[moduleName]().then(function(module2) {
          if (module2.default) {
            load(module2.default);
          } else {
            load(module2);
          }
        });
      } else {
        try {
          loadedModule = this.$require(moduleName);
        } catch (e) {
        }
        load(loadedModule || exports.$loaded[moduleName]);
      }
    };
    exports.$require = function(moduleName) {
      if (typeof module["require"] == "function") {
        var req = "require";
        return module[req](moduleName);
      }
    };
    exports.setModuleLoader = function(moduleName, onLoad) {
      exports.dynamicModules[moduleName] = onLoad;
    };
    var reportErrorIfPathIsNotConfigured = function() {
      if (!options.basePath && !options.workerPath && !options.modePath && !options.themePath && !Object.keys(options.$moduleUrls).length) {
        console.error(
          "Unable to infer path to ace from script src,",
          "use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes",
          "or with webpack use ace/webpack-resolver"
        );
        reportErrorIfPathIsNotConfigured = function() {
        };
      }
    };
    exports.version = "1.44.0";
  }
});

export {
  require_config
};
/*
 * based on code from:
 *
 * @license RequireJS text 0.25.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */

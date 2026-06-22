import {
  require_sh
} from "../chunk-LPXLUTKN.js";
import {
  require_sh_highlight_rules
} from "../chunk-VYNLZFVQ.js";
import {
  require_cstyle
} from "../chunk-67VAGNRS.js";
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

// src/mode/dockerfile_highlight_rules.js
var require_dockerfile_highlight_rules = __commonJS({
  "src/mode/dockerfile_highlight_rules.js"(exports) {
    "use strict";
    var oop = require_oop();
    var ShHighlightRules = require_sh_highlight_rules().ShHighlightRules;
    var DockerfileHighlightRules = function() {
      ShHighlightRules.call(this);
      var startRules = this.$rules.start;
      for (var i = 0; i < startRules.length; i++) {
        if (startRules[i].token == "variable.language") {
          startRules.splice(i, 0, {
            token: "constant.language",
            regex: "(?:^(?:FROM|MAINTAINER|RUN|CMD|EXPOSE|ENV|ADD|ENTRYPOINT|VOLUME|USER|WORKDIR|ONBUILD|COPY|LABEL)\\b)",
            caseInsensitive: true
          });
          break;
        }
      }
    };
    oop.inherits(DockerfileHighlightRules, ShHighlightRules);
    exports.DockerfileHighlightRules = DockerfileHighlightRules;
  }
});

// src/mode/dockerfile.js
var require_dockerfile = __commonJS({
  "src/mode/dockerfile.js"(exports) {
    var oop = require_oop();
    var ShMode = require_sh().Mode;
    var DockerfileHighlightRules = require_dockerfile_highlight_rules().DockerfileHighlightRules;
    var CStyleFoldMode = require_cstyle().FoldMode;
    var Mode = function() {
      ShMode.call(this);
      this.HighlightRules = DockerfileHighlightRules;
      this.foldingRules = new CStyleFoldMode();
    };
    oop.inherits(Mode, ShMode);
    (function() {
      this.$id = "ace/mode/dockerfile";
    }).call(Mode.prototype);
    exports.Mode = Mode;
  }
});
export default require_dockerfile();

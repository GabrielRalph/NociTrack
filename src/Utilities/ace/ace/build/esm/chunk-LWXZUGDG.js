import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/snippets/makefile.snippets.js
var require_makefile_snippets = __commonJS({
  "src/snippets/makefile.snippets.js"(exports, module) {
    module.exports = `snippet ifeq
	ifeq (\${1:cond0},\${2:cond1})
		\${3:code}
	endif
`;
  }
});

export {
  require_makefile_snippets
};

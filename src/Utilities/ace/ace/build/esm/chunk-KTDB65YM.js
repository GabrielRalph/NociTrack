import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/snippets/haml.snippets.js
var require_haml_snippets = __commonJS({
  "src/snippets/haml.snippets.js"(exports, module) {
    module.exports = `snippet t
	%table
		%tr
			%th
				\${1:headers}
		%tr
			%td
				\${2:headers}
snippet ul
	%ul
		%li
			\${1:item}
		%li
snippet =rp
	= render :partial => '\${1:partial}'
snippet =rpl
	= render :partial => '\${1:partial}', :locals => {}
snippet =rpc
	= render :partial => '\${1:partial}', :collection => @$1

`;
  }
});

export {
  require_haml_snippets
};

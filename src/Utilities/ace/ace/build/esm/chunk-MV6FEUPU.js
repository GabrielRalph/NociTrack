import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/snippets/drools.snippets.js
var require_drools_snippets = __commonJS({
  "src/snippets/drools.snippets.js"(exports, module) {
    module.exports = `
snippet rule
	rule "\${1?:rule_name}"
	when
		\${2:// when...} 
	then
		\${3:// then...}
	end

snippet query
	query \${1?:query_name}
		\${2:// find} 
	end
	
snippet declare
	declare \${1?:type_name}
		\${2:// attributes} 
	end

`;
  }
});

export {
  require_drools_snippets
};

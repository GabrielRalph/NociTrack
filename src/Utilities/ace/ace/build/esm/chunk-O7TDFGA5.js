import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/snippets/cedar.snippets.js
var require_cedar_snippets = __commonJS({
  "src/snippets/cedar.snippets.js"(exports, module) {
    module.exports = `snippet permit
	permit (
	    principal == \${1:Principal}::"\${2:id}",
	    action == Action::"\${3:action}",
	    resource == \${4:Resource}::"\${5:id}"
	)\${0};
snippet permit_when
	permit (principal, action, resource)
	when { \${0:condition} };
snippet forbid
	forbid (principal, action, resource)
	when { \${0:condition} };
snippet forbid_unless
	forbid (principal, action, resource)
	unless { \${0:condition} };
snippet when
	when { \${0:condition} }
snippet unless
	unless { \${0:condition} }
snippet annotation
	@\${1:name}("\${2:value}")
`;
  }
});

export {
  require_cedar_snippets
};

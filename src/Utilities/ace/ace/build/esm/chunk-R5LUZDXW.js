import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/snippets/cedarschema.snippets.js
var require_cedarschema_snippets = __commonJS({
  "src/snippets/cedarschema.snippets.js"(exports, module) {
    module.exports = `snippet namespace
	namespace \${1:Namespace} {
	    \${0}
	}
snippet entity
	entity \${1:EntityName} {
	    \${0}
	};
snippet entity_in
	entity \${1:EntityName} in [\${2:Parent}] {
	    \${0}
	};
snippet action
	action "\${1:actionName}" appliesTo {
	    principal: [\${2:Principal}],
	    resource: [\${3:Resource}],
	    context: {\${0}}
	};
snippet action_in
	action "\${1:actionName}" in [\${2:ParentAction}] appliesTo {
	    principal: [\${3:Principal}],
	    resource: [\${4:Resource}],
	    context: {\${0}}
	};
snippet type
	type \${1:TypeName} = {
	    \${0}
	};
`;
  }
});

export {
  require_cedarschema_snippets
};

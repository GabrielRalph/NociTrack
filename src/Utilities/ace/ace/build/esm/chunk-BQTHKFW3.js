import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/snippets/diff.snippets.js
var require_diff_snippets = __commonJS({
  "src/snippets/diff.snippets.js"(exports, module) {
    module.exports = `# DEP-3 (http://dep.debian.net/deps/dep3/) style patch header
snippet header DEP-3 style header
	Description: \${1}
	Origin: \${2:vendor|upstream|other}, \${3:url of the original patch}
	Bug: \${4:url in upstream bugtracker}
	Forwarded: \${5:no|not-needed|url}
	Author: \${6:\`g:snips_author\`}
	Reviewed-by: \${7:name and email}
	Last-Update: \${8:\`strftime("%Y-%m-%d")\`}
	Applied-Upstream: \${9:upstream version|url|commit}

`;
  }
});

export {
  require_diff_snippets
};

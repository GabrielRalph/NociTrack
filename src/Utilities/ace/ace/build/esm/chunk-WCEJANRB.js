import {
  __commonJS
} from "./chunk-GM7WFPGG.js";

// src/snippets/maze.snippets.js
var require_maze_snippets = __commonJS({
  "src/snippets/maze.snippets.js"(exports, module) {
    module.exports = `snippet >
description assignment
scope maze
	-> \${1}= \${2}

snippet >
description if
scope maze
	-> IF \${2:**} THEN %\${3:L} ELSE %\${4:R}
`;
  }
});

export {
  require_maze_snippets
};

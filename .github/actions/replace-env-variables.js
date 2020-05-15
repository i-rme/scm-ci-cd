const { readFileSync, writeFileSync } = require("fs");

console.log("replacing process.env.* variables");
const contents = readFileSync("task5-scm-worker.js", "utf8");
writeFileSync(
  "task5-scm-worker.js",
  contents.replace(
    /process\.env\.(\w+)/g,
    (match, varName) => `"${process.env[varName]}"`
  )
);

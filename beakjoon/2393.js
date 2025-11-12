const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
fs.readFileSync(filePath).toString();

console.log(`  ___  ___  ___
  | |__| |__| |
  |           |
   \\_________/
    \\_______/
     |     |
     |     |
     |     |
     |     |
     |_____|
  __/       \\__
 /             \\
/_______________\\
`);

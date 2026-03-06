const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = Number(fs.readFileSync(filePath).toString().trim());
console.log((n+1)*2,(n+1)*3);

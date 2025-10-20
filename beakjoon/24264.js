const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = Number(fs.readFileSync(filePath).toString().trim());

// 수행 횟수: 1 + 2 + ... + (n - 1) = n(n - 1) / 2
console.log((n * (n - 1)) / 2);
console.log(2);

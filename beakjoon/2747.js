const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = parseInt(fs.readFileSync(filePath).toString().trim());

let a = 0;
let b = 1;

for (let i = 2; i <= n; i++) {
  const result = a + b;
  a = b;
  b = result;
}

console.log(n === 0 ? a : b);

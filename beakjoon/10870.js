const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = parseInt(fs.readFileSync(filePath).toString().trim());

let result = [0, 1];
for (let i = 2; i <= n; i++) {
  result[i] = result[i - 1] + result[i - 2];
}
console.log(result[n]);

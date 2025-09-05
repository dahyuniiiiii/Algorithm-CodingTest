const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];
function sum(start) {
  if (start > 5) return;
  result.push(start);
  sum(start + 1);
}
sum(1);
console.log(result.join(" "));

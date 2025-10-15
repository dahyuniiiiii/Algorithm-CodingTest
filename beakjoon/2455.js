const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let now = 0;
let max = 0;
for (let i = 0; i < 4; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  now = now - a + b;
  if (now > max) max = now;
}
console.log(max);

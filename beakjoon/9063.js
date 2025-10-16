const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const x = [];
const y = [];

for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  x.push(a);
  y.push(b);
}
if (n === 1) {
  console.log("0");
} else {
  const width = Math.max(...x) - Math.min(...x);
  const height = Math.max(...y) - Math.min(...y);
  console.log(width * height);
}

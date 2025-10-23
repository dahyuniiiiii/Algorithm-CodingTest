const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let maxSum = 0;
let num = 0;

for (let i = 0; i < 5; i++) {
  const scores = input[i].split(" ").map(Number);
  const sum = scores.reduce((a, b) => a + b, 0);
  if (sum > maxSum) {
    maxSum = sum;
    num = i + 1; 
  }
}

console.log(num, maxSum);

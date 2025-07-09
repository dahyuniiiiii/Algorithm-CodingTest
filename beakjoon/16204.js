const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, M, K] = input;

const a = Math.min(M, K);
const b = Math.min(N - M, N - K);

console.log(a + b);

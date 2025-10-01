const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let maxNum = 0;
let r = 1,
  c = 1;

for (let i = 0; i < input.length; i++) {
  if (input[i] > maxNum) {
    maxNum = input[i];
    r = Math.floor(i / 9) + 1;
    c = (i % 9) + 1;
  }
}

console.log(maxNum);
console.log(r, c);

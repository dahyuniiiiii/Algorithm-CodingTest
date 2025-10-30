const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n,m,k] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let result = Math.min(Math.floor(n / 2), m);

const max = result * 3;
let rem = n + m - max;

if (rem < k) {
  const min = k - rem;
  const people = Math.ceil(min / 3);
  result -= people;
}
console.log(Math.max(result));

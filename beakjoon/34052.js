const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let result = 300;
for (let i = 0; i < input.length; i++) {
  result += input[i];
}
if (result <= 1800) {
  console.log("Yes");
} else {
  console.log("No");
}

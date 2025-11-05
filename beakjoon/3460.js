const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const t = input[0];

for (let i = 1; i <= t; i++) {
  const n = input[i];
  const change = n.toString(2);
  const result = [];
  for (let j = change.length - 1; j >= 0; j--) {
    if (change[j] === "1") {
      result.push(change.length - 1 - j);
    }
  }

  console.log(result.join(" "));
}

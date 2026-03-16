const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, l] = input[0].split(" ").map(Number);
const fruits = input[1].split(" ").map(Number).sort((a, b) => a - b);

let length = l;

for (let i = 0; i < n; i++) {
  if (fruits[i] <= length) {
    length++;
  } else {
    break;
  }
}

console.log(length);
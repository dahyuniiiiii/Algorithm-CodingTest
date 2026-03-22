const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(input[0]);
let count = 0;
const arr = input[1].split(" ").map(Number);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === t) {
    count += 1;
  }
}

console.log(count);

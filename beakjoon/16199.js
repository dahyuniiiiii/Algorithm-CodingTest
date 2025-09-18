const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [b1, b2, b3] = input[0].split(" ").map(Number);
const [c1, c2, c3] = input[1].split(" ").map(Number);
const year = c1 - b1;

let minus = year;
if (c2 < b2 || (c2 === b2 && c3 < b3)) {
  minus -= 1;
}

console.log(minus);
console.log(year + 1);
console.log(year);

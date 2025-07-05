const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);
const d = parseInt(input[3]);
const e = parseInt(input[4]);

let min = 0;
let pls = 0;

if (a < 0) {
  min = (0 - a) * c;
  pls = b * e;
  console.log(min + d + pls);
} else {
  min = (b - a) * e;
  console.log(min);
}

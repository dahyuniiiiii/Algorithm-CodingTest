 const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = Number(fs.readFileSync(filePath).toString().trim());

let result = 0;
let six = 666;

while (true) {
  if (String(six).includes("666")) {
    result++;
  }

  if (result === n) {
    console.log(six);
    break;
  }

  six++;
}
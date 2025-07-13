const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let countb = 0;
let countc = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === ":") {
    countb++;
  } else if (input[i] === "_") {
    countc++;
  }
}

const counta = input.length;

const result = counta + countb + countc * 5;

console.log(result);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const a = Number(input[0]); 
const b = Number(input[1]); 
const c = Number(input[2]); 
const d = Number(input[3]); 
const p = Number(input[4]); 
let result = 0;
if (p <= c) {
  result = b;
} else {
  result = b + (p - c) * d;
}
console.log(Math.min(result,a*p));
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = parseInt(input[0]);
let index = 1;

for (let i = 0; i < t; i++) {
  let s = parseInt(input[index++]);  
  let n = parseInt(input[index++]);  

  for (let j = 0; j < n; j++) {
    let [q, p] = input[index++].split(" ").map(Number);
    s += q * p;
  }
  console.log(s);
}

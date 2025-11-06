const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let C = 100;
let S = 100; 
const n = parseInt(input[0]);

for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  if (a > b) {
    S -= a;
  } else if (b > a) {
    C -= b; 
  }
}

console.log(C);
console.log(S);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(input[0]);
let idx = 1;

for (let i = 0; i < t; i++) {
  const n = Number(input[idx++]); 
  let totalC = 0;
  let totalG = 0;

  for (let j = 0; j < n; j++) {
    const [c, g] = input[idx++].split(" ").map(Number);
    totalC += c;
    totalG += c * g;
  }

  const avg = (totalG / totalC).toFixed(1);
  console.log(totalC, avg);
}

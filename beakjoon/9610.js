const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let q1 = 0, q2 = 0, q3 = 0, q4 = 0, axis = 0;

for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  if (a === 0 || b === 0) {
    axis += 1;
  } else if (a > 0 && b > 0) {
    q1 += 1;
  } else if (a < 0 && b > 0) {
    q2 += 1;
  } else if (a < 0 && b < 0) {
    q3 += 1;
  } else if (a > 0 && b < 0) {
    q4 += 1;
  }
}

console.log(`Q1: ${q1}`);
console.log(`Q2: ${q2}`);
console.log(`Q3: ${q3}`);
console.log(`Q4: ${q4}`);
console.log(`AXIS: ${axis}`);

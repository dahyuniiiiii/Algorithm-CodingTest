const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const m = Number(input[0]);
let ball = 1;

for (let i = 1; i <= m; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  if (x === ball) {
    ball = y;
  } else if (y === ball) {
    ball = x;
    
  }
}

console.log(ball);

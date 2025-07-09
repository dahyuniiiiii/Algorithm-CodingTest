const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
let result = [];

for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  if (b !== -1) {
    result.push(a); 
  }
}

if (result.length > 0) {
  console.log(Math.min(...result));  // 최솟값 출력
} else {
  console.log(-1);  // 아무도 못 삼
}

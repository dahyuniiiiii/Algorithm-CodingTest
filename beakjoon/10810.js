const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const basket = Array(n).fill(0);

for (let i = 1; i <= m; i++) {
  const [a, b, k] = input[i].split(" ").map(Number);
  for (let j = a - 1; j <= b - 1; j++) {
    basket[j] = k;
  }
}

console.log(basket.join(" "));

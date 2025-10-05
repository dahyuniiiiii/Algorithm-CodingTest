const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const t = input[0];

for (let i = 1; i <= t; i++) {
  let money = input[i];

  const q = Math.floor(money / 25);
  money %= 25;

  const d = Math.floor(money / 10);
  money %= 10;

  const n = Math.floor(money / 5);
  money %= 5;

  const p = money;

  console.log(q, d, n, p);
}

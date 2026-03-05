const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(input.shift());

for (let i = 0; i < t; i++) {
  const n = Number(input.shift());
  const coins = input.shift().split(" ").map(Number);
  const m = Number(input.shift());

  const dp = Array(m + 1).fill(0);
  dp[0] = 1;

  for (let coin of coins) {
    for (let j = coin; j <= m; j++) {
      dp[j] += dp[j - coin];
    }
  }

  console.log(dp[m]);
}
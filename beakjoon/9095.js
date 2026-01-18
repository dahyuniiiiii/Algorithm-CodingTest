const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(input[0]);
const dp = Array(11).fill(0); 
dp[1] = 1; 
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= 10; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}
let idx = 1;
let result = []; 
for (let i = 0; i < t; i++) {
  const n = Number(input[idx++]);
  result.push(dp[n]);
}

console.log(result.join("\n")); 

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = parseInt(input[0]);
for (let i = 1; i <= t; i++) {
  const [v, e] = input[i].split(" ").map(Number);
  console.log(2 - v + e);
}

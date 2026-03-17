const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];
for (let i = 0; i < 2; i++) {
  const [T, F, S, P, C] = input[i].split(" ").map(Number);
  result.push(T * 6 + F * 3 + S * 2 + P + C * 2);
}

console.log(result.join(" "));

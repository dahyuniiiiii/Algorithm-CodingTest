const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, b] = input[0].split(" ").map(Number);
for (let i = 1; i <= a; i++) {
  const f = input[i].trim();
  console.log(f.split("").reverse().join(""));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input[0]);
for (let i = 1; i <= n; i++) {
  let name = input[i];
  if (name.includes("S")) {
    console.log(name);
  }
}

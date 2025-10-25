const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const a = BigInt(input[0].trim());
const b = input[1].trim();
const c = BigInt(input[2].trim());

if (b === "*") {
  console.log((a * c).toString());
} else if (b === "+") {
  console.log((a + c).toString());
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, b] = input[0].split(" ").map(Number);
const [c, d] = input[1].split(" ").map(Number);
if (b + c <= a + d) {
  console.log(b+c);
} else {
  console.log(a+d);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let count = 0;
for (let i = 0; i < input.length; i++) {
  count += parseInt(input[i]);
  if (input[i] === "-1") break;
}
console.log(count+1);

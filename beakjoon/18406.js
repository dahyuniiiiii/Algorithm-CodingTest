const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const n = fs.readFileSync(filePath).toString().trim();

let left = 0;
let right = 0;

for (let i = 0; i < n.length / 2; i++) {
  left += Number(n[i]);
}
for (let i = n.length / 2; i < n.length; i++) {
  right += Number(n[i]);
}

if (left === right) {
  console.log("LUCKY");
} else {
  console.log("READY");
}

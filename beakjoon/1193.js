const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let x = Number(fs.readFileSync(filePath).toString().trim());
let n = x;
let result = "";

for (let i = 1; i <= n; i++) {
  if (x > i) {
    x -= i;
  } else {
    if (i % 2 === 0) {
      result = `${x}/${i - x + 1}`;
    } else {
      result = `${i - x + 1}/${x}`;
    }
    break;
  }
}

console.log(result);
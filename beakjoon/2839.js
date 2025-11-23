const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = Number(fs.readFileSync(filePath).toString().trim());

let count = 0;
while (n >= 0) {
  if (n % 5 === 0) {
    count += n / 5;
    console.log(count);
    return;
  }
  n -= 3; 
  count++; 
}
console.log(-1);

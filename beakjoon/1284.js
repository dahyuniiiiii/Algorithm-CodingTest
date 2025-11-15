const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let i = 0;

while (i < input.length) {
  let n = input[i].trim();
  i++;
    
  if (n === "0") break;
  let result = 2;

  for (let x of n) {
    if (x === "1") result += 2;
    else if (x === "0") result += 4;
    else result += 3;
    result += 1;
  }
  result -= 1;
  console.log(result);
}

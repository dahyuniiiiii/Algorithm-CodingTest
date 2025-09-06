const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let temp = [];
let result = [];

function pick(start, a) {
  if (start === m) {
    result.push(temp.join(" "));
    return;
  }
  for (let i = a + 1; i <= n; i++) {
    temp.push(i);
    pick(start + 1, i); 
    temp.pop();
  }
}

pick(0, 0);
console.log(result.join("\n"));

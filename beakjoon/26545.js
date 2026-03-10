const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const n = input[0];
let result = 0;
for(let i=1; i<=n; i++){
    const num = input[i];
    result += num;
}
console.log(result);


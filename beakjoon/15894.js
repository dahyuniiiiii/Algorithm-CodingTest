// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().trim();
// console.log(input*4);
// n이 10억 이상일 수 있어서 안전하게 BigInt 사용해야함
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const n = BigInt(input);
console.log((n * 4n).toString());

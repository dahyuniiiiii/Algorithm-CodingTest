const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = BigInt(input[0]);
const result = 20000303n;

console.log(Number(n % result));

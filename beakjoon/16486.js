const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const d1 = Number(input[0]);
const d2 = Number(input[1]);

const result = 2 * d1 + 2 * 3.141592 * d2;
console.log(result);

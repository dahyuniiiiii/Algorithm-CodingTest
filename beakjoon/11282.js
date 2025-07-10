const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = Number(input);

const result = String.fromCharCode(44031 + n);
console.log(result);

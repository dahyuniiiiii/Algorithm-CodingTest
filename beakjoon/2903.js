const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = parseInt(input);
const result = 2 ** n + 1
console.log(result**2);
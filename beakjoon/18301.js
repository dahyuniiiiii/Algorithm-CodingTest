const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [a, b, c] = input.map(Number);

const result = ((a + 1) * (b + 1)) / (c + 1) - 1;
console.log(Math.floor(result));

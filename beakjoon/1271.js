const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const n = BigInt(input[0]); 
const m = BigInt(input[1]);

console.log((n / m).toString()); 
console.log((n % m).toString());

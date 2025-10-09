const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const w = parseInt(input[0]); 
const ans = Math.floor(Math.sqrt(2 * w));
console.log(ans*4);

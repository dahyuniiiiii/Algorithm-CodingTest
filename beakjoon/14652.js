const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, m, k] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const a = Math.floor(k / m); 
const b = k % m;           
console.log(a, b);

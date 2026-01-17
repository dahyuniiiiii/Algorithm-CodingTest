const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [s,t,d] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

console.log(d/(s*2)*t);

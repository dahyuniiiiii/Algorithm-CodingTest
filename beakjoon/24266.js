const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = BigInt(fs.readFileSync(filePath).toString().trim());

const t = n ** 3n; 
console.log(t.toString());
console.log(3);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b] = fs.readFileSync(filePath, "utf8").trim().split(/\s+/);
const sum = BigInt(a) + BigInt(b);
console.log(sum.toString());

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b] = fs.readFileSync(filePath).toString().trim().split(" ");

const result = BigInt(a) * BigInt(b);
console.log(result.toString());

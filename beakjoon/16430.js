const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
let p = input[0];
let q = input[1];
p = q-p
console.log(p,q);
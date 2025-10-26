const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const l = input[0]; 
const a = input[1]; 
const b = input[2]; 
const c = input[3]; 
const d = input[4]; 

const kook = Math.ceil(a / c);
const math = Math.ceil(b / d);
const result = Math.max(kook, math);

console.log(l - result);

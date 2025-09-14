const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = parseInt(fs.readFileSync(filePath).toString().trim(), 10);

let year = 2024;
let month = 8; 

const add = (n - 1) * 7;
const total = month + add;

year += Math.floor((total - 1) / 12);
month = ((total - 1) % 12) + 1;

console.log(year, month);
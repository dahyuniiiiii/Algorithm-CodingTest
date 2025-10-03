const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const second = (3600 - (parseInt(input) % 3600)) % 3600;
const result = Math.ceil(second / 60);
console.log(result);

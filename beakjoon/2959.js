const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b, c, d] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const arr = [a, b, c, d].sort((x, y) => x - y);

console.log(arr[0] * arr[2]);
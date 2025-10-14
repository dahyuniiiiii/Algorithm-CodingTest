const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const r = parseInt(input);

const u = Math.PI * r * r;
const t = 2 * r * r;
console.log(u.toFixed(6)); //소수점 6자리까지 표현
console.log(t.toFixed(6));

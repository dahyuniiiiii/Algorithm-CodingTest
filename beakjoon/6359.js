const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const t = input[0];

for (let i = 1; i <= t; i++) {
    const n = input[i];
    console.log(Math.floor(Math.sqrt(n)));
}
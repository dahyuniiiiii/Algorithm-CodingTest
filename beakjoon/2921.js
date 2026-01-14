const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = Number(input[0]);
let result = 0;
for (let i = 0; i <= n; i++) {
    for (let j = i; j <= n; j++) {
        result += i + j;
    }
}
console.log(result);

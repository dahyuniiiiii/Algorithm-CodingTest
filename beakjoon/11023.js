const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
let count = 0;
for (let i = 0; i < input.length; i++) {
    count += input[i];
}
console.log(count);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim();
const arr = [];
for (let i = 0; i < input.length; i++) {
    arr.push(input[i]);
}
arr.sort((a, b) => b - a);
console.log(arr.join(""));

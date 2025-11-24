const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);

let sum = 0;
let result = 0;

for (let i = 0; i < n; i++) {
    sum += arr[i];
    result += sum;
}
console.log(result);

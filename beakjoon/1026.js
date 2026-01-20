const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input[0]);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);
let S = 0;
for (let i = 0; i < N; i++) {
    S += A[i] * B[i];
}
console.log(S);
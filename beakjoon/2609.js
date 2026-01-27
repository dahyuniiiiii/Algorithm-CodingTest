const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input[0].split(' ').map(Number);
let a = Math.max(n[0], n[1]);
let b = Math.min(n[0], n[1]);

let small = 1;
while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
}
small = a;
let big = (n[0] * n[1]) / small;

console.log(small);
console.log(big);

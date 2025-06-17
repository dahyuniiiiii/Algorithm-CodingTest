const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [p1, p2] = input[0].split(' ').map(Number);
const result = p1 * p2;
const f = input[1].split(' ').map(Number);

let x = ''; 

for (let i = 0; i < 5; i++) {
    x += (f[i] - result) + ' ';
}

console.log(x.trim());

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const map = new Map();

for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(' ');
    map.set(a, b); 
}
let result = [];
for (let i = n + 1; i <= n + m; i++) {
    result.push(map.get(input[i].trim())); 
}
console.log(result.join('\n'));
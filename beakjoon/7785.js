const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const set = new Set();

for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(' ');
    if (b === 'enter') {
        set.add(a);
    } else {
        set.delete(a);
    }
}

const result = Array.from(set).sort((a, b) => (a < b ? 1 : -1));
console.log(result.join('\n'));

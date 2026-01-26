const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = Number(input[0]);
const top = input[1].split(' ').map(Number);

const result = Array(n).fill(0);
const stack = [];

for (let i = n - 1; i >= 0; i--) {
    const now = top[i];
    while (stack.length > 0 && stack[stack.length - 1][1] < now) {
        const [idx] = stack.pop();
        result [idx] = i + 1;
    }
    stack.push([i, now]);
}

console.log(result.join(' '));
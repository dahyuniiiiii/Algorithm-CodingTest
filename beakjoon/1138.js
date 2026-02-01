const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const result = Array(n).fill(0);

for (let i = 1; i <= n; i++) {
    let count = arr[i - 1];
    for (let j = 0; j < n; j++) {
        if (result[j] === 0) {
            if (count === 0) {
                result[j] = i;
                break;
            }
            count--;
        }
    }
}

console.log(result.join(' '));

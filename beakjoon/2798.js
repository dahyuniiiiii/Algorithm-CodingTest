const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let result = 0;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            const sum = arr[i] + arr[j] + arr[k];
            if (sum <= m && sum > result) {
                result = sum;
            }
        }
    }
}
console.log(result);

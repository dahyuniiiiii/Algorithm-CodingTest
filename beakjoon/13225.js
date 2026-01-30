const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
    const num = Number(input[i]);
    let count = 0;
    for (let j = 1; j <= num; j++) {
        if (num % j == 0) {
            count++;
        }
    }
    console.log(num, count);
}

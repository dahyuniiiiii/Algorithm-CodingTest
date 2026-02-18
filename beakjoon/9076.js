const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const t = Number(input[0]);
for (let i = 1; i <= t; i++) {
    let arr = input[i].split(' ').map(Number);
    arr.sort((a, b) => a - b);
    const m = arr.slice(1, 4);
    if (m[2] - m[0] >= 4) {
        console.log('KIN');
    } else {
        let sum = 0;
        for (let i = 0; i < m.length; i++) {
            sum += m[i];
        }
        console.log(sum);
    }
}

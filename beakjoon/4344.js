const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const c = Number(input[0]);
let arr = [];
for (let i = 1; i <= c; i++) {
    arr = input[i].split(' ');
    let n = parseInt(arr[0]);
    let sum = 0;
    let avg = 0;
    for (let j = 1; j <= n; j++) {
        sum += parseInt(arr[j]);
    }
    avg = sum / n;
    let count = 0;
    for (let k = 1; k <= n; k++) {
        if (arr[k] > avg) {
            count += 1;
        }
    }
    console.log(((count / n) * 100).toFixed(3) + '%');
}

// 슬라이딩 윈도우
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let result = 0;

for (let i = 0; i < m; i++) {
    result += arr[i];
}

let max = result;

for (let i = m; i < n; i++) {
    result = result - arr[i - m] + arr[i];
    if (result > max) {
        max = result;
    }
}

console.log(max);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const sum = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  sum[i] = sum[i - 1] + arr[i - 1];
}

let result = '';

for (let x = 2; x < m + 2; x++) {
  const [i, j] = input[x].split(' ').map(Number);
  console.log(sum[j] - sum[i - 1]);
}


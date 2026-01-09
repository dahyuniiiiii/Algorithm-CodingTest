const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const scores = input[1].split(' ').map(Number);
scores.sort((a, b) => {
    return b - a;
});

console.log(scores[k - 1]);

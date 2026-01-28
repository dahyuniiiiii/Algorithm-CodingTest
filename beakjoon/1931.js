const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = Number(input[0]);
const arr = [];

for (let i = 1; i <= n; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    arr.push([start, end]);
}

arr.sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    } else {
        return a[1] - b[1];
    }
});
let count = 0;
let endTime = 0;

for (const [start, end] of arr) {
    if (start >= endTime) {
        count++;
        endTime = end;
    }
}

console.log(count);

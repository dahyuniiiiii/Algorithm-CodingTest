const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const arr = [];

for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    arr.push([a, b]);
}
arr.sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    } else {
        return a[1] - b[1];
    }
});

for (let i = 0; i < n; i++) {
    console.log(arr[i][0], arr[i][1]);
}

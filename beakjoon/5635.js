const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
    const [name, d, m, y] = input[i].split(' ');
    arr.push({ name, y, m, d });
}
arr.sort((a, b) => {
    if (a.y !== b.y) return a.y - b.y;
    if (a.m !== b.m) return a.m - b.m;
    return a.d - b.d;
});

console.log(arr[n - 1].name);
console.log(arr[0].name);

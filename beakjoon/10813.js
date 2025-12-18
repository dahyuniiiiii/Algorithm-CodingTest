const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
let arr = [];
for (let h = 0; h < n; h++) {
    arr.push(h + 1);
}
for (let k = 1; k <= m; k++) {
    let [i, j] = input[k].split(' ').map(Number);
    temp = arr[i - 1];
    arr[i - 1] = arr[j - 1];
    arr[j - 1] = temp;
}
console.log(arr.join(' '));

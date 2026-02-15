const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, k] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}

let result = [];
let index = 0;
while (arr.length > 0) {
    index = (index + k - 1) % arr.length;
    result.push(arr.splice(index, 1)[0]); //splice(시작위치,제거개수)[0] = 배열에서 숫자꺼냄
}
console.log(`<${result.join(', ')}>`);

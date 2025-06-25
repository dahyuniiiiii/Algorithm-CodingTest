const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let nums = new Set(input);

for (let i = 1; i <= 30; i++) {
    if (!nums.has(i)) {
        console.log(i);
    }
}

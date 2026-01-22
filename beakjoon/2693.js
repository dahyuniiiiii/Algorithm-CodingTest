const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const t = Number(input[0]);
for (let i = 1; i <= t; i++) {
    const nums = input[i].split(' ').map(Number);
    nums.sort((a, b) => b - a);
    console.log(nums[2]);
}

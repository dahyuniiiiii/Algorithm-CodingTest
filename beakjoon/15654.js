const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = [];
const result = [];
const [n, m] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);
nums.sort((a, b) => a - b);
const visited = Array(n).fill(false);
function dfs() {
    if (arr.length === m) {
        result.push(arr.join(' '));
        return;
    }
    for (let i = 0; i < n; i++) {
        if (visited[i] === true) {
            continue;
        } else {
            visited[i] = true;
            arr.push(nums[i]);
        }
        dfs();
        arr.pop();
        visited[i] = false;
    }
}
dfs();
console.log(result.join('\n'));

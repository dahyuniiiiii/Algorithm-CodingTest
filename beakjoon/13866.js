const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const [a, b, c, d] = input.split(' ').map(Number);
const arr = [a, b, c, d].sort((x, y) => x - y);

console.log(Math.abs((arr[0] + arr[3])-(arr[1] + arr[2])));

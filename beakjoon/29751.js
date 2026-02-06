const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [w, h] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

console.log((w * h / 2).toFixed(1));

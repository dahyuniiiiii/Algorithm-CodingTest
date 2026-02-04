const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(filePath).toString().trim().split(' ');
const minA = Number(a.replace(/6/g, '5'));
const minB = Number(b.replace(/6/g, '5'));
const maxA = Number(a.replace(/5/g, '6'));
const maxB = Number(b.replace(/5/g, '6'));

const min = minA + minB;
const max = maxA + maxB;

console.log(min, max);

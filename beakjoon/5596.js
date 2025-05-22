const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const s = input[0].split(' ').map(Number);
const t = input[1].split(' ').map(Number);

const sumS = s.reduce((a, b) => a + b, 0);
const sumT = t.reduce((a, b) => a + b, 0);

if (sumS >= sumT) {
    console.log(sumS); 
} else {
    console.log(sumT);
}

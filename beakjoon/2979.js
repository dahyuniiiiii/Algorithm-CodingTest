const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [a, b, c] = input[0].split(' ').map(Number); //1대주차비용, 2대, 3대
let time = Array(101).fill(0);

for (let i = 1; i <= 3; i++) {
    const [x, y] = input[i].split(' ').map(Number); //도착시간, 떠난시간
    for (let t = x; t < y; t++) {
        time[t]++;
    }
}
let total = 0;
for (let t = 0; t < 101; t++) {
    if (time[t] === 1) total += a;
    else if (time[t] === 2) total += b * 2;
    else if (time[t] === 3) total += c * 3;
}

console.log(total);

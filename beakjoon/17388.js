const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const [s, k, h] = input.split(' ').map(Number);
const sum = s + k + h;

if (sum >= 100) {
    console.log("OK");
} else {
    const min = Math.min(s, k, h);
    if (min === s) console.log("Soongsil");
    else if (min === k) console.log("Korea");
    else console.log("Hanyang");
}

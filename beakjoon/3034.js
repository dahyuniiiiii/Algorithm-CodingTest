const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, w, h] = input[0].split(" ").map(Number);

const box = Math.sqrt(w * w + h * h);

for (let i = 1; i <= n; i++) {
    const sung = Number(input[i]);
    if (sung <= box) {
        console.log("DA");
    } else {
        console.log("NE");
    }
}

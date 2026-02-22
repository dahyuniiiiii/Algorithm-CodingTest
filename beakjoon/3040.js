const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let total = 0;
for (let i = 0; i < 9; i++) {
    total += input[i];
}

for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
        if (total - input[i] - input[j] === 100) {
            for (let k = 0; k < 9; k++) {
                if (k !== i && k !== j) {
                    console.log(input[k]);
                }
            }
            return;
        }
    }
}
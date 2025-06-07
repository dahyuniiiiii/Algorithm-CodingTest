const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

for (let i = 0; i < input.length; i++) {
    const line = input[i];
    if (line === '#') break;

    let count = 0;
    for (let j = 0; j < line.length; j++) {
        if (arr.includes(line[j])) {
            count++;
        }
    }
    console.log(count);
}

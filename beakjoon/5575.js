const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < 3; i++) {
    const [h1, m1, s1, h2, m2, s2] = input[i].split(' ').map(Number);

    const start = h1 * 3600 + m1 * 60 + s1;
    const finish = h2 * 3600 + m2 * 60 + s2;

    let result = finish - start;

    const hours = Math.floor(result / 3600);
    result %= 3600;
    const minutes = Math.floor(result / 60);
    const seconds = result % 60;

    console.log(`${hours} ${minutes} ${seconds}`);
}

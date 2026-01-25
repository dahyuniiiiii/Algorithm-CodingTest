const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = Number(input[0]);
const paper = [];
for (let i = 1; i <= n; i++) {
    paper.push(input[i].split(' ').map(Number));
}

let white = 0;
let blue = 0;

function isSame(x, y, size) {
    const first = paper[x][y];
    for (let i = x; i < x + size; i++) {
        for (let j = y; j < y + size; j++) {
            if (paper[i][j] !== first) return false;
        }
    }
    return true;
}

function solve(x, y, size) {
    if (isSame(x, y, size)) {
        if (paper[x][y] === 0) white++;
        else blue++;
        return;
    }

    const half = size / 2;
    solve(x, y, half);
    solve(x, y + half, half);
    solve(x + half, y, half);
    solve(x + half, y + half, half);
}

solve(0, 0, n);
console.log(white);
console.log(blue);

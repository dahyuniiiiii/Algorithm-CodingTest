const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

const num = input % 8;
if (num === 1) {
    console.log(1);
} else if (num === 2) {
    console.log(2);
} else if (num === 3) {
    console.log(3);
} else if (num === 4) {
    console.log(4);
} else if (num === 5) {
    console.log(5);
} else if (num === 6) {
    console.log(4);
} else if (num === 7) {
    console.log(3);
} else {
    console.log(2);
}

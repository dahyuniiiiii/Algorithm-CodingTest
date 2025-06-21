const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [a, b] = input[0].split('/').map(Number);

if(a === 2 && b === 18){
    console.log('Special');
} else if(a < 2 || (a === 2 && b < 18)){
    console.log('Before');
} else {
    console.log('After');
}

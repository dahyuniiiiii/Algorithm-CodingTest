const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const s = parseInt(input[0]);
const f = parseInt(input[1]);
if(s>f){
    console.log('flight');
}else{
    console.log('high speed rail');
}
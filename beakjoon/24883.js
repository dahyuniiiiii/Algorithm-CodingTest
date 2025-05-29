const fs = require('fs'); 
const filePath = process.platform === 'linux' ? '/dev/stdin' :'./input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const a = input[0];
if(a==="n"|| a==="N"){
    console.log('Naver D2');
}else{
    console.log('Naver Whale');
}
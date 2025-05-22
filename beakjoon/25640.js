const fs = require('fs'); 
const filePath = process.platform === 'linux' ? '/dev/stdin' :'./input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const jinho_mbti = input[0];
let count = 0;
const num = parseInt(input[1]);
for(let i=2; i<num+2; i++){
    let nums = input[i];
    if(nums==jinho_mbti){
        count += 1;
    }else{
        count += 0;
    }

}
console.log(count);
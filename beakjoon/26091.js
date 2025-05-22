const fs = require('fs'); 
const filePath = process.platform === 'linux' ? '/dev/stdin' :'./input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n,m] = input[0].split(' ').map(Number);
let nums = input[1].split(' ').map(Number);
nums = nums.sort((a, b) => a - b); 
let count = 0;
let firstindex = 0; 
let lastindex = n-1;
result = 0; 
while(firstindex<lastindex){
    result = nums[firstindex] + nums[lastindex]; 
    if(result >= m){ 
        count += 1;
        firstindex +=1;
        lastindex -= 1;
    }else{
        firstindex +=1;
    }
}
console.log(count);



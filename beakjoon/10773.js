const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
let arr = [];
let k = parseInt(input[0]);
for(let i=1; i<=k; i++){
    let nums = parseInt(input[i]);
    if (nums ===0){
        arr.pop();
    }else{
        arr.push(nums);
    }
}
let sum=0;
for(let i=0; i<arr.length; i++){
    sum += arr[i];
}
console.log(sum);
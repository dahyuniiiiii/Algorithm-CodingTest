const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const arr =[];
for(let i=1; i<=n; i++){
    arr= arr.push(parseInt(input[i]));
}
console.log(arr.sort((a,b)=>a-b).join('\n'));
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const al = input[1];
let count = 0;
for(let i=0; i<al.length; i++){
    if(al[i]=='O'){
        count+=1;
    }
}
if (count>Math.floor(al.length/2)){
    console.log('Yes');
}else{
    console.log('No');
}

const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


for(let i=0; i<input.length;i++){
    if(input[i]==="END"){
        break;
    }else{
        console.log(input[i].split('').reverse().join(''));
    }
}
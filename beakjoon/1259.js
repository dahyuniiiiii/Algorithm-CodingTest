const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
for(let i=0; i<input.length; i++){
    let num = input[i];
    if(num==="0") break;
    if (num === num.split('').reverse().join('')){
        console.log("yes")
    }else{
        console.log("no");
    }
}
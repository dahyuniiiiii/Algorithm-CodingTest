const fs = require('fs'); 
const filePath = process.platform === 'linux' ? '/dev/stdin' :'./input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n,a,b] = input[0].split(' ').map(Number);
if(n<=b){
    if(a>b){
    console.log("Subway");
}else if(a<b){
    console.log("Bus");
}else{
    console.log("Anything");
}
}

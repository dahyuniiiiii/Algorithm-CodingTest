const fs = require('fs'); 
const filePath = process.platform === 'linux' ? '/dev/stdin' :'./input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const a = input[0];
if(a==="SONGDO"){
    console.log('HIGHSCHOOL');
}else if(a==="CODE"){
    console.log('MASTER');
}else if(a==="2023"){
    console.log('0611');
}else{
    console.log('CONTEST');
}
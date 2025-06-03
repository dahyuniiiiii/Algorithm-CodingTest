const fs = require('fs'); 
const filePath = process.platform === 'linux' ? '/dev/stdin' :'./input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const str = input[0];
if(str=="M"){
    console.log("MatKor");
}else if(str=="W"){
    console.log("WiCys");
}else if(str=="C"){
    console.log("CyKor");
}else if(str=="A"){
    console.log("AlKor");
}else{
    console.log("$clear");
}
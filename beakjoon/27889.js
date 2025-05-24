const fs = require('fs'); 
const filePath = process.platform === 'linux' ? '/dev/stdin' :'./input.txt';
const input = fs.readFileSync(filePath).toString().trim();
const short = input;
if(short==="NLCS"){
    console.log("North London Collegiate School");
}else if(short==="BHA"){
    console.log("Branksome Hall Asia");
}else if(short==="KIS"){
    console.log("Korea International School");
}else{
    console.log("St. Johnsbury Academy");
}

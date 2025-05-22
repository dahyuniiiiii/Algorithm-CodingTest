const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arrd = [];
const arrp = [];
const n = parseInt(input[0]);
for (let i=1; i<=n; i++){
    let str = input[i];
    if(str=="D"){
        arrd.push(str);
    }else{
        arrp.push(str);
    }
    if(arrd.length-arrp.length==0 ||arrp.length-arrd.length==0 ){
        break;
    }
}
console.log(arrd.length+":"+arrp.length);
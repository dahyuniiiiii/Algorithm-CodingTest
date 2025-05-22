const fs = require('fs'); 
let input = fs.readFileSync('/dev/stdin').toString().trim();

const arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
for (let findnum of arr) {
    input = input.split(findnum).join("1");
}
input = input.replace(/[a-z]/g, "1");
console.log(input.length);

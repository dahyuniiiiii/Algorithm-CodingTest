const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");
let n = parseInt(input[0]);
let m = parseInt(input[1]);

if (m > n) {
    console.log("TLE!");
} else if (m <= 2) {
    console.log("NEWBIE!");
} else {
    console.log("OLDBIE!");
}

1. 뭐부터 조건식 걸러내야하며며


let old = n+1 
1,2 <  올드비 < n+1
tle는 1,2도 아니고 올드비도 아님
m은 뉴비 올브비 tle?
let input[0] input[1]

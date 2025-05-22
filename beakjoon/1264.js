const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const words = ['a','e','i','o','u','A','E','I','O','U'];
while(true){
    for(word of words){
        console.log(input[index].length);
    }
    if(input =="#"){
        break;
    }
}
for (let line of input) {
    if (line === "#") break;

    let count = 0;
    for (let char of line) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(count);
}
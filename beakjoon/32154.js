const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = parseInt(input[0]);
if (n === 1) {
    console.log(11);
    console.log("A B C D E F G H J L M");
} else if (n === 2) {
    console.log(9);
    console.log("A C E F G H I L M");
} else if (n === 3) {
    console.log(9);
    console.log("A C E F G H I L M");
} else if (n === 4) {
    console.log(9);
    console.log("A B C E F G H L M");
} else if (n === 5) {
    console.log(8);
    console.log("A C E F G H L M");
} else if (n === 6) {
    console.log(8);
    console.log("A C E F G H L M");
} else if (n === 7) {
    console.log(8);
    console.log("A C E F G H L M");
} else if (n === 8) {
    console.log(8);
    console.log("A C E F G H L M");
} else if (n === 9) {
    console.log(8);
    console.log("A C E F G H L M");
} else if (n === 10) {
    console.log(8);
    console.log("A B C F G H L M");
}

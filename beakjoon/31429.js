const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = parseInt(input[0]);
if (n === 1) {
    console.log("12 1600");
} else if (n === 2) {
    console.log("11 894");
} else if (n === 3) {
    console.log("11 1327");
} else if (n === 4) {
    console.log("10 1311");
} else if (n === 5) {
    console.log("9 1004");
} else if (n === 6) {
    console.log("9 1178");
} else if (n === 7) {
    console.log("9 1357");
} else if (n === 8) {
    console.log("8 837");
} else if (n === 9) {
    console.log("7 1055");
} else if (n === 10) {
    console.log("6 556");
} else if (n === 11) {
    console.log("6 773");
}

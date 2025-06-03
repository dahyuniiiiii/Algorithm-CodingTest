const fs = require('fs'); 
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const nm = parseInt(input[0]); 

if (nm >= 620 && nm <= 780) {
    console.log("Red");
} else if (nm >= 590 && nm < 620) {
    console.log("Orange");
} else if (nm >= 570 && nm < 590) {
    console.log("Yellow");
} else if (nm >= 495 && nm < 570) {
    console.log("Green");
} else if (nm >= 450 && nm < 495) {
    console.log("Blue");
} else if (nm >= 425 && nm < 450) {
    console.log("Indigo");
} else {
    console.log("Violet");
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let t = parseInt(fs.readFileSync(filePath).toString().trim());

const [a,b,c] = [300,60,10];
let resulta = Math.floor(t / a);
t %= a;
let resultb = Math.floor(t / b);
t %= b;
let resultc = Math.floor(t / c);
t %= c;

if (t !== 0) {
  console.log(-1);
} else {
  console.log(resulta, resultb, resultc);
}

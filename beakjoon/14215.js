const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [x, y, z] = input.sort((x, y) => x - y);
if (x + y > z) {
  console.log(x + y + z); //가장 긴 변이 나머지 두 변의 합보다 작아야 삼각형
} else {
  console.log(x + y - 1 + x + y);
}

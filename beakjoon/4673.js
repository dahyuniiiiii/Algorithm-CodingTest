const arr = Array(10001).fill(false);
for (let i = 1; i <= 10000; i++) {
    let sum,num = i;
    while (num > 0) {
        sum += num % 10;
        num = num / 10;
    }
    if (sum <= 10000) {
        arr[sum] = true;
    }
    if (!arr[i]) {
        console.log(i);
    }
}

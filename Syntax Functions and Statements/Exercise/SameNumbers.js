function sameNumbers(num) {
    num = String(num);
    let isSameDigit = true;
    let sum = Number(num[0]);
    for (let i = 0; i < num.length - 1; i++) {
        let currDigit = num[i];
        let nextDigit = num[i + 1];

        if (currDigit != nextDigit) {
            isSameDigit = false;
        }
        sum += Number(nextDigit);
    }
    console.log(isSameDigit);
    console.log(sum);
}
sameNumbers(2222222);
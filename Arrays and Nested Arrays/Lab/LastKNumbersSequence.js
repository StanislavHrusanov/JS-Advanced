function lastKNumbersSequence(n, k) {
    let output = [];
    output.push(1);

    for (let i = 0; i < n - 1; i++) {
        let sum = 0;
        if (k > output.length) {
            sum = output.reduce((a, b) => a + b, 0);
        } else {
            for (let j = output.length - 1; j > output.length - 1 - k; j--) {
                sum += output[j];
            }
        }
        output.push(sum);
    }
    return output;
}
lastKNumbersSequence(6, 3);
function processOddPositions(arr) {
    let output = [];

    for (let i = 1; i < arr.length; i += 2) {
        let doubledCurrEl = arr[i] * 2;
        output.push(doubledCurrEl);
    }
    output = output.reverse().join(' ');
    return output;
}
processOddPositions([3, 0, 10, 4, 7, 3]);
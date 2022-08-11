function extractIncreasingSubsequenceFromArray(arr) {
    let output = [];
    let currBiggestNum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] >= currBiggestNum) {
            currBiggestNum = arr[i];
            output.push(currBiggestNum);
        }
    }

    return output;
}
extractIncreasingSubsequenceFromArray([20,
    3,
    2,
    15,
    6,
    1, 21, 22, 18, 20, 25]
);
function biggestElement(matrix) {
    let theBiggestElement = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < matrix.length; i++) {
        let currArr = matrix[i];

        for (let j = 0; j < currArr.length; j++) {
            let currEl = currArr[j];

            if (currEl > theBiggestElement) {
                theBiggestElement = currEl;
            }
        }
    }

    return theBiggestElement;
}
biggestElement([[20, 50, 10],
[8, 33, 145]]);
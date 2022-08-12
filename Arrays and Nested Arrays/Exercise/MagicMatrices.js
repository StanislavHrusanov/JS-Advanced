function magicMatrices(matrix) {
    let isEqual = true;
    let sum = matrix[0].reduce((a, b) => a + b, 0);

    for (let i = 0; i < matrix.length; i++) {
        let rowSum = 0;
        let colSum = 0;

        for (let j = 0; j < matrix.length; j++) {
            rowSum += matrix[i][j];
            colSum += matrix[j][i];
        }

        if (sum != rowSum || sum != colSum) {
            isEqual = false;
            break;
        }
    }

    console.log(isEqual);
}
magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]);
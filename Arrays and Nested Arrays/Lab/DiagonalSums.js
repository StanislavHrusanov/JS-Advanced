function diagonalSums(matrix) {
    let mainSum = 0;
    let secondarySum = 0;

    for (let i = 0; i < matrix.length; i++) {
        let currArr = matrix[i];

        let main = currArr[i];
        let secondary = currArr[currArr.length - 1 - i];
        mainSum += main;
        secondarySum += secondary;
    }
    console.log(mainSum, secondarySum);
}
diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
);
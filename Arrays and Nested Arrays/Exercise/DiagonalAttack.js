function diagonalAttack(input) {

    let matrix = transformInputToMatrix(input);
    let mainDiagonalSum = getSumOfMainDiagonal(matrix);
    let secondaryDiagonalSum = getSumOfSecondaryDiagonal(matrix);
    let transformedMatrix = transformMatrix(matrix, mainDiagonalSum, secondaryDiagonalSum);
    printOutput(transformedMatrix);

    function printOutput(matrix) {
        matrix.forEach(arr => console.log(arr.join(' ')));
    }

    function transformMatrix(matrix, mainDiagonalSum, secondaryDiagonalSum) {

        if (mainDiagonalSum == secondaryDiagonalSum) {

            for (let i = 0; i < matrix.length; i++) {

                for (let j = 0; j < matrix[i].length; j++) {

                    if (j == i || j == matrix[i].length - 1 - i) {
                        continue;
                    }
                    matrix[i][j] = mainDiagonalSum;
                }
            }
        }

        return matrix;
    }

    function getSumOfSecondaryDiagonal(matrix) {
        let sum = 0;

        for (let i = 0; i < matrix.length; i++) {
            sum += matrix[i][matrix.length - 1 - i];
        }
        return sum;
    }

    function getSumOfMainDiagonal(matrix) {
        let sum = 0;

        for (let i = 0; i < matrix.length; i++) {
            sum += matrix[i][i];
        }
        return sum;
    }

    function transformInputToMatrix(arr) {

        let matrix = [];
        for (let line of arr) {
            line = line.split(' ').map(Number);
            matrix.push(line);
        }
        return matrix;
    }
}
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']);
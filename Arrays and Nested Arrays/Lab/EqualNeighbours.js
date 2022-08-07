function equalNeighbours(matrix) {
    let numberOfNeighbours = 0;

    for (let i = 0; i < matrix.length - 1; i++) {
        let currArr = matrix[i];
        let nextArr = matrix[i + 1];

        for (let j = 0; j < matrix[i].length - 1; j++) {
            if (currArr[j] == currArr[j + 1]) {
                numberOfNeighbours++;
            }
            if (currArr[j] == nextArr[j]) {
                numberOfNeighbours++;

            }
            if (i == matrix.length - 2) {
                if (nextArr[j] == nextArr[j + 1]) {
                    numberOfNeighbours++;
                }
            }
            if (j == matrix[i].length - 2) {
                if (currArr[j + 1] == nextArr[j + 1]) {
                    numberOfNeighbours++;
                }
            }
        }
    }
    console.log(numberOfNeighbours);
}
equalNeighbours([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]]
);
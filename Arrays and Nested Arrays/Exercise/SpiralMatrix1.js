function spiralMatrix(arrLength, numberOfArrs) {
    let matrix = [];

    for (let i = 0; i < numberOfArrs; i++) {
        let arr = [];
        for (let j = 0; j < arrLength; j++) {
            arr.push(0);
        }
        matrix.push(arr);
    }
    let row = 0;
    let col = 0;
    let direction = 'right';
    let counter = 1;

    while (counter <= arrLength * numberOfArrs) {

        if (direction == 'right') {
            if (col < arrLength && matrix[row][col] == 0) {
                matrix[row][col] = counter;
                col++;
            } else {
                direction = 'down';
                col--;
                row++;
                counter--;
            }
        } else if (direction == 'down') {
            if (row < numberOfArrs && matrix[row][col] == 0) {
                matrix[row][col] = counter;
                row++;
            } else {
                direction = 'left';
                row--;
                col--;
                counter--;
            }
        } else if (direction == 'left') {
            if (col >= 0 && matrix[row][col] == 0) {
                matrix[row][col] = counter;
                col--;
            } else {
                direction = 'up';
                row--;
                col++;
                counter--;
            }
        } else if (direction == 'up') {
            if (row >= 0 && matrix[row][col] == 0) {
                matrix[row][col] = counter;
                row--;
            } else {
                direction = 'right';
                col++;
                row++;
                counter--;
            }
        }
        counter++;
    }
    matrix.forEach(arr => console.log(arr.join(' ')));
}
spiralMatrix(5, 5);
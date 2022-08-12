function orbit(arr) {
    let width = arr[0];
    let height = arr[1];
    let x = arr[2];
    let y = arr[3];
    let matrix = [];

    for (let i = 0; i < height; i++) {
        let currRow = [];
        matrix.push(currRow);
    }

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    matrix.forEach(arr => console.log(arr.join(' ')));
}
orbit([4, 4, 0, 0]);
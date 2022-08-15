function ticTacToe(arr) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let playerTurn = 0;

    for (let line of arr) {
        let [row, col] = line.split(' ');
        row = Number(row);
        col = Number(col);

        if (dashboard[row][col] == false) {

            if (playerTurn % 2 == 0) {
                dashboard[row][col] = 'X';
            } else {
                dashboard[row][col] = 'O';
            }
            playerTurn++;
        } else {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        if (!dashboard[0].includes(false) &&
            !dashboard[1].includes(false) &&
            !dashboard[2].includes(false)) {
            console.log('The game ended! Nobody wins :(');
            dashboard.forEach(row => console.log(row.join('\t')));
            break;
        }

        if (checkForWinner(dashboard) == 'X' || checkForWinner(dashboard) == 'O') {
            console.log(`Player ${checkForWinner(dashboard)} wins!`);
            dashboard.forEach(row => console.log(row.join('\t')));
            break;
        }
    }

    function checkForWinner(matrix) {

        for (let i = 0; i < matrix.length; i++) {
            let currRow = matrix[i];
            let resultOfRow = currRow.join('');

            if (resultOfRow == 'XXX') {
                return 'X';
            } else if (resultOfRow == 'OOO') {
                return 'O';
            }
        }

        for (let i = 0; i < matrix.length; i++) {
            let currCol = '';

            for (let j = 0; j < matrix.length; j++) {
                currCol += matrix[j][i];
            }

            if (currCol == 'XXX') {
                return 'X';
            } else if (currCol == 'OOO') {
                return 'O';
            }
        }

        let diagonalOne = '';
        let diagonalTwo = '';

        for (let i = 0; i < matrix.length; i++) {
            diagonalOne += matrix[i][i];
            diagonalTwo += matrix[i][matrix.length - 1 - i];
        }
        if (diagonalOne == 'XXX' || diagonalTwo == 'XXX') {
            return 'X';
        } else if (diagonalOne == 'OOO' || diagonalTwo == 'OOO') {
            return 'O';
        }
    }
}
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
);
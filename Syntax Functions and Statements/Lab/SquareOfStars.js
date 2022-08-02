function squareOfStars(param = 5) {
    for (let i = 0; i < param; i++) {
        let line = '';
        for (let j = 0; j < param; j++) {
            line += '*';

            if (j < param - 1) {
                line += ' ';
            }
        }
        console.log(line);
    }
}
squareOfStars(3);
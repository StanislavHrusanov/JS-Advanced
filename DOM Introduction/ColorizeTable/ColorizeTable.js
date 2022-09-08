function colorize() {
    let cells = document.getElementsByTagName('tr');
    cells = Array.from(cells);

    for (let i = 1; i < cells.length; i += 2) {
        cells[i].style.background = 'Teal';
    }
}
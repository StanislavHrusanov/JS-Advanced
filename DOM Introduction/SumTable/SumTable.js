function sumTable() {
    let rows = document.querySelectorAll('table tr');
    let sum = 0;

    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        let cols = row.children;
        let cost = cols[cols.length - 1].textContent;
        sum += Number(cost);
    }
    return document.getElementById('sum').textContent = sum;
}
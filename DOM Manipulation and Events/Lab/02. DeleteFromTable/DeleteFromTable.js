function deleteByEmail() {

    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let input = document.getElementsByTagName('input')[0];
    let table = document.getElementById('customers');
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let email = row.children[1];

        if (input.value == email.textContent) {
            table.deleteRow(i + 1);
            document.getElementById('result').textContent = "Deleted.";
            break;

        } else {
            document.getElementById('result').textContent = "Not found.";
        }
    }
}
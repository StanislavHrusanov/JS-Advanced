function generateReport() {

    let tableRows = Array.from(document.querySelectorAll('tbody tr'));
    let inputElements = Array.from(document.getElementsByTagName('input'));
    let output = [];

    for (let i = 0; i < tableRows.length; i++) {
        let currTableRowElements = Array.from(tableRows[i].children);
        let currObj = {};

        for (let j = 0; j < inputElements.length; j++) {
            let currElement = inputElements[j];

            if (currElement.checked) {
                currObj[currElement.name] = currTableRowElements[j].textContent;
            }
        }
        output.push(currObj);
    }
    document.getElementById('output').value = JSON.stringify(output);
}
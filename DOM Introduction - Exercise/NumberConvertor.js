function solve() {
    let selectMenuToOptions = document.getElementById('selectMenuTo');
    let binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    let hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal';
    selectMenuToOptions.add(binaryOption);
    selectMenuToOptions.add(hexadecimalOption);

    document.querySelector('button').addEventListener('click', onClick);

    function onClick() {
        let decimal = Number(document.getElementById('input').value);
        let result = document.getElementById('result');
        let choseOption = document.getElementById('selectMenuTo');
        let chosenOption = choseOption.options[choseOption.selectedIndex].textContent;

        if (chosenOption == 'Binary') {
            result.value = (decimal >>> 0).toString(2);

        } else if (chosenOption == 'Hexadecimal') {
            result.value = (decimal >>> 0).toString(16).toUpperCase();
        }
    }
}
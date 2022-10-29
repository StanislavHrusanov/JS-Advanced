function addItem() {
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');
    let option = document.createElement('option');
    option.textContent = inputText.value;
    option.value = inputValue.value;
    document.getElementById('menu').appendChild(option);
    inputText.value = '';
    inputValue.value = '';
}
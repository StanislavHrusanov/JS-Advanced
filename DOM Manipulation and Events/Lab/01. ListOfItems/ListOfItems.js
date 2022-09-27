function addItem() {
    let input = document.getElementById('newItemText');
    let newElement = document.createElement('li');
    newElement.innerHTML = input.value;
    let itemsList = document.getElementById('items');
    itemsList.appendChild(newElement);
}
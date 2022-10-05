function addItem() {
    let input = document.getElementById('newItemText');
    let newElement = document.createElement('li');
    let itemsList = document.getElementById('items');
    itemsList.appendChild(newElement);
    newElement.innerHTML = `${input.value} <a href=#>[Delete]</a>`;
    input.value = '';

    itemsList.addEventListener('click', function (e) {
        let parentElement = e.target.parentElement;
        parentElement.remove(parentElement);
    });
}
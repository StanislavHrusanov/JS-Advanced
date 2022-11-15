function solve() {
    const movieNameInput = document.querySelector('#container').children[0];
    const hallInput = document.querySelector('#container').children[1];
    const priceInput = document.querySelector('#container').children[2];
    const moviesOnScreenSection = document.querySelector('#movies > ul');
    const archiveSection = document.querySelector('#archive > ul');

    document.addEventListener('click', function onClick(e) {
        e.preventDefault();
        const buttons = {
            'On Screen': () => {
                const name = movieNameInput.value;
                const hall = hallInput.value;
                const price = priceInput.value;

                if (name && hall && Number(price)) {

                    const liEl = document.createElement('li');
                    moviesOnScreenSection.appendChild(liEl);
                    const nameEl = document.createElement('span');
                    nameEl.textContent = name;
                    const hallEl = document.createElement('strong');
                    hallEl.textContent = `Hall: ${hall}`;
                    const divEl = document.createElement('div');
                    const priceEl = document.createElement('strong');
                    priceEl.textContent = Number(price).toFixed(2);
                    const ticketsSoldEl = document.createElement('input');
                    ticketsSoldEl.placeholder = 'Tickets Sold';
                    const arvhiveBtn = document.createElement('button');
                    arvhiveBtn.textContent = 'Archive';

                    liEl.appendChild(nameEl);
                    liEl.appendChild(hallEl);
                    liEl.appendChild(divEl);
                    divEl.appendChild(priceEl);
                    divEl.appendChild(ticketsSoldEl);
                    divEl.appendChild(arvhiveBtn);
                }
                movieNameInput.value = '';
                hallInput.value = '';
                priceInput.value = '';
            },
            'Archive': () => {
                const countInputField = e.target.previousSibling;
                const count = countInputField.value;

                if (count && Number(count) >= 0) {

                    const liEl = document.createElement('li');
                    archiveSection.appendChild(liEl);
                    const nameEl = document.createElement('span');
                    nameEl.textContent = e.target.parentNode.parentNode.firstChild.textContent;
                    const totalAmountEl = document.createElement('strong');
                    const totalAmount = Number(e.target.previousSibling.previousSibling.textContent) * Number(count);
                    totalAmountEl.textContent = `Total amount: ${totalAmount.toFixed(2)}`;
                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';

                    liEl.appendChild(nameEl);
                    liEl.appendChild(totalAmountEl);
                    liEl.appendChild(deleteBtn);

                    e.target.parentNode.parentNode.remove();
                }
            },
            'Delete': () => {
                e.target.parentNode.remove();
            },
            'Clear': () => {
                const liToClear = document.querySelector('#archive > ul').children;
                Array.from(liToClear).forEach(li => li.remove());
            }
        }

        if (e.target.tagName === 'BUTTON') {
            buttons[e.target.textContent]();
        }
    });
}
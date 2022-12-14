window.addEventListener('load', solve);

function solve() {
    const typeProductField = document.getElementById('type-product');
    const descriptionField = document.getElementById('description');
    const clientNameField = document.getElementById('client-name');
    const clientPhoneField = document.getElementById('client-phone');
    const sendFormBtn = document.getElementById('right').querySelector('form button');
    const receivedOrderSection = document.getElementById('received-orders');
    const completeOrdersSection = document.getElementById('completed-orders');
    const clearBtn = document.getElementsByClassName('clear-btn')[0];

    sendFormBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (typeProductField.value === '' || descriptionField.value === '' || clientNameField.value === '' || clientPhoneField.value === '') {
            return;
        }

        const div = elementCreator('div', '', 'class', 'container');
        div.appendChild(elementCreator('h2', `Product type for repair: ${typeProductField.value}`,));
        div.appendChild(elementCreator('h3', `Client information: ${clientNameField.value}, ${clientPhoneField.value}`));
        div.appendChild(elementCreator('h4', `Description of the problem: ${descriptionField.value}`));
        const startBtn = elementCreator('button', 'Start repair', 'class', 'start-btn');
        div.appendChild(startBtn);
        const finishBtn = elementCreator('button', 'Finish repair', 'class', 'finish-btn');
        finishBtn.disabled = true;
        div.appendChild(finishBtn);
        receivedOrderSection.appendChild(div);

        typeProductField.value = '';
        descriptionField.value = '';
        clientNameField.value = '';
        clientPhoneField.value = '';

        startBtn.addEventListener('click', (e) => {
            startBtn.disabled = true;
            finishBtn.removeAttribute('disabled');
        });

        finishBtn.addEventListener('click', (e) => {
            const divToMove = e.target.parentElement;
            completeOrdersSection.appendChild(divToMove);
            divToMove.querySelector('.start-btn').remove();
            divToMove.querySelector('.finish-btn').remove();
        });

        clearBtn.addEventListener('click', (e) => {
            const divToClear = Array.from(completeOrdersSection.querySelectorAll('.container'));
            divToClear.forEach(div => div.remove());
        });
    });

    function elementCreator(type, text, attribute, attrName) {
        const newElement = document.createElement(type);
        if (attribute) {
            newElement.setAttribute(attribute, attrName);
        }
        if (text) {
            newElement.textContent = text;
        }
        return newElement;
    }
}
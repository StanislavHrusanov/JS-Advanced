function solve() {
    const nameField = document.getElementById('recipientName');
    const titleField = document.getElementById('title');
    const messageField = document.getElementById('message');
    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');
    const ulList = document.getElementById('list');
    const ulSent = document.getElementsByClassName('sent-list')[0];
    const ulDelete = document.getElementsByClassName('delete-list')[0];

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (nameField.value === '' || titleField.value === '' || messageField.value === '') {
            return;
        }

        const li = elementCreator('li');
        const title = elementCreator('h4', `Title: ${titleField.value}`);
        li.appendChild(title);
        const name = elementCreator('h4', `Recipient Name: ${nameField.value}`);
        li.appendChild(name);
        const message = elementCreator('span', messageField.value);
        li.appendChild(message);
        const divBtn = elementCreator('div', '', 'id', 'list-action');
        const sendBtn = elementCreator('button', 'Send', 'id', 'send');
        sendBtn.setAttribute('type', 'submit');
        const deleteBtn = elementCreator('button', 'Delete', 'id', 'delete');
        deleteBtn.setAttribute('type', 'submit');
        divBtn.appendChild(sendBtn);
        divBtn.appendChild(deleteBtn);
        li.appendChild(divBtn);
        ulList.appendChild(li);

        nameField.value = '';
        titleField.value = '';
        messageField.value = '';

        sendBtn.addEventListener('click', (e) => {
            const currLi = e.target.parentElement.parentElement;
            const sentLi = elementCreator('li');
            const to = elementCreator('span', `To: ${currLi.children[1].textContent.slice(16)}`);
            sentLi.appendChild(to);
            const sentTitle = elementCreator('span', currLi.children[0].textContent);
            sentLi.appendChild(sentTitle);
            const buttonDiv = elementCreator('div', '', 'class', 'btn');
            const deleteButton = elementCreator('button', 'Delete', 'class', 'delete');
            deleteButton.setAttribute('type', 'submit');
            buttonDiv.appendChild(deleteButton);
            sentLi.appendChild(buttonDiv);
            ulSent.appendChild(sentLi);

            e.target.parentElement.parentElement.remove();

            deleteButton.addEventListener('click', (e) => {
                ulDelete.appendChild(e.target.parentElement.parentElement);
    
                e.target.parentElement.remove();
            });
        });

        deleteBtn.addEventListener('click', (e) => {
            const currLi = e.target.parentElement.parentElement;
            const deleteLi = elementCreator('li');
            const to = elementCreator('span', `To: ${currLi.children[1].textContent.slice(16)}`);
            deleteLi.appendChild(to);
            const deleteTitle = elementCreator('span', currLi.children[0].textContent);
            deleteLi.appendChild(deleteTitle);
            ulDelete.appendChild(deleteLi);

            e.target.parentElement.parentElement.remove();
        });
    });

    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();

        nameField.value = '';
        titleField.value = '';
        messageField.value = '';
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
solve()
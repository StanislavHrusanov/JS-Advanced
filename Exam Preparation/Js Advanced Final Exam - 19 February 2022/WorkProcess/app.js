function solve() {
    const firstNameField = document.getElementById('fname');
    const lastNameField = document.getElementById('lname');
    const emailField = document.getElementById('email');
    const dateField = document.getElementById('birth');
    const positionField = document.getElementById('position');
    const salaryField = document.getElementById('salary');
    const hireWorkerBtn = document.getElementById('add-worker');
    const tbody = document.getElementById('tbody');
    const sumElement = document.getElementById('sum');

    hireWorkerBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (firstNameField.value === '' || lastNameField.value === '' || emailField.value === ''
            || dateField.value === '' || positionField.value === '' || salaryField.value === '') {
            return;
        }

        const tr = elementCreator('tr');
        const fNameTd = elementCreator('td', firstNameField.value);
        tr.appendChild(fNameTd);
        const lNameTd = elementCreator('td', lastNameField.value);
        tr.appendChild(lNameTd);
        const emailTd = elementCreator('td', emailField.value);
        tr.appendChild(emailTd);
        const dateTd = elementCreator('td', dateField.value);
        tr.appendChild(dateTd);
        const positionTd = elementCreator('td', positionField.value);
        tr.appendChild(positionTd);
        const salaryTd = elementCreator('td', salaryField.value);
        tr.appendChild(salaryTd);
        const buttonTd = elementCreator('td');
        const firedBtn = elementCreator('button', 'Fired', 'class', 'fired');
        buttonTd.appendChild(firedBtn);
        const editBtn = elementCreator('button', 'Edit', 'class', 'edit');
        buttonTd.appendChild(editBtn);
        tr.appendChild(buttonTd);
        tbody.appendChild(tr);
        sumElement.textContent = (Number(sumElement.textContent) + Number(salaryTd.textContent)).toFixed(2);

        firstNameField.value = '';
        lastNameField.value = '';
        emailField.value = '';
        dateField.value = '';
        positionField.value = '';
        salaryField.value = '';

        editBtn.addEventListener('click', (e) => {
            const currTr = e.target.parentElement.parentElement;
            firstNameField.value = currTr.children[0].textContent;
            lastNameField.value = currTr.children[1].textContent;
            emailField.value = currTr.children[2].textContent;
            dateField.value = currTr.children[3].textContent;
            positionField.value = currTr.children[4].textContent;
            salaryField.value = currTr.children[5].textContent;
            sumElement.textContent = (Number(sumElement.textContent) - Number(currTr.children[5].textContent)).toFixed(2);

            e.target.parentElement.parentElement.remove();
        });

        firedBtn.addEventListener('click', (e) => {
            const currTr = e.target.parentElement.parentElement;
            sumElement.textContent = (Number(sumElement.textContent) - Number(currTr.children[5].textContent)).toFixed(2);
            e.target.parentElement.parentElement.remove();
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
solve()
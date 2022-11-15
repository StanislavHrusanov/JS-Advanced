function solve() {
    const taskField = document.getElementById('task');
    const descriptionField = document.getElementById('description');
    const dateField = document.getElementById('date');

    document.addEventListener('click', (e) => {
        e.preventDefault();
        const buttons = {
            'Add': () => {

                if (taskField.value === '' || descriptionField.value === '' || dateField.value === '') {
                    return;
                }
                const openSection = document.querySelector('body > main > div > section:nth-child(2) > div:nth-child(2)');
                const newTaskEl = document.createElement('article');
                openSection.appendChild(newTaskEl);
                const taskNameEl = document.createElement('h3');
                taskNameEl.textContent = taskField.value;
                const descrEl = document.createElement('p');
                descrEl.textContent = `Description: ${descriptionField.value}`;
                const dateEl = document.createElement('p');
                dateEl.textContent = `Due Date: ${dateField.value}`;
                newTaskEl.appendChild(taskNameEl);
                newTaskEl.appendChild(descrEl);
                newTaskEl.appendChild(dateEl);
                const divButtons = document.createElement('div');
                divButtons.setAttribute('class', 'flex');
                const startButton = document.createElement('button');
                startButton.setAttribute('class', 'green');
                startButton.textContent = 'Start';
                const deleteButton = document.createElement('button');
                deleteButton.setAttribute('class', 'red');
                deleteButton.textContent = 'Delete';
                divButtons.appendChild(startButton);
                divButtons.appendChild(deleteButton);
                newTaskEl.appendChild(divButtons);

                taskField.value = '';
                descriptionField.value = '';
                dateField.value = '';
            },
            'Start': () => {
                const inProgressDiv = document.getElementById('in-progress');
                const progressedTask = e.target.parentNode.parentNode;
                const buttonsDiv = progressedTask.getElementsByClassName('flex')[0];
                buttonsDiv.children[0].remove();
                const finishButton = document.createElement('button');
                finishButton.setAttribute('class', 'orange');
                finishButton.textContent = 'Finish';
                buttonsDiv.appendChild(finishButton);
                inProgressDiv.appendChild(progressedTask);
            },
            'Delete': () => {
                e.target.parentNode.parentNode.remove();
            },
            'Finish': () => {
                const completeSection = document.querySelector('body > main > div > section:nth-child(4)');
                const completeTask = e.target.parentNode.parentNode;
                const buttonsToRemove = completeTask.querySelector('div');
                buttonsToRemove.remove();
                const finalDiv = completeSection.children[1];
                finalDiv.appendChild(completeTask);
            }
        }

        if (e.target.tagName === 'BUTTON') {
            buttons[e.target.textContent]();
        }
    });
}
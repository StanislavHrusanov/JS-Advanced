window.addEventListener('load', solve);

function solve() {
    const genreField = document.getElementById('genre');
    const nameField = document.getElementById('name');
    const authorField = document.getElementById('author');
    const dateField = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    const colectionOfSongs = document.getElementsByClassName('all-hits-container')[0];
    const totalLikes = document.querySelector('.likes p');
    const savedSongs = document.getElementsByClassName('saved-container')[0];
    let currentLikes = 0;

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (genreField.value === '' || nameField.value === '' || authorField.value === '' || dateField.value === '') {
            return;
        }

        const div = elementCreator('div', '', 'class', 'hits-info');
        div.appendChild(elementCreator('img', '', 'src', './static/img/img.png'));
        div.appendChild(elementCreator('h2', `Genre: ${genreField.value}`));
        div.appendChild(elementCreator('h2', `Name: ${nameField.value}`));
        div.appendChild(elementCreator('h2', `Author: ${authorField.value}`));
        div.appendChild(elementCreator('h3', `Date: ${dateField.value}`));

        const saveBtn = elementCreator('button', 'Save song', 'class', 'save-btn');
        div.appendChild(saveBtn);
        const likeBtn = elementCreator('button', 'Like song', 'class', 'like-btn');
        div.appendChild(likeBtn);
        const deleteBtn = elementCreator('button', 'Delete', 'class', 'delete-btn');
        div.appendChild(deleteBtn);

        colectionOfSongs.appendChild(div);

        genreField.value = '';
        nameField.value = '';
        authorField.value = '';
        dateField.value = '';

        likeBtn.addEventListener('click', (e) => {
            currentLikes++
            totalLikes.textContent = `${totalLikes.textContent.slice(0, 13)}${currentLikes}`;
            likeBtn.setAttribute('disabled', 'true');
        });

        saveBtn.addEventListener('click', (e) => {
            const divToMove = e.target.parentElement;
            savedSongs.appendChild(divToMove);
            divToMove.children[5].remove();
            divToMove.children[5].remove();
        });

        deleteBtn.addEventListener('click', (e) => {
            e.target.parentElement.remove();
            currentLikes--;
            totalLikes.textContent = `${totalLikes.textContent.slice(0, 13)}${currentLikes}`;
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
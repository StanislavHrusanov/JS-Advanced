function validate() {
    const inputField = document.getElementById('email');
    inputField.addEventListener('change', function onClick() {
        if (!/^[a-z]+@[a-z]+\.[a-z]+$/.test(inputField.value)) {
            inputField.setAttribute('class', 'error');
        } else {
            inputField.removeAttribute('class');
        }
    });
}
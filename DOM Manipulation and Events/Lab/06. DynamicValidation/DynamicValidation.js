function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change', (e) => {
        let pattern = /[a-z]+@[a-z]+\.[a-z]+/;
        let match = input.value.match(pattern);

        if (match === null) {
            e.target.setAttribute('class', 'error');
        } else {
            e.target.removeAttribute('class');
        }
    });
}
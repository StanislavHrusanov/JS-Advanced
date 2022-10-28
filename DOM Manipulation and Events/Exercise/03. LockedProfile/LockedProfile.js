function lockedProfile() {
    const profileDivs = Array.from(document.querySelectorAll('.profile'));

    profileDivs.forEach(div => {
        let lock = div.querySelector('input[value="lock"]');
        let hiddenField = div.querySelector('div');
        let button = div.querySelector('button');

        button.addEventListener('click', function showHide(e) {

            if (lock.checked === false) {
                if (button.textContent == 'Show more') {
                    hiddenField.style.display = 'block';
                    button.textContent = 'Hide it';
                } else if (button.textContent == 'Hide it') {
                    hiddenField.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        });
    });
}
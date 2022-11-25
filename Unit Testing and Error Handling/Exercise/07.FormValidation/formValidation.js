function validate() {
    const usernameField = document.getElementById('username');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-password');
    const isCompanyCheckBox = document.getElementById('company');
    const submitBtn = document.getElementById('submit');
    const divValid = document.getElementById('valid');

    isCompanyCheckBox.addEventListener('change', () => {
        if (isCompanyCheckBox.checked) {
            document.getElementById('companyInfo').style.display = 'block';
        } else {
            document.getElementById('companyInfo').style.display = 'none';
        }
    });

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let isValidUserName = true;
        let isValidEmail = true;
        let isValidPassword = true;
        let isValidConfirmPassword = true;
        let isValidCompanyNumber = true;

        if (!/^[0-9a-zA-Z]{3,20}$/.test(usernameField.value)) {
            usernameField.style = 'border-color: red';
            isValidUserName = false;
        } else {
            usernameField.style = 'border-color: none';
        }

        if (!/[^.]*@[^.]*[\.]{1,}/.test(emailField.value)) {
            emailField.style = 'border-color: red';
            isValidEmail = false;
        } else {
            emailField.style = 'border-color: none';
        }

        if (!/^[\w]{5,15}$/.test(passwordField.value)) {
            passwordField.style = 'border-color: red';
            isValidPassword = false;
        } else {
            passwordField.style = 'border-color: none';
        }

        if (!/^[\w]{5,15}$/.test(confirmPasswordField.value) || confirmPasswordField.value != passwordField.value) {
            confirmPasswordField.style = 'border-color: red';
            isValidConfirmPassword = false;
        } else {
            confirmPasswordField.style = 'border-color: none';
        }

        if (isCompanyCheckBox.checked) {
            const companyNumberField = document.getElementById('companyNumber');

            if (Number(companyNumberField.value) < 1000 || Number(companyNumberField.value > 9999)) {
                companyNumberField.style = 'border-color: red';
                isValidCompanyNumber = false;
            } else {
                companyNumberField.style = 'border-color: none';
            }
        }

        if (isValidUserName && isValidEmail && isValidPassword && isValidConfirmPassword && isValidCompanyNumber) {
            divValid.style.display = 'block';
        } else {
            divValid.style.display = 'none';
        }
    });
}
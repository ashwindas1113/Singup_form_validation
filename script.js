document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailErrorMessage = document.getElementById('email-error');
    const passwordErrorMessage = document.getElementById('password-error');
    const successMessage = document.getElementById('success-message');
    const form = document.getElementById('signup-form');

    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    function validateEmail() {
        const email = emailInput.value;
        if (email.length < 3 || !email.includes("@") || !email.includes(".")) {
            emailErrorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        } else {
            emailErrorMessage.style.display = 'none';
            checkAllFields();
        }
    }

    function validatePassword() {
        const password = passwordInput.value;
        if (password.length < 8) {
            passwordErrorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        } else {
            passwordErrorMessage.style.display = 'none';
            checkAllFields();
        }
    }

    function checkAllFields() {
        const email = emailInput.value;
        const password = passwordInput.value;
        if (email.length >= 3 && email.includes("@") && email.includes(".") && password.length >= 8) {
            successMessage.style.display = 'block';
        }
    }
});
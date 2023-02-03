const form = document.getElementById('form');
const email = document.getElementById('email');
const errorIcon = document.getElementById('errorIcon');
const alert = document.getElementById('alert');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(email.value);
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value.trim())) {
        form.classList.add('info-form-error');
        email.classList.add('form-email-error');
        errorIcon.classList.add('form-errorIcon-error');
        alert.classList.add('info-alert-error');
    } else {
        form.classList.remove('info-form-error');
        email.classList.remove('form-email-error');
        errorIcon.classList.remove('form-errorIcon-error');
        alert.classList.remove('info-alert-error');
    }
});

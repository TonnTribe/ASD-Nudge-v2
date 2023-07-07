function logIn() {
    document.location.replace('/login');
}
document
    .querySelector('#homelogin')
    .addEventListener('click', logIn())
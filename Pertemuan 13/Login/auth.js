function authenticate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'Dapizzz' && password === 'StudentTI23') {
        alert('Login successful');
        window.location.href = 'success.html';
    } else {
        alert('Login failed. Please check your username and password.');
    }
}
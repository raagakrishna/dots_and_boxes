function loginFormBtn(event) {
    event.preventDefault();

    var usernameInput = document.getElementById("usernameInput");
    var passwordInput = document.getElementById("passwordInput");

    if (usernameInput.value == "" || passwordInput.value == "") {
        updateDisplayResult('failure', "Username and password cannot be empty.");
        return;
    }

    loginPlayer(usernameInput.value, passwordInput.value);
}

function loginPlayer(username, password) {
    fetch(`${backendUrl}/player/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`, {
        method: 'POST',
        headers: setHeaders()
    })
    .then(function (response) {
        if (response.ok) {
            return response.text();
        } 
        else {
            return response.json().then(function (errorMessage) {
                throw new Error(errorMessage.title);
            });
        }
    })
    .then(function (message) {
        // TODO: handle the success response (login)
        updateDisplayResult('success', message);
        localStorage.setItem("username", username);
        window.location.href = 'index.html';
    })
    .catch(function (error) {
        updateDisplayResult('failure', error);
    });
}

function registerFormBtn(event) {
    event.preventDefault();

    var usernameInput = document.getElementById("usernameInput");
    var passwordInput = document.getElementById("passwordInput");
    var confirmPasswordInput = document.getElementById('confirmPasswordInput');

    if (passwordInput.value !== confirmPasswordInput.value) {
        updateDisplayResult('failure', "Passwords do not match!");
        
        passwordInput.value = "";
        confirmPasswordInput.value = "";
        
        return;
    } 
    
    registerPlayer(usernameInput.value, passwordInput.value);
    passwordInput.value = "";
    confirmPasswordInput.value = "";
    usernameInput.value = "";
}

function registerPlayer(username, password) {
    fetch(`${backendUrl}/player`, {
        method: 'POST',
        headers: setHeaders(),
        body: JSON.stringify({"username": username, "password": password})
    })
    .then(function (response) {
        if (response.ok) {
            return response.text();
        } 
        else {
            return response.json().then(function (errorMessage) {
                throw new Error(errorMessage.title);
            });
        }
    })
    .then(function (message) {
        // TODO: handle the success response (register)
        updateDisplayResult('success', message);
        // window.location.href = 'login.html';
    })
    .catch(function (error) {
        updateDisplayResult('failure', error);
    });
}

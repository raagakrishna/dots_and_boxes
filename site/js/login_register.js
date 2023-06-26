const backendUrl = 'https://georgepauer.com';

function loginFormBtn(event) {
    event.preventDefault();

    var usernameInput = document.getElementById("usernameInput");
    var passwordInput = document.getElementById("passwordInput");

    if (usernameInput.value == "" || passwordInput.value == "") {
        updateDisplayResult('failure', "Username and password cannot be empty.");
        return;
    }

    loginPlayer(usernameInput, passwordInput);
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

function loginPlayer(username, password) {
    fetch(`${backendUrl}/player/login`, {
        method: 'GET',
        headers: setHeaders(),
        body: {"username" : username, "password" : password}
    })
        .then((response) => {
            if (response.ok) {
                localStorage.setItem("token", response.headers.get("Authorization"))
                localStorage.setItem("username", username)
                window.location.href = '${backendUrl}/index.html';
            }
            else {
                window.location.href = '${backendUrl}/whoops.html';
            }
        })
        .catch(function (error) {
            window.location.href = '${backendUrl}/whoops.html';
        });
}

function registerPlayer(username, password, email) {
    let headers = setHeaders();
    fetch(`${backendUrl}/player/register`, {
        method: 'POST',
        headers: headers,
        body: {"username" : username, "password" : password, "email" : email}
    })
        .then((response) => {
            if (response.ok) {
                localStorage.setItem("token", response.headers.get("Authorization"))
                localStorage.setItem("username", username)
                window.location.href = '${backendUrl}/index.html';
            }
            else {
                window.location.url = '${backendUrl}/whoops.html';
                console.log(response)
            }
        })
        .catch(() => {
            window.location.href = '${backendUrl}/whoops.html';
        });
}

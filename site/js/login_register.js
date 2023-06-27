function loginFormBtn(event) {
    event.preventDefault();

    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    if (usernameInput.value == "" || passwordInput.value == "") {
        updateDisplayResult('failure', "Username and password cannot be empty.");
        return;
    }

    loginPlayer(usernameInput.value, passwordInput.value);
}

function registerFormBtn(event) {
    event.preventDefault();

    var usernameInput = document.getElementById("usernameInput");
    var passwordInput = document.getElementById("passwordInput");
    var emailInput = document.getElementById("emailInput");
    
    registerPlayer(usernameInput.value, passwordInput.value, emailInput.value);
}

function loginPlayer(username, password) {
    fetch(`${backendUrl}/login`, {
        method: 'POST',
        headers: setHeaders(),
        body: JSON.stringify({"username" : username, "password" : password})
    })
    .then((response) => {
        if (response.ok) {
            localStorage.setItem("token", response.headers.get("Authorization"))
            localStorage.setItem("username", username)
            window.location.href = `${backendUrl}/index.html`;
        }
        else {
            window.location.href = `${backendUrl}/whoops.html`;
        }
    })
    .catch(function (error) {
        window.location.href = `${backendUrl}/whoops.html`;
    });
}

function registerPlayer(username, password, email) {
    let headers = setHeaders();

    fetch(`${backendUrl}/register`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({username : username, password : password, email : email})
    })
    .then((response) => {
        if (response.ok) {
            localStorage.setItem("token", response.headers.get("Authorization"))
            localStorage.setItem("username", username)
            window.location.href = `${backendUrl}/index.html`;
        }
        else {
            window.location.href = `${backendUrl}/whoops.html`;
        }
    })
    .catch(function (error) {
        window.location.href = `${backendUrl}/whoops.html`;
    });

}

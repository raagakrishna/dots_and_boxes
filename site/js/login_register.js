//const backendUrl = 'https://georgepauer.com';
const backendUrl = 'http://localhost:8080';

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

function loginPlayer(username, password) {
    fetch(`${backendUrl}/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`, {
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
                console.log("REGISTERED")
                window.location.href = `${backendUrl}/whoops.html`;
            }
        })
        .catch(function (error) {
            console.log("REGISTERED")
            window.location.href = `${backendUrl}/whoops.html`;
        });
}

function registerPlayer(username, password, email) {

     let headers = setHeaders();

     fetch(`${backendUrl}/player/register`, {

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
                     console.log("REGISTERED")
                     window.location.href = `${backendUrl}/whoops.html`;
                 }
             })
             .catch(function (error) {
                 console.log("REGISTERED")
                 window.location.href = `${backendUrl}/whoops.html`;
             });

 }

function setHeaders() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Accept-Encoding', 'gzip, deflate, br');
    headers.append('Connection', 'keep-alive');
    headers.append('Access-Control-Allow-Origin', backendUrl);

    // headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    // headers.append('Session-Id', localStorage.getItem('sessionId')); // Include session ID in the headers

    return headers;
}
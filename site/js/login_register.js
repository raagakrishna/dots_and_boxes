function loginFormBtn(event) {
    event.preventDefault();

    var usernameInput = document.getElementById("usernameInput").value;
    var passwordInput = document.getElementById("passwordInput").value;

    // form validations 

    loginPlayer(usernameInput, passwordInput);
}

function loginPlayer(username, password) {
    // TODO: send request to backend (login)
    // console.log(username, password);
    updateDisplayResult('success', "Successfully logged in!");
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
}

function registerPlayer(username, password) {
    // TODO: send request to backend (logout)
    // console.log(username, password);
    updateDisplayResult('success', "Successfully registered!");
}

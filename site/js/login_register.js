function loginFormBtn(event) {
    event.preventDefault();

    var usernameInput = document.getElementById("usernameInput").value;
    var passwordInput = document.getElementById("passwordInput").value;

    // form validations 

    loginPlayer(usernameInput, passwordInput);
}

function loginPlayer(username, password) {
    // TODO: send request to backend 
}
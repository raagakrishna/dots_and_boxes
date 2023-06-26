function loadPage() {
    const username = localStorage.getItem("username");

    if (username == null) {
        window.location.href = 'login.html';
    }
    else {
        getPlayedGames();
    }  
}

function getPlayedGames(username) {

}
function loadPage() {
    const username = localStorage.getItem("username");

    if (username == null) {
        window.location.href = 'login.html';
    }
    else {
        getPlayedGames(username);
    }  
}

function getPlayedGames(username) {
    showLoadingScreen();

  fetch(`${backendUrl}/player/${encodeURIComponent(username)}/rooms`, {
      method: 'GET',
      headers: setHeaders()
  })
  .then(function (response) {
      if (response.ok) {
          return response.json();
      } 
      else {
          return response.json().then(function (errorMessage) {
              throw new Error(errorMessage.title);
          });
      }
  })
  .then(function (data) {
      roomsFound(data);

  })
  .catch(function (error) {
    noRoomsFound();
      return;
  })
  .finally(function () {
    hideLoadingScreen();
  });
}

function noRoomsFound() {
    var section = document.getElementById("playedGames");

    var h2 = document.createElement("h2");
    h2.textContent = "No games found";
    
    section.appendChild(h2)
}

function roomsFound(data) {
    var section = document.getElementById("playedGames");

    for (let i = 0 ; i < data.length ; i++) {
        const gameData = data[i];
        console.log(gameData);
        
        var article = document.createElement('article');
        article.classList.add("game-result");

        // add room name and room id 
        var h2 = document.createElement("h2");
        h2.classList.add("game-name");
        h2.textContent = gameData.roomName + " (" + gameData.roomId + ")";
        article.appendChild(h2);

        // adding players 
        var p1 = document.createElement("p");
        p1.classList.add("game-players");
        p1.textContent = "Players: ";

        // adding players + scores
        for (let j = 0 ; j < gameData.game.scores.length ; j++) { 
            const score = gameData.game.scores[j];
            p1.textContent += score.player.username + " (" + score.score + ")";
            if (j < gameData.game.scores.length - 1) {
                p1.textContent += ", ";
            }
        }

        article.appendChild(p1);
        
        // add room status
        var p2 = document.createElement("p");
        p2.textContent = "Status: " + gameData.status;
        article.appendChild(p2);
        
        // add winner if room is closed 
        if (gameData.status == 'CLOSED'){ 
            var p3 = document.createElement("p");
            if (gameData.game.status == 'DONE'){
                p3.textContent = "Winner: " + gameData.game.winner.username;
            }
            else {
                p3.textContent = gameData.game.status;
            }
            article.appendChild(p3);
        }
        
        section.appendChild(article);
        
    }
}

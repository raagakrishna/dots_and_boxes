function openTab(evt, tabName) {  
    // Get all tab content elements
    var tabContent = document.getElementsByClassName("tab-content");
    
    // Hide all tab content
    for (var i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    
    // Get all tab buttons
    var tabButtons = document.getElementsByClassName("tab");
    
    // Remove active class from all tab buttons
    for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }
    
    // Show the selected tab content
    document.getElementById(tabName).style.display = "block";
    
    // Add the active class to the clicked tab button
    evt.currentTarget.className += " active";
}

function createRoomFormBtn(event) {
  event.preventDefault();

  var gameNameCreate = document.getElementById("gameNameCreate");
  var gridSizeCreate = document.getElementById("gridSizeCreate");

  if (gameNameCreate.value === "") {
    updateDisplayResult('failure', 'Game name cannot be empty!', 'create');
    return;
  }
  else if (gridSizeCreate.value === "") {
    updateDisplayResult('failure', 'Grid size cannot be empty!', 'create');
    return;
  }
  else if (gridSizeCreate.value <= 1) {
    updateDisplayResult('failure', 'Grid size has to be greater than 1!', 'create');
    return;
  }

  var username = localStorage.getItem("username");

  createGameRoom(username, gameNameCreate.value, gridSizeCreate.value);
}

function createGameRoom(username, roomName, gridSize) {
  showLoadingScreen();

  fetch(`${backendUrl}/room?creatorUsername=${encodeURIComponent(username)}&roomName=${encodeURIComponent(roomName)}&gridSize=${encodeURIComponent(gridSize)}`, {
    method: 'POST',
    headers: setHeaders(),
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
    localStorage.setItem("roomId", data.roomId);
    window.location.href = 'game.html';
  })
  .catch(function (error) {
    updateDisplayResult('failure', error, 'create');
  })
  .finally(function () {
    hideLoadingScreen();
});
}

function joinRoomFormBtn(event) {
  event.preventDefault();

  var gameID = document.getElementById("gameID");

  if (gameID.value === "") {
    updateDisplayResult('failure', 'Please enter a game ID.', 'join');
    return;
  }

  var username = localStorage.getItem("username");

  joinGameRoom(username, gameID.value);
}

function joinGameRoom(username, gameID) {
  showLoadingScreen();

  fetch(`${backendUrl}/room/${encodeURIComponent(gameID)}/join/${encodeURIComponent(username)}`, {
    method: 'POST',
    headers: setHeaders(),
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
    localStorage.setItem("roomId", data.roomId);
    window.location.href = 'game.html';
  })
  .catch(function (error) {
    updateDisplayResult('failure', error, 'join');
  })
  .finally(function () {
    hideLoadingScreen();
});
}

function loadPage() {
  var username = localStorage.getItem("username");

  if (username == null) {
    window.location.href = 'login.html';
  }
  else {
    playerRoom(username);
  }
}

function playerRoom(username) {
  showLoadingScreen();

  fetch(`${backendUrl}/player/${encodeURIComponent(username)}/room`, {
      method: 'GET',
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
  .then(function (data) {
      localStorage.setItem("roomId", data);
      window.location.href = 'game.html';
      return data;
  })
  .catch(function (error) {
      return;
  })
  .finally(function () {
    hideLoadingScreen();
  });
}


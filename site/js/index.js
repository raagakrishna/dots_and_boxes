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

  if (gameNameCreate.value === "") {
    updateDisplayResult('failure', 'Game name cannot be empty!', 'create');
    return;
  }

  var username = localStorage.getItem("username");

  createGameRoom(username, gameNameCreate.value);
}

function createGameRoom(username, roomName) {
  fetch(`${backendUrl}/room?creatorUsername=${encodeURIComponent(username)}&roomName=${encodeURIComponent(roomName)}`, {
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
    console.log(data);
    // TODO: handle the success response (create game)
  })
  .catch(function (error) {
    updateDisplayResult('failure', error, 'create');
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
    console.log(data);
    // TODO: handle the success response (join room)
  })
  .catch(function (error) {
    updateDisplayResult('failure', error, 'join');
  });
}


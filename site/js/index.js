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

  createGameRoom(gameNameCreate.value);
}

function createGameRoom(roomName) {
  // TODO: send response to backend (create game)
}

function joinRoomFormBtn(event) {
  event.preventDefault();

  var gameID = document.getElementById("gameID");

  if (gameID.value === "") {
    updateDisplayResult('failure', 'Please enter a game ID.', 'join');
    return;
  }

  joinGameRoom(gameID.value);
}

function joinGameRoom(gameID) {
  // TODO: send response to backend (join game)
}


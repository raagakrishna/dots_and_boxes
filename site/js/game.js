let thisRoom = {}
var colours = ['red', 'blue', 'green', 'orange', 'yellow'];
var socket = {};

function loadGamePage() {
    const username = localStorage.getItem("username");

    if (username == null) {
        window.location.href = 'login.html';
    }
    else {
        const roomId = localStorage.getItem("roomId");
        getRoom(roomId);
        
        getSocket();
    }  
}

function getSocket() {
    const roomId = localStorage.getItem("roomId");
    openSocketConnection(roomId);
        
    socket.addEventListener('open', () => {
        console.log('WebSocket connection established');
    });
                
    socket.addEventListener('message', (event) => {
        // Handle the received message
        thisRoom = JSON.parse(event.data);
        console.log(thisRoom);
        updateGame();
    });
                
    socket.addEventListener('close', () => {
        console.log('WebSocket connection closed');
        openSocketConnection(roomId);
        getSocket();
    });
}

function hideDisplayResult() {
    var displayResult = document.getElementById('display-result');
    displayResult.style.display = 'none';
}

function openSocketConnection(roomId) {
    socket = new WebSocket('ws://localhost:8080/room/' + roomId);
    socket.timeout = 2147483647; // Set a very large timeout value (approximately 24.8 days)
}

function getRoom(roomID) {
    showLoadingScreen();

    fetch(`${backendUrl}/room/${encodeURIComponent(roomID)}`, {
        method: 'GET',
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
        thisRoom = data;
        updateGame();
    })
    .catch(function (error) {
        // updateDisplayResult('failure', error);
        localStorage.setItem("roomId", null);
        window.location.href = 'index.html';
    })
    .finally(function () {
        hideLoadingScreen();
    });
}

function updateGame() {
    hideDisplayResult();
    if (thisRoom.status == 'CLOSED')
        window.location.href = 'played.html';
    populateGameInfo(thisRoom.roomName, thisRoom.status, thisRoom.roomId, thisRoom.creator.username, thisRoom.game.currentPlayer.username, thisRoom.players);
    populatePlayerScores(thisRoom.game.scores, thisRoom.status);
    populateGrid(thisRoom.game, thisRoom.players);
    displayGameButtons(thisRoom.creator, thisRoom.status);
}

// Define the CoOrdinate class 
class CoOrdinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// Define the Dot class
class Dot {
    constructor(coordinate) {
        this.coordinate = coordinate;
    }
}

// Define the Line class 
class Line {
    constructor(coordinate) {
        this.coordinate = coordinate;
        this.dot1 = null;
        this.dot2 = null;
        this.occupied = false;
        this.player = null;
    }
    addDots(dot1, dot2) {
        this.dot1 = dot1;
        this.dot2 = dot2;
    }
    setOccupied(player){
        this.occupied = true;
        this.player = player;
    }
}

// Define the Box class 
class Box {
    constructor(coordinate) {
        this.coordinate = coordinate;
        this.line1 = null;
        this.line2 = null;
        this.line3 = null;
        this.line4 = null;
        this.occupied = false;
        this.player = null;
    }
    addLines(line1, line2, line3, line4) {
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;
        this.line4 = line4;
    }
    setOccupied(player){
        this.occupied = true;
        this.player = player;
    }
}

function displayGameButtons(gameCreator, status){
    const startButton = document.getElementById("startButton");
    const leaveButton = document.getElementById("leaveButton");
    const deleteButton = document.getElementById("deleteButton");

    const isCreator = gameCreator.username === localStorage.getItem("username");

    // display start button if creator and if game room is OPEN
    if (isCreator && status == 'OPEN' && !startButton.classList.contains('hidden')) {
        startButton.style.display = "block";
    } 
    else {
        startButton.style.display = "none";
    }

    if (isCreator && !deleteButton.classList.contains('hidden')) {
        deleteButton.style.display = 'block';
    }
    else {
        deleteButton.style.display = 'none';
    }

    // TODO: remove status part if leave room functionality changes
    if (!isCreator && !leaveButton.classList.contains('hidden')) {
        leaveButton.style.display = 'block';
        if (status != 'OPEN') {
            leaveButton.disabled = true;
        }
    }
    else {
        leaveButton.style.display = 'none';
    }
}

function populateGameInfo(roomName, roomStatus, roomId, roomCreator, roomCurrentPlayer, players) {
    const gameData = {
        "Name": roomName,
        "Status": roomStatus.charAt(0) + roomStatus.slice(1).toLowerCase(),
        "Room ID": roomId,
        "Creator": roomCreator,
        "Number of players": players.length
    }

    var gameInfo = document.getElementById("gameInfo");
    gameInfo.innerHTML = "";

    for (const key in gameData) {
        const li = document.createElement("li");
        
        const b = document.createElement("b");
        b.textContent = key + ":";
        li.appendChild(b);

        const value = document.createTextNode(gameData[key]);
        li.appendChild(value);

        gameInfo.appendChild(li);
    }

    if (roomStatus != 'OPEN') {
        const li = document.createElement("li");
            
        const b = document.createElement("b");
        b.textContent = "Current player:";
        li.appendChild(b);

        const value = document.createTextNode(roomCurrentPlayer);
        li.appendChild(value);

        // colour the currentPlayer
        const currentPlayerIndex = players.findIndex(player => player.username === roomCurrentPlayer);
        li.style.color = colours[currentPlayerIndex];

        gameInfo.appendChild(li);
    }
}

function populatePlayerScores(scores, status) {
    var gameScores = document.getElementById("gameScores");
    gameScores.innerHTML = "";

    scores.forEach((score, index) => {
        const li = document.createElement("li");

        const b = document.createElement("b");
        b.textContent = score.player.username + ":";
        li.appendChild(b);
            
        const value = document.createTextNode(score.score);
        li.appendChild(value);
        li.style.color = colours[index];

        gameScores.appendChild(li);
    });
}

function toggleContent() {
    var gameInfo = document.getElementById("gameInfo");
    gameInfo.classList.toggle("hidden");

    if (thisRoom.status != 'OPEN') {
        var gameScores = document.getElementById("gameScores");
        gameScores.classList.toggle("hidden");
    }

    const startButton = document.getElementById("startButton");
    const leaveButton = document.getElementById("leaveButton");
    const deleteButton = document.getElementById("deleteButton");
    startButton.classList.toggle("hidden");
    leaveButton.classList.toggle("hidden");
    deleteButton.classList.toggle("hidden");

    displayGameButtons(thisRoom.creator, thisRoom.status);
}

function findDotBasedOnCoordinate(dots, coordinate) {
    return dots.find(dot => dot.coordinate.x === coordinate.x && dot.coordinate.y === coordinate.y) || null;
}

function findLineBasedOnCoordinate(lines, coordinate) {
    return lines.find(line => line.coordinate.x === coordinate.x && line.coordinate.y === coordinate.y) || null;
}

function findBoxBasedOnCoordinate(boxes, coordinate) {
    return boxes.find(box => box.coordinate.x === coordinate.x && box.coordinate.y === coordinate.y) || null;
}

function findCoordinate(dots, lines, boxes, coordinate) {
    const dot = findDotBasedOnCoordinate(dots, coordinate);
    if (dot) {
      return [dot, "Dot"];
    }
  
    const line = findLineBasedOnCoordinate(lines, coordinate);
    if (line) {
      return [line, "Line"];
    }
  
    const box = findBoxBasedOnCoordinate(boxes, coordinate);
    if (box) {
      return [box, "Box"];
    }
  
    return [null, null];
  }

function getCoordiante(line) {
    // Get the parent cell of the line
    const cell = line.parentNode;

    // Get the index of the line within its parent cell
    let xIndex = Array.from(cell.children).indexOf(line);
    let yIndex = Array.from(cell.parentNode.children).indexOf(cell);

    return new CoOrdinate(xIndex, yIndex);
}

function populateGrid(game, players) {
    var gridSize = game.gridSize;
    var dots = game.dots;
    var lines = game.lines;
    var boxes = game.boxes;
    
    // Generate the HTML table based on the dot coordinates
    const table = document.getElementById('game');
    table.innerHTML = "";
    table.classList.add('game');

    for (let i = 0; i < Tn(gridSize); i++) {
        const row = document.createElement('tr');
        
        for (let j = 0 ; j < Tn(gridSize) ; j++) {
            const td = document.createElement('td');
            
            var coordinateType = findCoordinate(dots, lines, boxes, new CoOrdinate(j, i));

            // return;
            
            // if Dot
            if (coordinateType[1] == 'Dot'){
                td.classList.add('dot');
            }

            // if Line
            else if (coordinateType[1] == 'Line') {
                td.classList.add('line');
                if (coordinateType[0].status != 'EMPTY'){
                    td.classList.add('selected');

                    // Adding colour 
                    const playerIndex = players.findIndex(player => player.username === coordinateType[0].player.username);
                    td.classList.add('player' + playerIndex);
                    td.style.backgroundColor = colours[playerIndex];
                }
            }

            // if Box
            else {
                td.classList.add('box');
                if (coordinateType[0].status != 'EMPTY'){
                    td.classList.add('completed');

                    // Adding cross
                    const playerIndex = players.findIndex(player => player.username === coordinateType[0].player.username);
                    td.classList.add('player' + playerIndex);
                    td.style.color = colours[playerIndex];
                    td.innerHTML = "X";
                }
            }

            row.appendChild(td);
        }
        
        table.appendChild(row);
    }
    
    // Get all the line elements
    const theseLines = document.querySelectorAll('.line');

    // Add click event listener to each line
    theseLines.forEach(line => {
        line.addEventListener('click', handleLineClick);
    });
}

function handleLineClick(event) {
    const clickedLine = event.target;

    if (thisRoom.status == 'OPEN') {
        updateDisplayResult('failure', "The game has not started yet!");
        return;
    }

    // valid turn
    if (thisRoom.game.currentPlayer.username == localStorage.getItem("username")) { 
        // Find Line 
        var coordinate = getCoordiante(clickedLine);
        var line = findLineBasedOnCoordinate(thisRoom.game.lines, coordinate);
        
        // Check if Line is already selected
        if (line.status != 'EMPTY') {
            return;
        }
        
        // send 
        var roomId = thisRoom.roomId;
        var username = localStorage.getItem("username");
        sendPlayerMove(roomId, username, coordinate.x, coordinate.y);
    }
    else {
        updateDisplayResult('failure', "It is not your turn!");
    }
}

function sendPlayerMove(roomID, username, x, y){
    showLoadingScreen();

    fetch(`${backendUrl}/room/${encodeURIComponent(roomID)}/sendPlayerMove/${encodeURIComponent(username)}`, {
        method: 'POST',
        headers: setHeaders(),
        body: JSON.stringify({"x": x, "y": y})
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
        // TODO: handle the success response (player move)
        updateDisplayResult('success', 'Line selected.');
        thisRoom = JSON.parse(data);
        updateGame();
    })
    .catch(function (error) {
        updateDisplayResult('failure', error);
    })
    .finally(function () {
        hideLoadingScreen();
    });
}

function Tn(n) {
    return (2 * n) - 1;
}

function startBtnClicked() {
    var roomID = thisRoom.roomId;
    var username = localStorage.getItem("username");

    startGame(username, roomID);
}

function leaveBtnClicked() {
    var roomID = thisRoom.roomId;
    var username = localStorage.getItem("username");
    leaveGame(username, roomID);
}

function deleteBtnClicked() {
    var roomID = thisRoom.roomId;
    var username = localStorage.getItem("username");
    deleteGame(username, roomID);
}

function startGame(username, roomID) {
    showLoadingScreen();

    fetch(`${backendUrl}/room/${encodeURIComponent(roomID)}/start/${encodeURIComponent(username)}`, {
        method: 'GET',
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
        // TODO: handle the success response (start room)
        updateDisplayResult('success', 'Room started successfully!');
        thisRoom = data;
        updateGame();
    })
    .catch(function (error) {
        updateDisplayResult('failure', error);
    })
    .finally(function () {
        hideLoadingScreen();
    });
}

function leaveGame(username, roomID) {
    showLoadingScreen();

    fetch(`${backendUrl}/room/${encodeURIComponent(roomID)}/leave/${encodeURIComponent(username)}`, {
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
        // TODO: handle the success response (leave room)
        window.location.href = 'index.html';
    })
    .catch(function (error) {
        updateDisplayResult('failure', error);
    })
    .finally(function () {
        hideLoadingScreen();
    });
}

function deleteGame(username, roomID) {
    showLoadingScreen();

    fetch(`${backendUrl}/room/${encodeURIComponent(roomID)}/delete/${encodeURIComponent(username)}`, {
        method: 'DELETE',
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
        // TODO: handle the success response (delete room)
        window.location.href = 'index.html';
    })
    .catch(function (error) {
        updateDisplayResult('failure', error);
    })
    .finally(function () {
        hideLoadingScreen();
    });
}

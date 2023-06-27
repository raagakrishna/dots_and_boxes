const backendUrl = 'https://georgepauer.com';

function addHeader() {

    var myHeader = document.getElementById("header");
    myHeader.classList.add("purple_box");

    // adding game name
    var h1 = document.createElement("h1");
    h1.textContent = "Dots and Boxes";
    myHeader.appendChild(h1);

    // adding dropdown 
    var dropdown = document.createElement("section");
    dropdown.classList.add("dropdown");

    // adding username
    var username = document.createElement("a");
    username.setAttribute("id", "username");
    username.innerHTML = localStorage.getItem("username") + "  ";
    dropdown.appendChild(username);

    // adding dropdown content 
    var ul = document.createElement("ul");
    ul.classList.add("dropdown-content");

    // adding li
    var li1 = document.createElement("li");
    a1 = document.createElement("a");
    a1.textContent = "Your played games";
    a1.href = 'played.html';
    li1.appendChild(a1);
    ul.appendChild(li1);

    var li2 = document.createElement("li");
    let a2 = document.createElement("a");
    a2.textContent = "Logout";
    a2.onclick = function() {
        logoutPlayer(localStorage.getItem("username"));
    }
    a2 = document.createElement("a");
    a2.textContent = "Play a game";
    a2.href = 'index.html';
    li2.appendChild(a2);
    ul.appendChild(li2);

    var li3 = document.createElement("li");
    a3 = document.createElement("a");
    a3.textContent = "Logout";
    a3.onclick = function() {
        logoutPlayer(localStorage.getItem("username"));
    }
    li3.appendChild(a3);
    ul.appendChild(li3);

    dropdown.appendChild(ul);
    myHeader.appendChild(dropdown);

    addLoader();
}

function addLoader() {
    var loadingScreen = document.createElement("section");
    loadingScreen.setAttribute("id", "loading-screen");

    var loader = document.createElement("p");
    loader.setAttribute("class", "loader");

    loadingScreen.appendChild(loader);
    document.body.appendChild(loadingScreen);
}

function logoutPlayer(username) {
    showLoadingScreen();

    fetch(`${backendUrl}/player/${username}/logout`, {
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
    .then(function (message) {
        // TODO: handle the success response (logout)
        localStorage.clear();
        window.location.href = 'login.html';
    })
    .catch(function (error) {
        updateDisplayResult('failure', error);
    })
    .finally(function () {
        hideLoadingScreen();
    });
}

function addFooter() {
    var myFooter = document.getElementById("footer");
    myFooter.classList.add("purple_box");
    myFooter.textContent = "\u00A9 2023 Dots and Boxes";
}

function updateDisplayResult(displayType, message, special) {
    // Get the error box element
    if (special == 'join') {
        var displayResult = document.getElementById('display-result-join');
    }
    else if (special == 'create') {
        var displayResult = document.getElementById('display-result-create');
    }
    else {
        var displayResult = document.getElementById('display-result');
    }

    displayResult.style.display = 'block';
    displayResult.innerHTML = message;

    // add error class 
    displayResult.classList.add(displayType);

    // Create the close button element
    var closeButton = document.createElement('span');
    closeButton.textContent = 'X';
    closeButton.style.cursor = 'pointer';
    closeButton.style.marginLeft = '10px';
    closeButton.style.float = 'right';
    closeButton.style.transform = 'translateY(-50%)';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '50%';
    closeButton.style.right = '15px';

    if (displayType === 'failure') {
        closeButton.style.color = 'red';
    }
    else if (displayType === 'success') {
        closeButton.style.color = 'green';
    }

    // Add a click event listener to the close button
    closeButton.addEventListener('click', function() {
      displayResult.style.display = 'none';
    });

    // Append the close button to the error box
    displayResult.appendChild(closeButton);
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

function showLoadingScreen() {
    document.getElementById('loading-screen').style.display = 'block';
  }
  
  function hideLoadingScreen() {
    document.getElementById('loading-screen').style.display = 'none';
  }
  
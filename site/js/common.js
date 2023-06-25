function addHeader() {
    localStorage.setItem("username", "peter");

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
    li1.textContent = "Your played games";
    ul.appendChild(li1);

    var li2 = document.createElement("li");
    li2.textContent = "Logout";
    ul.appendChild(li2);

    dropdown.appendChild(ul);
    myHeader.appendChild(dropdown);
}

function addFooter() {
    var myFooter = document.getElementById("footer");
    myFooter.classList.add("purple_box");
    myFooter.textContent = "\u00A9 2023 Dots and Boxes";
}

function updateDisplayResult(displayType, message) {
    // Get the error box element
    var displayResult = document.getElementById('display-result');
    displayResult.style.display = 'block';
    displayResult.innerHTML = message;

    // add error class 
    displayResult.classList.add(displayType);

    // Create the close button element
    var closeButton = document.createElement('span');
    closeButton.textContent = 'X';
    closeButton.style.cursor = 'pointer';
    closeButton.style.marginLeft = '5px';
    closeButton.style.float = 'right';

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
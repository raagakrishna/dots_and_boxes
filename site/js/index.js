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
function switchContent(index) {
  // Hide all content elements
  var contents = document.getElementsByClassName("content");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  
  // Show the selected content element
  document.getElementById("content" + (index + 1)).style.display = "block";
  
  // Update active menu item
  var menuItems = document.getElementsByClassName("journey-menu-item");
  for (var i = 0; i < menuItems.length; i++) {
    var button = menuItems[i].getElementsByTagName("button")[0];
    if (i === index) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  }
}

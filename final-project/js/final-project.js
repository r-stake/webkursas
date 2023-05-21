function switchContent(index) {
  // Hide all content elements
  var contents = document.getElementsByClassName("content");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  
  // Show the selected content element
  document.getElementById("content" + (index + 1)).style.display = "block";
  
  // Update active menu item
  var menuItems = document.getElementsByClassName("journey-menu-item")[0].getElementsByTagName("button");
  for (var i = 0; i < menuItems.length; i++) {
    if (i === index) {
      menuItems[i].classList.add("active");
    } else {
      menuItems[i].classList.remove("active");
    }
  }
}

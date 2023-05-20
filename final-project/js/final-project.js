function switchContent(index) {
    // Hide all content elements
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
    }
    
    // Show the selected content element
    document.getElementById("content" + (index + 1)).style.display = "block";
    
    // Update active menu item
    var menuItems = document.getElementsByClassName("menu")[0].getElementsByTagName("a");
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("active");
    }
    menuItems[index].classList.add("active");
  }
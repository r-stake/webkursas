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

// Get all gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

// Add click event listener to each gallery item
galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Remove 'clicked' class from all gallery items
    galleryItems.forEach((item) => {
      item.classList.remove('clicked');
      item.classList.add('not-clicked');
    });
    // Add 'clicked' class to the clicked gallery item
    item.classList.add('clicked');
  });
});

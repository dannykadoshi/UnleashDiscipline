/*  jshint esversion: 11 */
/** 
 * Event listener registration for the close button at the thankyou.html page
 */
 document.addEventListener('DOMContentLoaded', function() {
    // Event listener registration for the close button
    const closeButton = document.getElementById("thanks-close-btn");
    if (closeButton) {
      closeButton.addEventListener("click", function() {
        window.location.href = "index.html";
      });
    }
  });  

/** 
 * Declared variables for the hamburguer menu
 * for the header menu
 * Activation only for smaller screens
 */

// Get the burger menu icon and menu list
const burgerMenuIcon = document.querySelector('.burger-menu-icon');
const menuList = document.querySelector('.menu');

// Hide the menu list initially
menuList.style.display = 'none';

// Add click event listener to the burger menu icon
burgerMenuIcon.addEventListener('click', function() {
  // Toggle the "open" class on the burger menu icon
  burgerMenuIcon.classList.toggle('open');

  // Toggle the display of the menu list
  if (menuList.style.display === 'none') {
    menuList.style.display = 'flex';
  } else {
    menuList.style.display = 'none';
  }
});

// Add click event listener to window to close the menu when clicking outside of it
window.addEventListener('click', function(event) {
  // Check if the clicked element is within the menu container or its descendants
  const isClickedInsideMenu = menuList.contains(event.target) || burgerMenuIcon.contains(event.target);
  
  // If the clicked element is outside the menu, hide the menu list
  if (!isClickedInsideMenu && window.innerWidth <= 768) {
    menuList.style.display = 'none';
    burgerMenuIcon.classList.remove('open');
  }
});

// Add resize event listener to show/hide the menu based on screen size
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    menuList.style.display = 'flex';
    burgerMenuIcon.classList.remove('open');
  } else {
    menuList.style.display = 'none';
  }
});

// Initially check the screen size on page load
if (window.innerWidth > 768) {
  menuList.style.display = 'flex';
}

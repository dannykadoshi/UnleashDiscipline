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


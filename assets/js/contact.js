/*  jshint esversion: 11 */

/** 
 * Event listener to the Back home button located at the contact.html page
 * Clicking the button will trigger the event listener to navigate back to the home page
 */
// Get the Back Home button element
const backHomeButton = document.getElementById('contact-back-btn');

// Add click event listener to the Back Home button
backHomeButton.addEventListener('click', navigateBackHome);

// Function to navigate back to the home page
function navigateBackHome(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    window.location.href = 'index.html'; // Replace 'index.html' with the actual URL of your home page
}


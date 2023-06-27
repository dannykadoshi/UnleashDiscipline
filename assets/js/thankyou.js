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
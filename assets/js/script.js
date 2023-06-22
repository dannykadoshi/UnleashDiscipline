/*  jshint esversion: 11 */

/* main variables to control the random quotes generator and quote of the day */
const quizButton = document.getElementById('quiz-btn');
quizButton.addEventListener('click', () => {

    // Redirect to Quiz Page
    window.location.href = 'quiz.html';
});

/**
 * Function to add quotation marks to the quote text
 */
function addQuotationMarks() {
    const text = quoteText.textContent;
    quoteText.textContent = `"${text}"`;
}

/**
 * Function to generate a random quote excluding Andy Frisella author
 */
function generateRandomQuote() {
    let nonAndyQuotes = quotes.filter((quote) => quote.author !== 'Andy Frisella');

    // Check if there are non-Andy quotes available
    if (nonAndyQuotes.length > 0) {
        let randomIndex = Math.floor(Math.random() * nonAndyQuotes.length);
        let randomQuote = nonAndyQuotes[randomIndex];

        quoteText.textContent = randomQuote.text;
        quoteAuthor.textContent = randomQuote.author;

        addQuotationMarks();
    } else {
        // Handle the case when there are no non-Andy quotes available
        quoteText.textContent = "No quotes available";
        quoteAuthor.textContent = "";
    }
}

// Get the quote text element
const quoteText = document.getElementById('quote-text');

// Get quote container elements
const quoteOfDayText = document.querySelector('.quote-text-day');
const quoteAuthor = document.getElementById('quote-author');

// Get new quote button element
const newQuoteBtn = document.getElementById('new-quote-btn');

// Get copy button element
const copyBtn = document.getElementById('copy-btn');

// Get notification message element
const notification = document.getElementById('notification');

// Function to generate the quote of the day (Only Andy Frisella's quotes)
function generateQuoteOfDay() {
    let andyQuotes = quotes.filter((quote) => quote.author === 'Andy Frisella');

    // Get the current date and time
    let currentDate = new Date();

    // Set the target time for the quote update (12:00 AM)
    let targetTime = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        0, 0, 0
    );

    // Check if the current time is past the target time
    if (currentDate > targetTime) {
        // Get the quote for the current day
        let quoteIndex = currentDate.getDay() % andyQuotes.length;
        let quoteOfTheDay = andyQuotes[quoteIndex];

        // Set the quote text and author for the quote of the day
        quoteOfDayText.textContent = `"${quoteOfTheDay.text}"`;
        quoteAuthor.textContent = quoteOfTheDay.author;

        // Add quotation marks after setting the quote text
        addQuotationMarks();

        // Generate a random quote excluding Andy Frisella
        generateRandomQuote();
    }

    // Calculate the time difference until the next day
    let timeDifference = targetTime.getTime() + 24 * 60 * 60 * 1000 - currentDate.getTime();

    // Schedule the next quote update at the target time of the next day
    setTimeout(generateQuoteOfDay, timeDifference);
}

// Start updating the quote of the day
generateQuoteOfDay();



/**
 * Helper function to get the week number of a given day
 */
function getWeekNumber(date) {
    const onejan = new Date(date.getFullYear(), 0, 1);
    const millisecondsInWeek = 7 * 24 * 60 * 60 * 1000;
    return Math.ceil(((date - onejan) / millisecondsInWeek) + onejan.getDay() / 7);
}

// Start updating the quote of the week
generateQuoteOfDay();

// Generate a random quote when the new quote button is clicked
newQuoteBtn.addEventListener('click', generateRandomQuote);

// Function to copy the quote to clipboard
function copyToClipboard(text) {
    let textArea = document.createElement('textarea');
    textArea.value = text;

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}

// Event listener for the "Copy" button
copyBtn.addEventListener('click', function () {
    const textToCopy = quoteText.textContent + ' - ' + quoteAuthor.textContent;
    copyToClipboard(textToCopy);
    console.log('Text copied to clipboard: ' + textToCopy);

    // Show notification message when copy buttom is clicked
    notification.textContent = 'Copied to clipboard successfully!';
    notification.classList.add('show');

    // Hide copy notification message after 3 seconds
    setTimeout(function () {
        notification.classList.remove('show');
    }, 3000);
});

/**
 * Function to share the quote and author to Twitter
 */
function shareToTwitter() {
    const quote = quoteText.textContent;
    const author = quoteAuthor.textContent;
    const shareUrl = 'https://dannykadoshi.github.io/UnleashDiscipline/#';

    // Create the share message
    let message = `${quote} - ${author}`;

    // Create the Twitter share link
    let shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(
        shareUrl
    )}`;

    // Open the Twitter share link in a new window
    window.open(shareLink, '_blank');
}

/**
 * Function to share the quote and author to Whatsapp
 */
function shareToWhatsApp() {
    const quote = quoteText.textContent;
    const author = quoteAuthor.textContent;
    const shareUrl = 'https://dannykadoshi.github.io/UnleashDiscipline/#';

    // Create the share message
    let message = `${quote} - ${author}`;

    // Create the WhatsApp share link
    let shareLink = `https://wa.me/?text=${encodeURIComponent(message + ' ' + shareUrl)}`;

    // Open the WhatsApp share link in a new window
    window.open(shareLink, '_blank');
}

/**
 * Function to share the quote and author to Facebook
 */
function shareToFacebook() {
    const quote = quoteText.textContent;
    const author = quoteAuthor.textContent;
    const shareUrl = 'https://dannykadoshi.github.io/UnleashDiscipline/#'; // Share the webpage and not the quote

    // Create the share message
    let message = `${quote} - ${author}`;

    // Create the Facebook share link
    let shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(
        message
    )}`;

    // Open the Facebook share link in a new window
    window.open(shareLink, '_blank');
}

/**
 * Function to share the quote and author to Linkedin
 */
function shareToLinkedIn() {
    const quote = quoteText.textContent;
    const author = quoteAuthor.textContent;
    const shareUrl = 'https://dannykadoshi.github.io/UnleashDiscipline/#'; // Share the webpage and not the quote

    // Create the share message
    let message = `${quote} - ${author}`;

    // Create the LinkedIn share link
    let shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
    )}&summary=${encodeURIComponent(message)}`;

    // Open the LinkedIn share link in a new window
    window.open(shareLink, '_blank');
}

/**
 * Function to share the quote and author to Pinterest
 */
function shareToPinterest() {
    const quote = quoteText.textContent;
    const author = quoteAuthor.textContent;
    const shareUrl = 'https://dannykadoshi.github.io/UnleashDiscipline/#'; // Share the webpage and not the quote

    // Create the share message
    let message = `${quote} - ${author}`;

    // Create the Pinterest share link
    let shareLink = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
        shareUrl
    )}&description=${encodeURIComponent(message)}`;

    // Open the Pinterest share link in a new window
    window.open(shareLink, '_blank');
}

/**
 * Function to share the quote and author to Email
 */
function shareViaEmail() {
    const quote = quoteText.textContent;
    const author = quoteAuthor.textContent;
    const subject = 'Check out this inspiring quote!';
    const body = `${quote} - ${author}`;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(
        subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the mailto link in a new window or redirect to the default email client
    window.open(mailtoLink);
}

// Event listener for the Twitter icon
document.getElementById('twitter-icon').addEventListener('click', shareToTwitter);

// Event listener for the WhatsApp icon
document.getElementById('whatsapp-icon').addEventListener('click', shareToWhatsApp);

// Event listener for the Facebook icon
document.getElementById('facebook-icon').addEventListener('click', shareToFacebook);

// Event listener for the LinkedIn icon
document.getElementById('linkedin-icon').addEventListener('click', shareToLinkedIn);

// Event listener for the Pinterest icon
document.getElementById('pinterest-icon').addEventListener('click', shareToPinterest);

// Event listener for the email icon
document.getElementById('email-icon').addEventListener('click', shareViaEmail);

/**
 * Function to generate rating system for the hearts rating
 */

// Get the rating container and hearts
const ratingContainer = document.querySelector('.rating');
const hearts = ratingContainer.getElementsByClassName('heart');

// Get the rating value display element
const ratingValueElement = document.getElementById('rating-value');

// Get the feedback message element
const feedbackMessageElement = document.createElement('p');
feedbackMessageElement.classList.add('feedback-message');

// Initialize the rating value
let ratingValue = 0;

// Add click event listener to each heart
for (let i = 0; i < hearts.length; i++) {
  const heart = hearts[i];
  
  heart.addEventListener('click', function() {
    // Get the selected rating value from the heart
    const selectedValue = parseInt(heart.getAttribute('data-value'));

    // Update the rating value
    ratingValue = selectedValue;

    // Update the rating value display
    ratingValueElement.textContent = `Rating: ${ratingValue}`;

    // Update the heart states
    updateHeartStates(selectedValue);

    // Show feedback message
    showFeedbackMessage();
  });
}

// Function to update the heart states
function updateHeartStates(selectedValue) {
  for (let i = 0; i < hearts.length; i++) {
    const heart = hearts[i];
    
    if (i < selectedValue) {
      heart.classList.add('selected');
    } else {
      heart.classList.remove('selected');
    }
  }
}

// Show feedback message
function showFeedbackMessage() {
  feedbackMessageElement.textContent = 'Thanks for your feedback!';
  ratingContainer.appendChild(feedbackMessageElement);
}

// Send the rating value to the server
function sendRatingToServer(ratingValue) {
    // You can use AJAX to send the rating value to the server and update the database
    // Here's a basic example using fetch API
    fetch('/rate-quote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rating: ratingValue })
    })
        .then(response => {
            if (response.ok) {
                // Rating successfully submitted
                console.log('Rating submitted');
            } else {
                // Error handling if rating submission fails
                console.error('Failed to submit rating');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Disable further rating by removing event listeners
function disableRating() {
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].removeEventListener('click', handleRating);
    }
}
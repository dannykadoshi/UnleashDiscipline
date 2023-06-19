/*  jshint esversion: 11 */
// JavaScript for Main Page
const quizButton = document.getElementById('quiz-btn');

quizButton.addEventListener('click', () => {
  // Redirect to Quiz Page
  window.location.href = 'quiz.html';
});

// Function to add quotation marks to the quote text
function addQuotationMarks() {
    const text = quoteText.textContent;
    quoteText.textContent = `"${text}"`;
}

// Function to generate a random quote excluding Andy Frisella
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
const quoteOfWeekText = document.querySelector('.quote-text-day');
const quoteAuthor = document.getElementById('quote-author');

// Get new quote button element
const newQuoteBtn = document.getElementById('new-quote-btn');

// Get copy button element
const copyBtn = document.getElementById('copy-btn');

// Get notification message element
const notification = document.getElementById('notification');

// Function to generate the quote of the week (Andy Frisella quotes)

function generateQuoteOfWeek() {
    let andyQuotes = quotes.filter((quote) => quote.author === 'Andy Frisella');

    // Get the current week number
    let currentWeekNumber = getWeekNumber(new Date());

    // Calculate the index based on the current week number
    let quoteIndex = (currentWeekNumber - 1) % andyQuotes.length;

    // Get the quote for the current week
    let quoteOfTheWeek = andyQuotes[quoteIndex];

    // Set the quote text and author for the quote of the week
    quoteOfWeekText.textContent = `"${quoteOfTheWeek.text}"`;
    quoteAuthor.textContent = quoteOfTheWeek.author;

    // Add quotation marks after setting the quote text
    addQuotationMarks();

    // Generate a random quote excluding Andy Frisella
    generateRandomQuote();
}

// Helper function to get the week number of a given date
function getWeekNumber(date) {
    const onejan = new Date(date.getFullYear(), 0, 1);
    const millisecondsInWeek = 7 * 24 * 60 * 60 * 1000;
    return Math.ceil(((date - onejan) / millisecondsInWeek) + onejan.getDay() / 7);
}

// Start updating the quote of the week
generateQuoteOfWeek();

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

    // Show notification message
    notification.textContent = 'Copied to clipboard successfully!';
    notification.classList.add('show');

    // Hide notification message after 3 seconds
    setTimeout(function () {
        notification.classList.remove('show');
    }, 3000);
});

// Function to share the quote and author to Twitter
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

// Function to share the quote and author to WhatsApp
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

// Function to share the quote and author to Facebook
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

// Function to share the quote and author to LinkedIn
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

// Function to share the quote and author to Pinterest
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

// Function to share the quote and author via email
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

// Get the timer element
const timerElement = document.getElementById('timer');

// Function to update the timer and generate a new quote of the day
function updateTimer() {
    // Get the current date and time
    const now = new Date();

    // Get the next day
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    // Calculate the remaining time in milliseconds
    const remainingTime = tomorrow.getTime() - now.getTime();

    // Calculate the remaining hours, minutes, and seconds
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update the timer elements with the corresponding values
    document.getElementById('timer-days').innerHTML = `<span class="timer-text">Next quote in: </span>`;
    document.getElementById('timer-countdown').innerHTML = `<span class="timer-component">${hours}h ${minutes}m ${seconds}s</span>`;

    // Generate a new quote of the day when the timer reaches 00:00:00
    if (hours === 0 && minutes === 0 && seconds === 0) {
        generateQuoteOfDay();
    }

    // Update the timer every second
    setTimeout(updateTimer, 1000);
}

// Call the updateTimer function to start the timer
updateTimer();


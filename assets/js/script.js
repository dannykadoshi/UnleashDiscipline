// Array of quotes
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
      },
      {
        text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer"
      },
      {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
      },
      {
        text: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
      },
];

// Get quote container elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

//Get new quote buttom element
const newQuoteBtn = document.getElementById('new-quote-btn');

//Function to Generate a random quote
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    //Set the quote text and author
    quoteText.textContent = randomQuote.text;
    quoteAuthor.textContent = randomQuote.author;
}

//Generate a random quote when the page loads
window.addEventListener('load', generateRandomQuote);

//Generate a random quote when the new quote button is clicked
newQuoteBtn.addEventListener('click', generateRandomQuote);
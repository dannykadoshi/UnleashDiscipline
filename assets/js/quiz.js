/*jshint esversion: 6 */

// Rules content
const rules = [
    'Enter your name',
    'Click Start',
    'Read the question carefully and select your answer',
    'It\'s mandatory to select an answer before moving to the next question',
    'Answer the question and click Next',
    'Repeat the process until you reach the last question',
    'Answer the last question and click Finish',
    'Your result will be displayed',
    'Select Home to go back to the main page'
];

// Function to create the rules list
function createRulesList() {
    const rulesList = document.getElementById('rules-list');

    rules.forEach(function (rule) {
        const listItem = document.createElement('li');
        listItem.textContent = rule;
        rulesList.appendChild(listItem);
    });
}

// Event listener for the Close button
document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('rules-section').style.display = 'none';
});


// Event listener for the Rules button
document.getElementById('rules-btn').addEventListener('click', function () {
    document.getElementById('rules-section').style.display = 'block';
});

// Create the rules list on page load
window.addEventListener('DOMContentLoaded', createRulesList);



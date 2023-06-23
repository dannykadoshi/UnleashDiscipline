/* jshint esversion: 11 */
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const playerNameElement = document.getElementById("player-name");
const scoreElement = document.getElementById("score");
const feedbackMessage = document.getElementById("feedback-message");

const numQuestions = 10; // Number of questions in each game
let currentQuestion = 0;
let score = 0;
let questionPool = []; // Pool of questions for each game
let playerName; 

function loadQuestion() {
    const question = questionPool[currentQuestion];
    questionElement.textContent = question.question;

    optionsElement.innerHTML = "";

    const shuffledOptions = shuffleArray(question.options); // Shuffle the options

    shuffledOptions.forEach(function (option, index) {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", checkAnswer.bind(null, button));
        optionsElement.appendChild(button);
    });

    playerNameElement.textContent = `Welcome ${playerName}👋`;
    scoreElement.textContent = `Score: ${score}/${numQuestions}`;
}

function selectRandomQuestions() {
    questionPool = [];
    const totalQuestions = guessWhoSaid.length;

    // Randomly select questions from the pool until reaching the desired number
    while (questionPool.length < numQuestions) {
        const randomIndex = Math.floor(Math.random() * totalQuestions);
        const randomQuestion = guessWhoSaid[randomIndex];

        // Avoid duplicate questions
        if (!questionPool.includes(randomQuestion)) {
            questionPool.push(randomQuestion);
        }
    }
}

function startGame() {
    playerName = document.getElementById("name").value.trim();

    if (playerName === "") {
        displayFeedbackMessage("Attention! Game initiation requires a designated name! Reveal it and embark on this journey!");
        return;
    }

    feedbackMessage.style.display = "none";
    document.getElementById("name-container").style.display = "none";
    document.getElementById("ready-container").style.display = "none";
    document.getElementById("quiz-questions-section").style.display = "block";
    document.getElementById("results-section").style.display = "none";

    currentQuestion = 0;
    score = 0;
    selectRandomQuestions(); // Select random subset of questions
    loadQuestion();
}

function checkAnswer(selectedButton) {
    const question = questionPool[currentQuestion];

    if (selectedButton.textContent === question.correct) {
        score++;
        resultElement.textContent = "WOW, THAT'S CORRECT!";
        resultElement.classList.add("correct");
        selectedButton.classList.add("correct");
    } else {
        resultElement.textContent = "WRONG ANSWER!";
        resultElement.classList.add("incorrect");
        selectedButton.classList.add("incorrect");
        const correctButton = Array.from(optionsElement.getElementsByClassName("option")).find(
            (btn) => btn.textContent === question.correct
        );
        correctButton.classList.add("correct");
    }

    setTimeout(() => {
        resultElement.textContent = "";
        resultElement.classList.remove("correct", "incorrect");
        selectedButton.classList.remove("correct", "incorrect");
        const buttons = Array.from(optionsElement.getElementsByClassName("option"));
        buttons.forEach((button) => {
            button.disabled = false;
        });
        currentQuestion++;

        if (currentQuestion < numQuestions) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1500);

    const buttons = Array.from(optionsElement.getElementsByClassName("option"));
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

function showResult() {
    document.getElementById("quiz-questions-section").style.display = "none";
    document.getElementById("results-section").style.display = "block";

    const resultMessageElement = document.getElementById("result-message");
    const resultScoreElement = document.getElementById("result-score");
    const resultImageElement = document.getElementById("result-image");
    const newGameBtn = document.getElementById("new-game-btn");

    resultScoreElement.textContent = `You got ${score} points out of ${numQuestions}!`;
    resultScoreElement.classList.add("result-score");

    if (score >= numQuestions * 0.6) {
        resultMessageElement.textContent = "Wow! You killed it 🎉";
        resultMessageElement.classList.add("wow");

        const wowImage = document.createElement("img");
        wowImage.src = "https://i.ibb.co/Tvj42zT/congratulations.png";
        wowImage.alt = "Quote You've shown incredible dedication and knowledge. Don't stop now, because you're doing awesome!";
        resultImageElement.innerHTML = "";
        resultImageElement.appendChild(wowImage);

        // Add responsive styling
        wowImage.style.maxWidth = "100%";
        wowImage.style.maxHeight = "auto";
    } else {
        resultMessageElement.textContent = "Better luck next time ☘️";
        resultMessageElement.classList.add("luck");

        const luckImage = document.createElement("img");
        luckImage.src = "https://i.ibb.co/gDq2yTr/better-luck.png";
        luckImage.alt = "Quote about never giving up displayed on a background with white flower";
        resultImageElement.innerHTML = "";
        resultImageElement.appendChild(luckImage);

        // Add responsive styling
        luckImage.style.maxWidth = "100%";
        luckImage.style.maxHeight = "auto";
    }


    newGameBtn.style.display = "block";
}

// Function to display the feedback message
function displayFeedbackMessage(message) {
    feedbackMessage.textContent = message;
    feedbackMessage.style.display = "block";
}

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Event listeners
document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("new-game-btn").addEventListener("click", startGame);
document.getElementById("back-home-btn").addEventListener("click", function () {
    window.location.href = "index.html";
});
document.getElementById("return-btn").addEventListener("click", function () {
    window.location.href = "index.html";
});

// Event listener for the Enter key press
document.getElementById("name").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        startGame();
    }
});

// Rules content
const rules = [
    "Enter your name (mandatory field)",
    "Click START GAME",
    "Your score will be displayed at the top showing how many message you have got right",
    "Read the question carefully and select your answer",
    "If your answer is correct it will turn green",
    "If your answer is incorrect, it will turn red, and the right answer will be displayed in green",
    "The next question will be displayed automatically after 2 seconds",
    "Your result will be displayed at the end of question 10",
    "Select Home to go back to the main page",
    "Click CLOSE to close the rules and start your game",
];

// Function to create the rules list for the quiz
function createRulesList() {
    const rulesList = document.getElementById("rules-list");

    rulesList.innerHTML = ""; // Clear the existing rules

    rules.forEach(function (rule) {
        const listItem = document.createElement("li");
        listItem.textContent = rule;
        rulesList.appendChild(listItem);
    });
}

// Close button event listener
document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("rules-section").style.display = "none";
    document.getElementsByClassName("main-container")[0].style.display = "block";
});

// Event listener for the Rules button
document.getElementById("rules-btn").addEventListener("click", function () {
    document.getElementById("rules-section").style.display = "block";
    document.getElementsByClassName("main-container")[0].style.display = "none";
});


// Show the "Back Home" button on the initial page
const backHomeBtn = document.getElementById("back-home-btn");
backHomeBtn.style.display = "inline-block";

// Event listener for the "Back Home" button
backHomeBtn.addEventListener("click", function () {
    window.location.href = "index.html";
});

// Event listener for the "Back Home" button beside the "New Game" button
document.getElementById("back-home-btn-2").addEventListener("click", function () {
    window.location.href = "index.html";
});

// Create the rules list on page load
window.addEventListener("DOMContentLoaded", createRulesList);


/* jshint esversion: 11 */

/**
 * Variable declarations to handle the quiz game
 */
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const playerNameElement = document.getElementById("player-name");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const feedbackMessage = document.getElementById("feedback-message");

const numQuestions = 10; // Number of questions in each game
let currentQuestion = 0;
let score = 0;
let questionPool = []; // Pool of questions for each game
let playerName;

function updateResult(result) {
    resultElement.textContent = result;
  }

/**
 * Function to set up questions, options, and related elements for display on the page
 * Attaches event listeners to the options buttons to handle user interaction and scoring.
 */
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
    scoreElement.textContent = `Correct Answers: ${score}/${numQuestions}`;
}

/**
 * Function to select random questions for the game
 */
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

/**
 * Function to handle the start of the game
 */
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

// Function to check the answer
function checkAnswer(selectedButton) {
    const question = questionPool[currentQuestion];

    if (selectedButton.textContent === question.correct) {
      score++;
      resultElement.classList.add("correct");
      selectedButton.classList.add("correct");
    } else {
      resultElement.classList.add("incorrect");
      selectedButton.classList.add("incorrect");
      const correctButton = Array.from(optionsElement.getElementsByClassName("option")).find(
        (btn) => btn.textContent === question.correct
      );
      correctButton.classList.add("correct");
    }

    setTimeout(() => {
      updateResult("");
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
    }, 2000);

    const buttons = Array.from(optionsElement.getElementsByClassName("option"));
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }


/**
 * Function to display the results for the game
 */
function showResult() {
    document.getElementById("quiz-questions-section").style.display = "none";
    document.getElementById("results-section").style.display = "block";

    const resultMessageElement = document.getElementById("result-message");
    const resultScoreElement = document.getElementById("result-score");
    const resultImageElement = document.getElementById("result-image");
    const newGameBtn = document.getElementById("new-game-btn");

    resultScoreElement.textContent = `You got ${score} correct answer out of ${numQuestions}!`;
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

    // Save the score to local storage
    saveScoreToLocalStorage(score, playerName);
}


/**
 * Function to display the feedback message once the game is finished
 */
function displayFeedbackMessage(message) {
    feedbackMessage.textContent = message;
    feedbackMessage.style.display = "block";
}

/**
 * Function to shuffle an array using the Fisher-Yates algorithm
 * The function makes sure that the quotes get shuffled in the game
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Function to save the score and player name to local storage
 */
function saveScoreToLocalStorage(score, playerName) {
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    const entry = {
        name: playerName,
        score: score,
    };
    leaderboard.push(entry);
    leaderboard.sort((a, b) => b.score - a.score); // Sort in descending order by score
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

/**
 * Event listeners to handle the buttons press and also the Enter key press
 */
// Event listeners for the buttons
document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("new-game-btn").addEventListener("click", startGame);
document.getElementById("back-home-btn").addEventListener("click", function () {
    window.location.href = "index.html";
});

document.getElementById("return-quiz-btn").addEventListener("click", function () {
    window.location.href = "quiz.html";
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

/**
 * Variable declaration for the Rules of the game
 */
const rules = [
    "Enter your name (mandatory field)",
    "Click START GAME",
    "Your score will be displayed at the top showing how many messages you have got right",
    "Read the question carefully and select your answer",
    "If your answer is correct it will turn green",
    "If your answer is incorrect, it will turn red, and the correct answer will be displayed in green",
    "The next question will be displayed automatically after 3 seconds",
    "Your result will be displayed at the end of question 10",
    "Select Home to go back to the main page, or press Return to quiz button if you want to try again",
    "Good luck and keep up the good work",
];

/**
 * Function to create the rules list for the quiz
 */
function createRulesList() {
    const rulesList = document.getElementById("rules-list");

    rulesList.innerHTML = ""; // Clear the existing rules

    rules.forEach(function (rule) {
        const listItem = document.createElement("li");
        listItem.textContent = rule;
        rulesList.appendChild(listItem);
    });
}

// Close button event listener, located at the rules container
document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("rules-section").style.display = "none";
    document.getElementsByClassName("main-container")[0].style.display = "block";
});

// Event listener for the Rules button Located at the quiz main container
document.getElementById("rules-btn").addEventListener("click", function () {
    document.getElementById("rules-section").style.display = "block";
    document.getElementsByClassName("main-container")[0].style.display = "none";
});

/**
 * Provides functionality to the 'Back Home' button(s)
 * by redirecting the user to the index.html page when clicked. 
 */

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

/**
 * Provides functionality to the leaderboard scoring
 * Leaderboard stored by local storage
 */

// Event listener for the Leaderboard button
document.getElementById("leaderboard-btn").addEventListener("click", function () {
    document.getElementById("leaderboard-section").style.display = "block";
    document.getElementsByClassName("main-container")[0].style.display = "none";
});

document.getElementById("close-leaderboard-btn").addEventListener("click", function () {
    window.location.href = "quiz.html";
});

document.getElementById("clear-leaderboard-btn").addEventListener("click", function () {
    localStorage.removeItem("leaderboard");
    loadLeaderboard(); // Refresh the leaderboard table
});

// Load leaderboard data from local storage
function loadLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    const leaderboardTable = document.getElementById("leaderboard-table");

    leaderboardTable.innerHTML = ""; // Clear the existing leaderboard table

    // Create table headers
    const tableHeaderRow = document.createElement("tr");
    const nameHeader = document.createElement("th");
    const scoreHeader = document.createElement("th");

    nameHeader.textContent = "Name";
    scoreHeader.textContent = "Score";

    tableHeaderRow.appendChild(nameHeader);
    tableHeaderRow.appendChild(scoreHeader);
    leaderboardTable.appendChild(tableHeaderRow);

    leaderboard.forEach(function (entry) {
        const tableRow = document.createElement("tr");
        const nameCell = document.createElement("td");
        const scoreCell = document.createElement("td");

        nameCell.textContent = entry.name;
        scoreCell.textContent = entry.score;

        tableRow.appendChild(nameCell);
        tableRow.appendChild(scoreCell);
        leaderboardTable.appendChild(tableRow);
    });
}

// Create the leaderboard list on page load
window.addEventListener("DOMContentLoaded", loadLeaderboard);

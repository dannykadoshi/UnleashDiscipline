/*  jshint esversion: 11 */
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const playerNameElement = document.getElementById("player-name");
const scoreElement = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const question = guessWhoSaid[currentQuestion];
    questionElement.textContent = question.question;

    optionsElement.innerHTML = "";

    question.options.forEach(function (option, index) {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", checkAnswer.bind(null, button));
        optionsElement.appendChild(button);
    });

    playerNameElement.textContent = `Welcome ${playerName}!`;
    scoreElement.textContent = `Score: ${score}/${guessWhoSaid.length}`;
}

function checkAnswer(selectedButton) {
    const question = guessWhoSaid[currentQuestion];

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
    }, 3000);

    currentQuestion++;

    if (currentQuestion < guessWhoSaid.length) {
        setTimeout(loadQuestion, 3000);
    } else {
        showScore();
    }
}

function showScore() {
    questionElement.textContent = `Quiz Complete! Your Score: ${score}/${guessWhoSaid.length}`;
    optionsElement.innerHTML = "";
    resultElement.textContent = "";
    playerNameElement.textContent = "";
    scoreElement.textContent = "";
}

// Function to handle start game button click
function startGame() {
    playerName = document.getElementById("name").value.trim();

    if (playerName === "") {
        alert("Please enter your name to start the game.");
        return;
    }

    document.getElementById("name-container").style.display = "none";
    document.getElementById("ready-container").style.display = "none"; // Hide the ready container
    document.getElementById("quiz-questions-section").style.display = "block";

    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

// Function to handle start game button click
function startGame() {
    playerName = document.getElementById("name").value.trim();

    if (playerName === "") {
        alert("Please enter your name to start the game.");
        return;
    }

    document.getElementById("name-container").style.display = "none";
    document.getElementById("ready-container").style.display = "none"; // Hide the ready container
    document.getElementById("quiz-questions-section").style.display = "block";

    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

// Function to handle next question button click
function nextQuestion() {
    const selectedOption = document.querySelector("input[name='option']:checked");

    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    const question = guessWhoSaid[currentQuestion];
    const selectedAnswer = selectedOption.value;

    if (selectedAnswer === question.correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < guessWhoSaid.length) {
        loadQuestion();
    } else {
        showScore();
    }

    document.querySelectorAll("input[name='option']").forEach(option => {
        option.checked = false;
    });
}

// Event listeners
document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("new-game-btn").addEventListener("click", startGame);
document.getElementById("back-home-btn").addEventListener("click", function () {
    window.location.href = "index.html";
});
document.getElementById("return-btn").addEventListener("click", function () {
    document.getElementById("quiz-questions-section").style.display = "block";
    document.getElementById("results-section").style.display = "none";
});



// Rules content
const rules = [
    "Enter your name",
    "Click Start",
    "Read the question carefully and select your answer",
    "It's mandatory to select an answer before moving to the next question",
    "Repeat the process until you reach the last question",
    "Your result will be displayed",
    "Select Home to go back to the main page"
];

// Function to create the rules list
function createRulesList() {
    const rulesList = document.getElementById("rules-list");

    rules.forEach(function (rule) {
        const listItem = document.createElement("li");
        listItem.textContent = rule;
        rulesList.appendChild(listItem);
    });
}

// Close button event listener
document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("rules-section").style.display = "none";
});

// Event listener for the Rules button
document.getElementById("rules-btn").addEventListener("click", function () {
    document.getElementById("rules-section").style.display = "block";
});

// Create the rules list on page load
window.addEventListener("DOMContentLoaded", createRulesList);


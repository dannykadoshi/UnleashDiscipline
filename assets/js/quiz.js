/* jshint esversion: 11 */
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const playerNameElement = document.getElementById("player-name");
const scoreElement = document.getElementById("score");

const numQuestions = 10; // Number of questions in each game
let currentQuestion = 0;
let score = 0;
let questionPool = []; // Pool of questions for each game

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

  playerNameElement.textContent = `Welcome ${playerName}!`;
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
    alert("Please enter your name to start the game.");
    return;
  }

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
  }, 3000);

  const buttons = Array.from(optionsElement.getElementsByClassName("option"));
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function showResult() {
  document.getElementById("quiz-questions-section").style.display = "none";
  document.getElementById("results-section").style.display = "block";

  resultElement.textContent = `Congratulations ${playerName}! You scored ${score} out of ${numQuestions} correct answers.`;
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
  document.getElementById("quiz-questions-section").style.display = "block";
  document.getElementById("results-section").style.display = "none";
});

// Rules content
const rules = [
  "Enter your name",
  "Click Start",
  "Read the question carefully and select your answer",
  "Your result will be displayed at the end",
  "Select Home to go back to the main page",
];

// Function to create the rules list
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
});

// Event listener for the Rules button
document.getElementById("rules-btn").addEventListener("click", function () {
  document.getElementById("rules-section").style.display = "block";
});

// Create the rules list on page load
window.addEventListener("DOMContentLoaded", createRulesList);

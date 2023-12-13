const questions = [
  {
    question: "Qual é o maior mamífero terrestre?",
    answer: "Elefante",
    options: ["Elefante", "Leão", "Girafa", "Rinoceronte"]
  },
];

let questionIndex = 0;
let score = 0;

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const options = document.getElementById("options");

  questionElement.textContent = questions[questionIndex].question;
  options.innerHTML = "";

  questions[questionIndex].options.forEach((option) => {
    const button = document.createElement("button");

    button.textContent = option;
    button.className = "option";
    button.onclick = function () {
      checkAnswer(option);
    };
    options.appendChild(button);
  });
}

function checkAnswer(selectedAnswer) {
  const correctAnswer = questions[questionIndex].answer;

  if (selectedAnswer === correctAnswer) {
    score++;
  }

  questionIndex++;

  if (questionIndex < questions.length) {
    displayQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  const scoreElement = document.getElementById("score-value");

  scoreElement.textContent = score;
}

displayQuestion();

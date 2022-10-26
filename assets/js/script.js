// questions
const questions = [
  {
    question: 'Commonly used data types to NOT include:',
    answers: [
      { text: 'Strings', correct: false },
      { text: 'Booleans', correct: false },
      { text: 'Alerts', correct: true },
      { text: 'Numbers', correct: false },
    ],
  },
  {
    question: 'The condition in an if / else statement is enclosed with____.',
    answers: [
      { text: 'Quotes', correct: false },
      { text: 'Curly brackets', correct: true },
      { text: 'Parenthesis', correct: false },
      { text: 'Square brackets', correct: false },
    ],
  },
  {
    question: 'Arrays in JavaScript can be used to store _____:',
    answers: [
      { text: 'Numbers and strings', correct: false },
      { text: 'Other arrays', correct: false },
      { text: 'Booleans', correct: false },
      { text: 'All of the above', correct: true },
    ],
  },
  {
    question:
      'String values must be enclosed within ______ when being assigned to variables.',
    answers: [
      { text: 'Commas', correct: false },
      { text: 'Curly brackets', correct: false },
      { text: 'Quotes', correct: true },
      { text: 'Parenthesis', correct: false },
    ],
  },
  {
    question:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: [
      { text: 'JavaScript', correct: false },
      { text: 'Terminal/bash', correct: false },
      { text: 'For loop', correct: false },
      { text: 'Console.log', correct: true },
    ],
  },
];

var startButton = document.getElementById('start-btn');
var startScreen = document.getElementById('start-screen');
var questionsContainer = document.getElementById('question-container');

var score = 0;
var randomQuestions;
var setQuestions = 0;

startButton.addEventListener('click', startQuiz);

var count = document.querySelector('#countdown');

var secondsLeft = 60;
var timer;
function timer() {
  timer = setInterval(function () {
    secondsLeft--;
    count.textContent = secondsLeft;
    console.log(secondsLeft);

    if (secondsLeft === 0) {
      clearInterval(timer);
      alert('You ran out of time!');
    }
  }, 1000);
}

function startQuiz() {
  console.log('started');
  startButton.remove();
  startScreen.remove();
  questionsContainer.classList.remove('hide');
  if (setQuestions < 5) {
    nextQuestion(questions[setQuestions]);
    localStorage.setItem('mostRecentScore', score);
  } else {
    endQuiz();
  }
  timer();
}

function nextQuestion(question) {
  console.log(question);
  document.querySelector('#question').textContent = question.question;
  // text for buttons
  document.querySelector('#btn1').textContent =
    '1. ' + question.answers[0].text;
  document.querySelector('#btn2').textContent =
    '2. ' + question.answers[1].text;
  document.querySelector('#btn3').textContent =
    '3. ' + question.answers[2].text;
  document.querySelector('#btn4').textContent =
    '4. ' + question.answers[3].text;
}

function endQuiz() {
  startButton.remove();
  startScreen.remove();
  questionsContainer.remove();
  endScreen.classList.remove('hide');
  clearInterval(timer);
}

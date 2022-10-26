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

startButton.addEventListener('click', startQuiz);

function startQuiz() {
  console.log('started');
}

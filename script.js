const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
        question: "How many hearts do you need to get the master sword?",
        answers: {a: "12", b: "13", c: "14", d: "11"},
        correctAnswer: "b",
    },
    {
        question: "What is the max amount of stamina rings that you can have?",
        answers: {a: "3", b: "2.5", c: "2", d: "4"},
        correctAnswer: "a",
    },
    {
        question: "Is there a time limit to beat the game?",
        answers: {a: "yes", b: "no"},
        correctAnswer: "b",
    },
    {
        question: "What is the kings name?",
        answers: {a: "King Daltus", b: "King Harkinian.", c: "King Daphnes", d: "King Rhoam"},
        correctAnswer: "d",
    },
    {
        question: "Can you get the master sword without meeting Impa?",
        answers: {a: "yes", b: "no"},
        correctAnswer: "a",
    },
    {
        question: "How many kokorok seeds are there?",
        answers: {a: "1000", b: "900", c: "700", d: "800"},
        correctAnswer: "b",
    },
    {
        question: "How many shrines are there?",
        answers: {a: "120", b: "100", c: "150", d: "80"},
        correctAnswer: "a",
    },
    {
        question: "How many great fairys are there?",
        answers: {a: "3", b: "5", c: "4", d: "2"},
        correctAnswer: "c",
    },
    {
        question: "What is the base damage the master sword does?",
        answers: {a: "60", b: "20", c: "30", d: "50"},
        correctAnswer: "c",
    },
    {
        question: "How much do diamonds sell for?",
        answers: {a: "250", b: "1000", c: "750", d: "500"},
        correctAnswer: "d",
    },
]

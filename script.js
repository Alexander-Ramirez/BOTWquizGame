let secondsLeft = 60;
let finalScore = 0;

let questions = [
    {
        question: "What house is the best?",
        answers: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
        correctAnswer: "Gryffindor",
    },
    {
        question: "Which Quidditch team is the worst?",
        answers: ["Montrose Magpies", "Wimbourne Wasps", "Chudley Cannons", "Appleby Arrows"],
        correctAnswer: "Chudley Cannons",
    },
    {
        question: "What is Gilderoy Lockhart's favorite color?",
        answers: ["Gold", "Royal Blue", "Purple", "Lilac"],
        correctAnswer: "Lilac",
    },
    {
        question: "What house is Harry Potter in?",
        answers: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
        correctAnswer: "Gryffindor",
    },
    {
        question: "What house is the nicest?",
        answers: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
        correctAnswer: "Hufflepuff",
    },
]

let currentQuestion = 0;
let question =  questions[currentQuestion];

document.querySelector("#question").textContent = questions[question].question;
document.querySelector("#btn1").textContent = questions[currentQuestion].answers[0];
document.querySelector("#btn2").textContent = questions[currentQuestion].answers[1];
document.querySelector("#btn3").textContent = questions[currentQuestion].answers[2];
document.querySelector("#btn4").textContent = questions[currentQuestion].answers[3];

btn1.addEventListener("click", function() {
    if (btn1 === questions[correctAnswe]) {
        finalScore += 20;
        currentQuestion++;
        nextQuestion();
    } else {
        secondsLeft -= 5;
        currentQuestion++;
        nextQuestion();
    }
});

btn2.addEventListener("click", function() {
    if (btn2 === questions[correctAnswe]) {
        finalScore += 20;
        currentQuestion++;
        nextQuestion();
    } else {
        secondsLeft -= 5;
        currentQuestion++;
        nextQuestion();
    }
});

btn3.addEventListener("click", function() {
    if (btn3 === questions[correctAnswe]) {
        finalScore += 20;
        currentQuestion++;
        nextQuestion();
    } else {
        secondsLeft -= 5;
        currentQuestion++;
        nextQuestion();
    }
});

btn4.addEventListener("click", function() {
    if (btn4 === questions[correctAnswe]) {
        finalScore += 20;
        currentQuestion++;
        nextQuestion();
    } else {
        secondsLeft -= 5;
        currentQuestion++;
        nextQuestion();
    }
});

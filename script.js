let secondsLeft = 60;
let finalScore = 0;
let timeEl = document.querySelector("#timer");

let questions = [
    {
        question: "How many hearts do you need to get the master sword?",
        answers: ["12", "13", "14", "11"],
        correctAnswer: "13",
    },
    {
        question: "What is the max amount of stamina rings that you can have?",
        answers: ["3", "2.5", "2", "4"],
        correctAnswer: "3",
    },
    {
        question: "Is there a time limit to beat the game?",
        answers: ["yes", "no"],
        correctAnswer: "no",
    },
    {
        question: "What is the kings name?",
        answers: ["King Daltus", "King Harkinian.", "King Daphnes", "King Rhoam"],
        correctAnswer: "King Rhoam",
    },
    {
        question: "Can you get the master sword without meeting Impa?",
        answers: ["yes", "no"],
        correctAnswer: "yes",
    },
    {
        question: "How many kokorok seeds are there?",
        answers: ["1000", "900", "700", "800"],
        correctAnswer: "900",
    },
    {
        question: "How many shrines are there?",
        answers: ["120", "100", "150", "80"],
        correctAnswer: "120",
    },
    {
        question: "How many great fairys are there?",
        answers: ["3", "5", "4", "2"],
        correctAnswer: "4",
    },
    {
        question: "What is the base damage the master sword does?",
        answers: ["60", "20", "30", "50"],
        correctAnswer: "30",
    },
    {
        question: "How much do diamonds sell for?",
        answers: ["250", "1000", "750", "500"],
        correctAnswer: "500",
    },
]

let currentQuestion = 0;
let question =  questions[currentQuestion];

document.querySelector("#question").textContent = questions[currentQuestion].question;
document.querySelector("#btn1").textContent = questions[currentQuestion].answers[0];
document.querySelector("#btn2").textContent = questions[currentQuestion].answers[1];
document.querySelector("#btn3").textContent = questions[currentQuestion].answers[2];
document.querySelector("#btn4").textContent = questions[currentQuestion].answers[3];

startBtn.addEventListener("click", function() {
    secondsLeft = 60;
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("container").style.visibility = "visible";
    startQuiz();
})

function startQuiz() {
    timeInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
    }, 1000)
}

nextBtn.addEventListener("click",function() {
    questions++;
})

btn1.addEventListener("click", function() {
    if (btn1 === questions[correctAnswer]) {
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
    if (btn2 === questions[correctAnswer]) {
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
    if (btn3 === questions[correctAnswer]) {
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
    if (btn4 === questions[correctAnswer]) {
        finalScore += 20;
        currentQuestion++;
        nextQuestion();
    } else {
        secondsLeft -= 5;
        currentQuestion++;
        nextQuestion();
    }
});

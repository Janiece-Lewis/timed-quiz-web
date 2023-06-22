let startButton = document.querySelector("#startbtn");
let startQuizEl = document.querySelector(".ques-answers-screen");
let timerEl = document.querySelector(".timer-count");
let result = document.querySelector(".final-score");
let timer;
let question = document.querySelector("#question")
let choices = document.querySelector("#choices")
let answer = document.querySelector("#answer")
let score = 0;



//timer
let timerCount = 60;
let plusPoint = 0;
let minusPoint = 0;
let qindex = 0;




// quiz questions array
let questions = [
    {
        question: "JavaScript gives a page ________.",
        choices: ["styling", "structure", "function", "bananas"],
        correct: "function"
    },
    {
        question: "JavaScript was originally called _______.",
        choices: ["iscript", "LiveScript", "MyScript", "CryScript"],
        correct: "LiveScript"
    },
    {
        question: "JavaScript is added to the HTML file in a_______tag.",
        choices: ["script", "style", "img", "link"],
        correct: "script"
    },
    {
        question: "JavaScript is used for ________.",
        choices: ["apps", "game development", "servers", "all of the above"],
        correct: "all of the above"
    },
    {
        question: "JavaScript is compatible with_______.",
        choices: ["wine", "pizza", "other languages", "bananas"],
        correct: "other languages"
    },
];







//increase score if answer is correct
function correctAnswer() {
    if (questions[choices] === correct) {
        score++;

    }

    else {
        minusPoint--
    }

}


function startTimer() {
    // Starts timer and displays it to user 
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount;

        // Tests if time has run out and will end the game
        if (timerCount <= 0) {
            // Clears interval
            clearInterval(timer);
            // execute end game func here

            gameOver();
        }
    }, 1000);
}
// checks answer and moves to next question
function getQuestion() {
    question.textContent = questions[qindex].question
    for (let i = 0; i < questions[qindex].choices.length; i++) {
        const button = document.createElement("button")
        button.textContent = questions[qindex].choices[i]
        button.onclick = checkAnswers
        question.append(button)
    }
}
// starts quiz 
function startQuiz() {
    document.querySelector("#start").classList.add("hide")

    startTimer()
    getQuestion()
}
// function to check answers
function checkAnswers(event) {
    console.log(this)
    console.log(event.target)
    let userAnswer = event.target.textContent;
    console.log(userAnswer)
    if (userAnswer === questions[qindex].correct) {
        answer.textContent = "Great job!"

    }
    else {
        answer.textContent = "Oops! Try Again!";
        timerCount -= 5
    }
    // allows user to move onto next ques.
    qindex++

    if (qindex >= questions.length) {
        gameOver()
    } else {
        getQuestion()
    }

}
document.querySelector('.save').addEventListener('click', function () {
    const userData = {
        initials: document.querySelector('#initials').value,
        score: timerCount
    }
    console.log(userData)
    const playerHistory = JSON.parse(localStorage.getItem('leaderBoard')) || []
    playerHistory.push(userData)
    localStorage.setItem('leaderBoard', JSON.stringify(playerHistory))
    // loop through playerhistory and add players to html 
    initials.textContent?+

})
// function to end game
function gameOver() {
    // 
    clearInterval(timer);

    console.log('game ended')
    // hides questions when game is over 
    document.getElementById('begin').classList.add('hide')
    // displays score when game is over 
    document.querySelector('.final-score').classList.remove('hide')

}

startButton.addEventListener("click", startQuiz);



let startButton = document.querySelector("#startbtn");
let startQuizEl = document.querySelector(".ques-answers-screen");
let timerEl = document.querySelector(".timer-count");
let result = document.querySelector(".final-score");
let timer;
let question = document.querySelector("#question")
let choices = document.querySelector("#choices")
let answer= document.querySelector("#answer")
let score = 0;


// let button = document.querySelector("#userChoice");
let timerCount = 60;
let plusPoint = 0;
let minusPoint = 0;
let qindex=0;





let questions = [
    {
        question :"JavaScript gives a page ________.",
        choices : ["styling","structure","function","bananas"],
        correct:"2"
    },
    {
        question :"JavaScript was originally called _______.",
        choices :[ "iscript","LiveScript","MyScript","CryScript"],
        correct: "1"
    },
    {
        question :"JavaScript is added to the HTML file in a_______tag.",
        choices : ["script","style","img","link"],
        correct: "0"
    },
    {
        question :"JavaScript is used for ________.",
        choices : ["apps","game development","servers","all of the above"],
        correct:"3"
    },
    {
        question :"JavaScript is compatible with_______.",
        choices :[ "wine","pizza","other languages","bananas"],
        correct: "2"
    },
];


// for (var i=0 i <questions.length; i++)
// var response = window.prompt(question[i].promt)

// if(response === questions[i].correct)




//above line new stuff i tried
function correctAnswer(){
    if (questions[choices]===correct){
        score++;

    }

    else{
        minusPoint--
    }
    
}


function startTimer() {
    // Starts timer and displays it to user 
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = timerCount;
     
      // Tests if time has run out
      if (timerCount <= 0) {
        // Clears interval
        clearInterval(timer);
        // execute end game func here
      }
    }, 1000);
  }

function getQuestion(){
    question.textContent = questions[qindex].question
    for( let i=0 ; i<questions[qindex].choices.length;i++){
        const button =document.createElement("button")
        button.textContent=questions[qindex].choices[i]
        question.append(button)
    }
}
function startQuiz() {
document.querySelector("#start").classList.add("hide")
// startQuizEl.classList.remove("hide")
startTimer()
getQuestion()
}
// func to check answers
function checkAnswers(event){
    let userAnswer = event.target.dispatchEvent;
    if (correct===questions[qindex].answer){
        answer.textContent = "Great job!"

    }
    else {
        answer.textContent = "Try Again!";
        timerCount =-5000
    }

    
}



startButton.addEventListener("click", startQuiz);
button.addEventListener('click',checkAnswers);
  

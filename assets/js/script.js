let startButton = document.querySelector("#startbtn");
let startQuizEl = document.querySelector(".ques-answers-screen");
let timerEl = document.querySelector(".timer-count");
let result = document.querySelector(".final-score")
let timer;
let timerCount = 30




let questions = [
    {
        question :"JavaScript gives a page ________.",
        choices : ["styling","structure","function","bananas"],
        correct:"function"
    },
    {
        question :"JavaScript was originally called _______.",
        choices :[ "iscript","LiveScript","MyScript","CryScript"],
        correct: "LiveScript"
    },
    {
        question :"JavaScript is added to the HTML file in a_______tag.",
        choices : ["script","style","img","link"],
        correct: "script"
    },
    {
        question :"JavaScript is used for ________.",
        choices : ["apps","game development","servers","all of the above"],
        correct:"all of the above"
    },
    {
        question :"JavaScript is compatible with_______.",
        choices :[ "wine","pizza","other languages","bananas"],
        correct: "other languages"
    },
];


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


function startQuiz() {
document.querySelector("#start").classList.add("hide")
startQuizEl.classList.remove("hide")
startTimer()
}

startButton.addEventListener("click", startQuiz);

  

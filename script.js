let score = document.getElementById("score")
let timer = document.getElementById("timer")

let question = document.getElementById("question")

let options = document.querySelector(".options")
let optionsbtn = document.querySelectorAll(".option-btn")


let nextbtn = document.getElementById("next-btn")
let restartbtn = document.getElementById("restart-btn")

let resultbox = document.querySelector(".result-box")

let finalscore = document.getElementById("final-score")
let highscore = document.getElementById("high-score")
let quizEnded=false

let finalhighscore=Number(localStorage.getItem("finalhighscore"))||0
let timeval=10
let intervalid
const questions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Chennai", "Kolkata"],
        answer: "New Delhi"
    },
    {
        question: "Which language is used for web apps?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Hyperlinks Text Mark Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Google", "Microsoft", "Netscape", "Apple"],
        answer: "Netscape"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "##", "++", "**"],
        answer: "//"
    },
    {
        question: "What is 5 * 6?",
        options: ["11", "30", "56", "20"],
        answer: "30"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Which CSS property controls text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: "font-size"
    },
    {
        question: "Which method is used to select an element in JavaScript?",
        options: ["getElementById", "querySelector", "Both", "None"],
        answer: "Both"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of these"],
        answer: "All of these"
    }
];

let currentindex = 0

function loadQuestion() {
    question.innerHTML = questions[currentindex].question
    optionsbtn[0].innerHTML = questions[currentindex].options[0]
    optionsbtn[1].innerHTML = questions[currentindex].options[1]
    optionsbtn[2].innerHTML = questions[currentindex].options[2]
    optionsbtn[3].innerHTML = questions[currentindex].options[3]
    time()
}

function time() {
    timeval=10
    clearInterval(intervalid)
    intervalid=setInterval(()=>{
        timeval-=1
        timer.innerHTML=`Time: ${timeval}s`
        if(timeval===0){
            currentindex+=1
            timeval=10
            clearInterval(intervalid)
            loadQuestion()
        }
    },1000)
    timer.innerHTML=`Time: ${timeval}s`

    

}


nextbtn.addEventListener("click", () => {
    currentindex += 1
    clearInterval(intervalid)
    loadQuestion()
})
let mainscore = 0
restartbtn.addEventListener("click", () => {
    currentindex = 0
    mainscore=0
    score.innerHTML = "Score: 0"
    resultbox.classList.add("hidden")
    quizEnded=false
    clearInterval(intervalid)
    loadQuestion()
})

options.addEventListener("click", (e) => {
    if(quizEnded)return
    if (e.target.classList.contains("option-btn")) {
        clearInterval(intervalid)
        if (e.target.innerText === questions[currentindex].answer) {
            mainscore += 1
        }
        if (currentindex >= questions.length-1) {
            finalscore.innerHTML = `${mainscore}`
            resultbox.classList.remove("hidden")
            if(mainscore>finalhighscore){
                localStorage.setItem("finalhighscore",mainscore)
                finalhighscore=mainscore
            }
            quizEnded=true
        }
        else{
            currentindex += 1
            loadQuestion()
        }
        
        
        score.innerHTML = `Score: ${mainscore}`
        highscore.innerHTML=`${finalhighscore}`
    }

})

loadQuestion()


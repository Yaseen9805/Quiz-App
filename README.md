# Quiz App

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)

## Short description

An interactive multiple-choice quiz built with plain HTML, CSS, and JavaScript, with a per-question timer and a high score that's remembered between visits.

## Technologies

HTML5, CSS3, JavaScript (vanilla, DOM manipulation, localStorage)

## Features

- Multiple-choice questions, each with four options
- A 10-second timer per question that automatically advances the quiz if time runs out
- Score tracking that increases with each correct answer
- Automatic progression to the next question after answering or timing out
- A final score screen once the last question is answered
- High score saved in localStorage, so it persists across page refreshes
- A restart option that resets the score, questions, and timer

## The process

The timer was the central piece to get right here: it needed to run independently for each question, stop as soon as an answer was selected, and reset cleanly for the next question, all without leaving old timers running in the background. Persisting the high score meant checking the final score against whatever was already stored and only overwriting it when the new score was actually higher.

## What I learned

- Managing a countdown timer with `setInterval`/`setTimeout` and clearing it properly to avoid overlapping timers
- Structuring quiz state (current question, score, timer) so the UI stays in sync as the user answers
- Comparing and conditionally updating a stored high score in localStorage
- Building a clean restart flow that fully resets the app's state

## How it can be improved

- Add difficulty levels with different question sets
- Shuffle the order of questions and answer options each time
- Add simple animations for correct/incorrect feedback
- Add sound effects for answering and timing out

## How to run the project

1. Clone the repo
2. Open `index.html` directly in your browser

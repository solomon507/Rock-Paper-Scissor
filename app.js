const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    if(randomNumber === 1){
        computerChoice = "rock"
    }else if(randomNumber === 2){
        computerChoice = "Paper"
    }else if(randomNumber === 3){
        computerChoice = "scissor"
    }
     computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if(computerChoice === userChoice){
        result = "It's a draw!"
    }else if(computerChoice ==='rock' && userChoice === "paper"){
        result = "You win!"
    }else if(computerChoice ==='rock' && userChoice === "scissor"){
        result = "You lost!"
    }else if(computerChoice ==='paper' && userChoice === "rock"){
        result = "You lost!"
    }else if(computerChoice ==='paper' && userChoice === "scissor"){
        result = "You win!"
    }else if(computerChoice ==='scissor' && userChoice === "rock"){
        result = "You win !"
    }else if(computerChoice ==='scissor' && userChoice === "paper"){
        result = "You lost!"
    }
    resultDisplay.innerHTML = result
}



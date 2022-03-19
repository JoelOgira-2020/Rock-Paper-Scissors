const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const queries = document.querySelector('.queries');
const possibleChoices = queries.querySelectorAll('.btn');

let userChoice
let computerChoice
let result

possibleChoices.forEach(choice => {
    choice.addEventListener('click', e => {
       userChoice = e.target.textContent;
       if (userChoice === 'Rock') {
           userChoiceDisplay.classList.add('text-primary');
           userChoiceDisplay.classList.remove('text-warning');
           userChoiceDisplay.classList.remove('text-success');
       }
       if (userChoice === 'Paper') {
           userChoiceDisplay.classList.add('text-warning');
           userChoiceDisplay.classList.remove('text-primary');
           userChoiceDisplay.classList.remove('text-success');
       }
       if (userChoice === 'Scissors') {
           userChoiceDisplay.classList.add('text-success');
           userChoiceDisplay.classList.remove('text-primary');
           userChoiceDisplay.classList.remove('text-warning');
       }
       userChoiceDisplay.innerHTML = userChoice;
       generateComputerChoice();
       generateResults();
    });
});

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    if (randomNumber === 1) {
        computerChoice = 'Rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'Paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissors';
        
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

const generateResults = () => {
    if (computerChoice === userChoice) {
        result = "It's a draw";
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = "You Win!";
    }
    if (computerChoice === 'Rock' && userChoice === 'Sciccors') {
        result = "You Lose!";
    }
    if (computerChoice === 'Paper' && userChoice === 'Sciccors') {
        result = "You Win!";
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = "You Lose!";
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = "You Win!";
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = "You Lose!";
    }
    resultDisplay.innerHTML = result;
    if (result.includes('Win')) {
        resultDisplay.classList.add('text-success');
        resultDisplay.classList.remove('text-danger');
        resultDisplay.classList.remove('text-primary');
    }
    if (result.includes('Lose')) {
        resultDisplay.classList.add('text-danger');
        resultDisplay.classList.remove('text-success');
        resultDisplay.classList.remove('text-primary');
    }
    if (result.includes('draw')) {
        resultDisplay.classList.add('text-primary');
        resultDisplay.classList.remove('text-success');
        resultDisplay.classList.remove('text-danger');
    }
    
}
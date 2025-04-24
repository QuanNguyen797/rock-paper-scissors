
function getComputerChoice() { //Choose a random number from 1-3 representing r-p-s for computerChoice
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) { return 'rock' }
    else if (number === 2) { return 'paper' }
    else { return 'scissors' };
}

let humanScore = 0;
let computerScore = 0;
let humanChoice = '';
let announce = document.querySelector('.score');
let scoreAnnounce = document.createElement('p');
let roundResult = document.createElement('p')

const rockB = document.querySelector(".rock");
const paperB = document.querySelector(".paper")
const scissorsB = document.querySelector(".scissors");



rockB.addEventListener('click', () => {
    humanChoice = 'rock';
    playRound();
    scoreKeeping();
});
paperB.addEventListener('click', () => {
    humanChoice = 'paper';
    playRound();
    scoreKeeping();
});
scissorsB.addEventListener('click', () => {
    humanChoice = 'scissors';
    playRound();
    scoreKeeping();
});

scoreAnnounce.textContent = (`You: ${humanScore} | Computer: ${computerScore}.`);
announce.appendChild(roundResult); 
announce.appendChild(scoreAnnounce);

function playRound(computerChoice) {
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) { roundResult.textContent = (`You chose ${humanChoice}, computer chose ${computerChoice}. Draw!`); }
    else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') { computerScore++; roundResult.textContent = (`You chose ${humanChoice}, computer chose ${computerChoice}. You lose.`); }
        else if (computerChoice === 'scissors') { humanScore++; roundResult.textContent = (`You chose ${humanChoice}, computer chose ${computerChoice}, you win!`) };
    }

    else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') { computerScore++; roundResult.textContent = (`You chose ${humanChoice}, computer chose ${computerChoice}, you lose!`) }
        else if (computerChoice === 'rock') { humanScore++; roundResult.textContent = (`You chose ${humanChoice}, computer chose ${computerChoice}, you win!.`) };
    }

    else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') { computerScore++; roundResult.textContent = (`You chose ${humanChoice}, computer chose ${computerChoice}, you lose.`) }
        else if (computerChoice === 'paper') { humanScore++; roundResult.textContent = (`You chose ${humanChoice}, computer chose ${computerChoice}, you win!`) };
    }

    else { computerScore++; alert('Please choose Rock, Paper or Scissors') };
}

function scoreKeeping() {
    scoreAnnounce.textContent = (`You: ${humanScore} | Computer: ${computerScore}.`);
    if (humanScore === 5) {
        scoreAnnounce.textContent = (`You: ${humanScore} | Computer: ${computerScore}. YOU WON THE GAME!`);
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        scoreAnnounce.textContent = (`You: ${humanScore} | Computer: ${computerScore}. Computer won the game. Try again!`);
        humanScore = 0;
        computerScore = 0;
    };
}



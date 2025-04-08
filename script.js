
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) { return 'rock' }
    else if (number === 2) { return 'paper' }
    else { return 'scissors' };
}

function getHumanChoice() {
    return prompt('Choose Rock, Paper or Scissors')
};

let roundNumber = 1;
let humanScore = 0;
let computerScore = 0;

function playGame() {

    for (let i = 0; i < 5; i++) {
        
       console.log(playRound());
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice();
        if (humanChoice === computerChoice) { return 'Draw!' }
        else if (humanChoice === 'rock') {
            if (computerChoice === 'paper') { computerScore++; return 'Computer chose Paper, you lose.' }
            else if (computerChoice === 'scissors') { humanScore++; return 'Computer chose Scissors, you win!' };
        }

        else if (humanChoice === 'paper') {
            if (computerChoice === 'scissors') { computerScore++; return 'Computer chose Scissors, you lose!' }
            else if (computerChoice === 'rock') { humanScore++; return 'Computer chose Rock, you win!.' };
        }

        else if (humanChoice === 'scissors') {
            if (computerChoice === 'rock') { computerScore++; return 'Computer chose Rock, you lose.' }
            else if (computerChoice === 'paper') { humanScore++; return 'Computer chose Paper, you win!' };
        }

        else { computerScore++; return 'Please choose Rock, Paper or Scissors' };
        roundNumber++;
    }

}

console.log(playGame());

if (humanScore > computerScore) { console.log('You won the match!') }
else if (humanScore < computerScore) { console.log('You lost the match.') }
else if (humanScore=computerScore){ console.log('Match Draw!') };


function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) { return 'rock' }
    else if (number === 2) { return 'paper' }
    else { return 'scissors' };
}

function getHumanChoice() {
    return prompt('Choose Rock, Paper or Scissors')
};



function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        playRound();
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice();
        if (humanChoice === computerChoice) { console.log('Draw!') }
        else if (humanChoice === 'rock') {
            if (computerChoice === 'paper') { computerScore++; console.log('Computer chose Paper, you lose.') }
            else if (computerChoice === 'scissors') { humanScore++; console.log('Computer chose Scissors, you win!') };
        }

        else if (humanChoice === 'paper') {
            if (computerChoice === 'scissors') { computerScore++; console.log('Computer chose Scissors, you lose!') }
            else if (computerChoice === 'rock') { humanScore++; console.log ('Computer chose Rock, you win!.') };
        }

        else if (humanChoice === 'scissors') {
            if (computerChoice === 'rock') { computerScore++; console.log('Computer chose Rock, you lose.') }
            else if (computerChoice === 'paper') { humanScore++; console.log('Computer chose Paper, you win!') };
        }

        else { computerScore++; console.log('Please choose Rock, Paper or Scissors') };
    }

    if (humanScore > computerScore) { console.log('You won the match!') }
    else if (humanScore < computerScore) { console.log('You lost the match.') }
    else if (humanScore = computerScore) { console.log('Match Draw!') };
}

playGame();


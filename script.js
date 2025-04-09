
function getComputerChoice() { //Choose a random number from 1-3 representing r-p-s for computerChoice
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) { return 'rock' }
    else if (number === 2) { return 'paper' }
    else { return 'scissors' };
}

function getHumanChoice() { //get the player input for humanChoice
    return prompt('Choose Rock, Paper or Scissors')
};



function playGame() { 
    
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {//loop playRound function 5 times, equivalent to playing 5 games of rps.

        playRound();
    }

    function playRound(humanChoice, computerChoice) { //play one round of r-p-s, add one point for whoever won, none if draw
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
// conclude the game, check the humanScore and computerScore, whichever larger wins the match, match draw if equal.
    if (humanScore > computerScore) { console.log('You won the match!') }
    else if (humanScore < computerScore) { console.log('You lost the match.') }
    else if (humanScore = computerScore) { console.log('Match Draw!') };
}

playGame();


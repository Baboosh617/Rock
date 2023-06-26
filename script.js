function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice){
        return "It's a tie!!!";
    }
    else if(
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'lizard' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'spock') ||
        (playerChoice === 'lizard' && computerChoice === 'spock') ||
        (playerChoice === 'scissors' && computerChoice === 'lizard') ||
        (playerChoice === 'rock' && computerChoice === 'lizard') ||
        (playerChoice === 'spock' && computerChoice === 'scissors') ||
        (playerChoice === 'spock' && computerChoice === 'rock')
    ) {
        return 'You win';
    } else {
        return 'You lose'
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for ( let i = 0; 1 < 5; i++){
        const playerSelection = prompt('Choose: rock, paper, scissors, lizard or spock');
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        console.log(`Player: ${playerSelection}`)
        comsole.log(`Computer: ${computerSelection}`);
        console.log(result);

        if(result === 'You win'){
            playerScore++;
        }else if (result === 'You lose'){
            computerScore++
        }
    }

    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log('You beat the computer, clap for youself');
    }else if (playerScore < computerScore) {
        console.log("Seriously? You could'nt beat it?");
    }else {
        console.log("it's a tie bozo...")
    }
}

game()
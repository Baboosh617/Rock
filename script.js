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
<<<<<<< HEAD
        (playerChoice === 'scissors' && computerChoice === 'lizard') ||
        (playerChoice === 'rock' && computerChoice === 'lizard') ||
        (playerChoice === 'spock' && computerChoice === 'scissors') ||
        (playerChoice === 'spock' && computerChoice === 'rock')
    ) {
        return 'You win';
    } else {
        return 'You lose'
    }
=======
    )
>>>>>>> 1075e4b431d0c46daebc9ff64eb6e5280f5a2643
}
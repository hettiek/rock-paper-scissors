function getComputerChoice() {
    let rockPaperScissors = ['rock', 'paper', 'scissors'];
    let computerChoice = rockPaperScissors[Math.floor(Math.random()
        *rockPaperScissors.length)];
    return computerChoice;
}

let userScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        function playRound(userChoice, computerChoice) {
            if ((userChoice=='rock' && computerChoice=='scissors') || 
            (userChoice=='paper' && computerChoice=='rock') || 
            (userChoice=='scissors' && computerChoice=='paper')) {
                userScore++;
                return `You win! ${userChoice} beats ${computerChoice}`;
            }
            else if ((userChoice=='rock' && computerChoice=='paper') ||
            (userChoice=='paper' && computerChoice=='scissors') ||
            (userChoice=='scissors' && computerChoice=='rock')) {
                computerScore++;
                return `You lose! ${computerChoice} beats ${userChoice}`;
            }
            else if (userChoice==computerChoice) {
                return 'There was a tie!';
            }
            else { return 'Oops! Something went wrong.'};
        }
        let userChoice = prompt('rock, paper, or scissors?:');
        userChoice = userChoice.toLowerCase();
        let computerChoice = getComputerChoice();
        console.log(playRound(userChoice, computerChoice));
    }
   if (userScore > computerScore) {
       console.log('You won the game! Yay :)' + ` Your score: ${userScore}.
       Opponent score: ${computerScore}.`)
    }
    else if (userScore == computerScore) {
        console.log('There was a tie!' + `Your score: ${userScore}. 
        Opponent score: ${computerScore}.`)
    }
    else {console.log('Game over. You lost :(' + ` Your score: ${userScore}.
    Opponent score: ${computerScore}.`)}
}

console.log(game());


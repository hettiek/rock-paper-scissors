const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('.btn');
const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const playAgain = document.querySelector('#playAgain');

let userChoice;
let computerChoice = getComputerChoice();

let userScore = 0;
let computerScore = 0;

playAgain.disabled = true;

buttons.forEach(btn => btn.addEventListener('click', () => {
    userChoice = btn.textContent;
    computerChoice = getComputerChoice();
    playerText.textContent = `player: ${userChoice}`;
    computerText.textContent = `computer: ${computerChoice}`;
    resultText.textContent = result();
    if (userScore == 5 || computerScore == 5) {
    resultText.textContent = endGame();
    }
    
}));

const refreshPage = () => {
    location.reload();
  }
  
playAgain.addEventListener('click', refreshPage);

function getComputerChoice() {
    let rockPaperScissors = ['rock', 'paper', 'scissors'];
    let computerPick = rockPaperScissors[Math.floor(Math.random()
        *rockPaperScissors.length)];
    return computerPick;
}

function result() { 
   if (userChoice == computerChoice) {
    userScore++;
    computerScore++;
    return `tie! your score: ${userScore}. computer score: ${computerScore}`;
   }
   else if ((userChoice=='rock' && computerChoice=='scissors') || 
            (userChoice=='paper' && computerChoice=='rock') || 
            (userChoice=='scissors' && computerChoice=='paper')) 
            {
                userScore++;
                return `you win! your score: ${userScore}. computer score: ${computerScore}` ;
    }
    else if ((userChoice=='rock' && computerChoice=='paper') ||
            (userChoice=='paper' && computerChoice=='scissors') ||
            (userChoice=='scissors' && computerChoice=='rock')) 
            {
                computerScore++;
                return `you lose! your score: ${userScore}. computer score: ${computerScore}`;

    }
 }

 function disableButtons() {
    buttons.forEach(btn => btn.disabled = true);
 }

 function endGame() {
    if (userScore == 5 && computerScore < 5) {
        disableButtons();
        playAgain.disabled = false;
        return "yay! you won the game :)";
    }
    else if (userScore < 5 && computerScore == 5) {
        disableButtons();
        playAgain.disabled = false;
        return "you lost the game :(";
    }
    else if (userScore == 5 && computerScore == 5) {
        disableButtons();
        playAgain.disabled = false;
        return "this game resulted in a tie";
    }  
 }


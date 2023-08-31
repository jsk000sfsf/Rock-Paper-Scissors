// Complete game function //

let playerScore = 0;
let computerScore = 0;

let compChoice;
let playerChoice;

//  grab user input and run function to evaluate choices //
//querySelector() looks through the entire html and selects the thing in parentheses//
let pScoreboard = document.querySelector('.p-count');
let cScoreboard = document.querySelector('.c-count');
let roundResult = document.querySelector('.result');

function computerChoice() {
  const computerOptions = ["rock", "paper", "scissor"];
  const randomNum = Math.floor(Math.random() * 3);
  compChoice = computerOptions[randomNum];
}

function playerWins() {
  playerScore++;
  pScoreboard.innerHTML = playerScore;
  roundResult.innerHTML = 'Player wins';
}

function compWins() {
  computerScore++;
  console.log(computerScore);
  cScoreboard.innerHTML = computerScore;
  roundResult.innerHTML = 'Computer wins';
}

function tie() {
  roundResult.innerHTML = 'Tie!';
}

function throwRock() {
  playerChoice = 'rock';
  computerChoice();
  game();
}

function throwPaper() {
  playerChoice = 'paper';
  computerChoice();
  game();
}

function throwScissors() {
  playerChoice = 'scissor';
  computerChoice();
  game();
}


function game() {
  if (playerChoice === 'rock' && compChoice === 'paper') {
      compWins();
    } else if (playerChoice === 'rock' && compChoice === 'scissor') {
      playerWins();
    } else if (playerChoice === 'paper' && compChoice === 'rock') {
      playerWins();
    } else if (playerChoice === 'paper' && compChoice === 'scissor') {
      compWins();
    } else if (playerChoice === 'scissor' && compChoice === 'paper') {
      playerWins();
    } else if (playerChoice === 'scissor' && compChoice === 'rock') {
      compWins();
    } else if (playerChoice === compChoice) {
      tie();
    }
  }

  function resetScore() {
    playerScore = 0;
    computerScore = 0;
    pScoreboard.innerHTML = playerScore;
    cScoreboard.innerHTML = computerScore;
    roundResult.innerHTML = 'Who will win?';
  }

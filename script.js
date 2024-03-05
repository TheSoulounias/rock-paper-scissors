/* Comment */
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    updateMessage("Its a tie!");
    playRound(getPlayerSelection(), getComputerChoice());
  } else if (playerSelection == 1 && computerSelection == 2) {
    computerScore++;
    updateMessage("Computer Wins!Paper beats Rock!");
    updateScores;
  } else if (playerSelection == 1 && computerSelection == 3) {
    playerScore++;
    updateMessage("Player Wins!Rock beats Scissors!");
    updateScores;
  } else if (playerSelection == 2 && computerSelection == 1) {
    playerScore++;
    updateMessage("Player Wins!Paper beats Rock!");
    updateScores;
  } else if (playerSelection == 2 && computerSelection == 3) {
    computerScore++;
    updateMessage("Computer Wins!Scissors beats Paper!");
    updateScores;
  } else if (playerSelection == 3 && computerSelection == 1) {
    computerScore++;
    updateMessage("Computer Wins!Rock beats Scissors!");
    updateScores;
  } else {
    playerScore++;
    updateMessage("Player Wins!Scissors beats Paper!");
    updateScores;
  }
}

function getPlayerSelection() {
  const input = prompt("Select\n1 rock\n2 paper\n3 scissors");
  if (input == 1 || input == 2 || input == 3) {
    return input;
  } else {
    alert("Invalid selection!");
    getPlayerSelection();
  }
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

const yourScore = document.querySelector('#your-score');
const compScore = document.querySelector('#comp-score');
const message = document.querySelector('#message');



let playerScore = 0;
let computerScore = 0;

yourScore.textContent = playerScore;
compScore.textContent = computerScore;


function alertFunction() {
  alert("this works");
}

function updateScores() {
  yourScore.textContent = playerScore;
  compScore.textContent = computerScore;
}

function updateMessage(messageText) {
  message.textContent = messageText;
}
const rock = document.querySelector("#rock");
rock.addEventListener("click", alertFunction);

const paper = document.querySelector('#paper');
paper.addEventListener("click", alertFunction);

const scissors = document.querySelector('#scissors');
scissors.addEventListener("click", alertFunction);

function gameReset() {
  let playerScore = 0;
  let computerScore =0;

}

// Testing zone

playRound(getPlayerSelection(), getComputerChoice());

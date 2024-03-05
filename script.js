/* Comment */
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    alert("Its a tie!");
    playRound(getPlayerSelection(), getComputerChoice());
  } else if (playerSelection == 1 && computerSelection == 2) {
    computerScore++;
    alert("Computer Wins!\nPaper beats Rock!");
  } else if (playerSelection == 1 && computerSelection == 3) {
    playerScore++;
    alert("Player Wins!\nRock beats Scissors!");
  } else if (playerSelection == 2 && computerSelection == 1) {
    playerScore++;
    alert("Player Wins!\nPaper beats Rock!");
  } else if (playerSelection == 2 && computerSelection == 3) {
    computerScore++;
    alert("Computer Wins!\nScissors beats Paper!");
  } else if (playerSelection == 3 && computerSelection == 1) {
    computerScore++;
    alert("Computer Wins!\nRock beats Scissors!");
  } else {
    playerScore++;
    alert("Player Wins!\nScissors beats Paper!");
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

const yourScore = document.querySelector('#your-score')
const compScore = document.querySelector('#comp-score')



let playerScore = 1;
let computerScore = 4;

yourScore.textContent = playerScore;
compScore.textContent = computerScore;

function alertFunction() {
  alert("this works");
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

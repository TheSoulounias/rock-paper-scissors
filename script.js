/* Comment */
function playRound(playerSelection, computerSelection) {
    if (playerSelection==computerSelection){
        alert("Its a tie!");
        playRound(getPlayerSelection(),getComputerChoice());
    } else if ((playerSelection==1)&&(computerSelection==2)) {
        computerScore++;
        alert("Computer Wins!\nPaper beats Rock!");
    } else if ((playerSelection==1)&&(computerSelection==3)) {
        playerScore++;
        alert("Player Wins!\nRock beats Scissors!");
    } else if ((playerSelection==2)&&(computerSelection==1)) {
        playerScore++;
        alert("Player Wins!\nPaper beats Rock!");
    }  else if ((playerSelection==2)&&(computerSelection==3)) {
        computerScore++;
        alert("Computer Wins!\nScissors beats Paper!");
    }  else if ((playerSelection==3)&&(computerSelection==1)) {
        computerScore++;
        alert("Computer Wins!\nRock beats Scissors!")
    }  else {
        playerScore++;
        alert("Player Wins!\nScissors beats Paper!")
    }
}

function getPlayerSelection() {
    const input = prompt("Select\n1 rock\n2 paper\n3 scissors");
    if ((input==1)||(input==2)||(input==3)) {
        return input;
    } else {
        alert("Invalid selection!");
        getPlayerSelection();
    }
}

function getComputerChoice() {
   return Math.floor(Math.random() * 3) + 1;
}
let playerScore = 0;
let computerScore = 0;

function game(){

    playRound(getPlayerSelection(), getComputerChoice());
    alert(`Score is Player:${playerScore} Computer:${computerScore}`)
    playRound(getPlayerSelection(), getComputerChoice());
    alert(`Score is Player:${playerScore} Computer:${computerScore}`)
    playRound(getPlayerSelection(), getComputerChoice());
    alert(`Score is Player:${playerScore} Computer:${computerScore}`)
    playRound(getPlayerSelection(), getComputerChoice());
    alert(`Score is Player:${playerScore} Computer:${computerScore}`)
    playRound(getPlayerSelection(), getComputerChoice());
    if (playerScore>computerScore){
        alert(`Player wins game\n Score: ${playerScore} - ${computerScore}`);
    } else if (computerScore>playerScore) {
        alert(`Computer wins game\n Score: ${playerScore} - ${computerScore}`);
    } else {
        alert(`Its a tie\n Score: ${playerScore} - ${computerScore}`)
    }
}
game();
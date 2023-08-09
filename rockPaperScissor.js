const choices = ["Rock", "Paper", "Scissors"];
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

const messageDisplay = document.querySelector('.messageDisplay');
const playerDisplay = document.querySelector('.playerScore');
const computerDisplay = document.querySelector('.computerScore');
const buttonList = [...document.querySelectorAll('button')];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    //Fix any case issues with player selection
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.substring(0,1).toUpperCase() + playerSelection.substr(1);

    //Compare the results of the selections to determine a winner
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++;
        return `You Win! Your choice of ${playerSelection} beats the Computer's choice of ${computerSelection}.`
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        return `You Win! Your choice of ${playerSelection} beats the Computer's choice of ${computerSelection}.`
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        return `You Win! Your choice of ${playerSelection} beats the Computer's choice of ${computerSelection}.`
    } else if (playerSelection === computerSelection) {
        return `It's a tie! You and the computer both chose ${playerSelection}.`
    } else {
        computerScore++;
        return `You Lose! The Computer's choice of ${computerSelection} beats your choice of ${playerSelection}.`
    }
}

buttonList.forEach((item) => {
    item.addEventListener('click', (e) => {
        computerSelection = getComputerChoice();
        messageDisplay.textContent = playRound(e.target.innerHTML, computerSelection);
        playerDisplay.textContent = playerScore;
        computerDisplay.textContent = computerScore;

        if (playerScore > 4) {
            alert(`Congratulations! You've won ${playerScore} to ${computerScore}!`);
            playerScore = 0;
            computerScore = 0;
            playerDisplay.textContent = playerScore;
            computerDisplay.textContent = computerScore;
            messageDisplay.textContent = "";
        } else if (computerScore > 4) {
            alert(`Sorry, you've lost ${computerScore} to ${playerScore}! Better luck next time!`);
           playerScore = 0;
           computerScore = 0;
           playerDisplay.textContent = playerScore;
           computerDisplay.textContent = computerScore;
           messageDisplay = "";
        }
    });
});
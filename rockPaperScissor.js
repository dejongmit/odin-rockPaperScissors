const choices = ["Rock", "Paper", "Scissors"];
let computerSelection;
let playerSelection;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    //Fix any case issues with player selection
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.substring(0,1).toUpperCase() + playerSelection.substr(1);

    //Compare the resutls of the selections to determine a winner
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return `You Win! Your choice of ${playerSelection} beats the Computer's choice of ${computerSelection}.`
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return `You Win! Your choice of ${playerSelection} beats the Computer's choice of ${computerSelection}.`
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return `You Win! Your choice of ${playerSelection} beats the Computer's choice of ${computerSelection}.`
    } else if (playerSelection === computerSelection) {
        return `It's a tie! You and the computer both chose ${playerSelection}.`
    } else {
        return `You Lose! The Computer's choice of ${computerSelection} beats your choice of ${playerSelection}.`
    }
}

function game(){
 for (let i = 0; i <=4; i++) {
    playerSelection = prompt('Enter your choice: "Rock", "Paper", or "Scissors"');
    computerSelection = getComputerChoice();
    console.log(playRound (playerSelection, computerSelection));
 }
}

game();
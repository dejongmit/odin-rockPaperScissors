const choices = ["Rock", "Paper", "Scissors"];
const playerSelection = "rock";//choices[0];
const computerSelection = getComputerChoice();

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    //Fix any case issues with player selection
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.substring(0,1).toUpperCase() + playerSelection.substr(1);

    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    } else if (playerSelection === computerSelection) {
        return `It's a tie! You and the computer both chose ${playerSelection}.`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    }
}

console.log(playRound(playerSelection, computerSelection));
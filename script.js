// make a function that randomly return "rock", "paper" or "scissor"
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return "rock";
    }
    else if (random === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
// make a function that return a string based on the selection
function round(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors";
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Tie";
    }
    else if (playerSelection === "rock" && computerSelection === "rock") {
        return "Tie";
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Tie";
    }
    else {
        return "You win! Congrats!";
    }
}

function game() {
    let playerSelection = prompt("Rock, paper or scissors?");
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(round(playerSelection.toLowerCase(), computerSelection));
    playerSelection = prompt("Rock, paper or scissors?");
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(round(playerSelection.toLowerCase(), computerSelection));
    playerSelection = prompt("Rock, paper or scissors?");
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(round(playerSelection.toLowerCase(), computerSelection));
    playerSelection = prompt("Rock, paper or scissors?");
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(round(playerSelection.toLowerCase(), computerSelection));
    playerSelection = prompt("Rock, paper or scissors?");
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(round(playerSelection.toLowerCase(), computerSelection));
    

    
}

console.log(game());



// const playerSelection = "Rock";
// const computerSelection = getComputerChoice();
// console.log(playerSelection);
// console.log(computerSelection);
// console.log(round(playerSelection.toLowerCase(), computerSelection));


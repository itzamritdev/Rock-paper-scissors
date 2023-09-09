// make a function that randomly return "rock", "paper" or "scissor"
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return "Rock";
    }
    else if (random === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
// make a function that return a string based on the selection
function round(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You lose! Scissors beats Paper";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You lose! Rock beats scissors";
    }
    else {
        return "You win! Congrats!";
    }
}

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
function playRound(playerSelection, computerSelection) {
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
    let playerScore = 0;
    let computerScore = 0;
    for (let i=1; i<=5; i++) {
        let playerSelection = prompt("Rock, paper or scissors?");
        let computerSelection = getComputerChoice();
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
        let score = playRound(playerSelection.toLowerCase(), computerSelection);
        console.log(score);
        if (score === "You lose! Paper beats Rock" || score === "You lose! Scissors beats Paper" || score === "You lose! Rock beats scissors") {
            computerScore = computerScore + 1;
        }
        else if (score === "Tie") {
            computerScore = computerScore + 1;
            playerScore = playerScore + 1;
        }
        else if (score === "You win! Congrats!") {
            playerScore = playerScore + 1;
        }
        console.log(playerScore);
        console.log(computerScore);
        
    }
    if (playerScore > computerScore) {
        return "Player win";
    }
    else {
        return "Computer win";
    }

    
}

console.log(game());



// const playerSelection = "Rock";
// const computerSelection = getComputerChoice();
// console.log(playerSelection);
// console.log(computerSelection);
// console.log(playRound(playerSelection.toLowerCase(), computerSelection));


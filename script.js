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
        return "Scissor";
    }
}

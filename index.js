const choices = ["rock", "paper", "scissors"];
function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}
function getplayerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

const playerSelection = getplayerChoice();
const computerSelection = getComputerChoice();

function checkWinner (playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return "Tie";
    } else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") 
    ){
        return "Player";
        
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock") 
    ){
        return "Computer";
    } 
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a tie"
    } else if (result == "Player"){
        return `Player wins - ${playerSelection} beats ${computerSelection}`
    } else if (result == "Computer"){
        return `Computer wins - ${computerSelection} beats ${playerSelection}`
    }
    }

    console.log(playRound(playerSelection, computerSelection))


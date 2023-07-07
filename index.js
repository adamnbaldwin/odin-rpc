const choices = ["rock", "paper", "scissors"];
function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}
function getplayerChoice(){
    let validatedInput = false;
    while (validatedInput == false){
    const choice = prompt("Rock, Paper, Scissors?");
    if (choice == null){
        continue;
    }   
    const choiceInLower = choice.toLowerCase(); 
    if(choices.includes(choiceInLower)){
        validatedInput = true;
        return choiceInLower;
    }

    }
}

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

function game(){
   let scorePlayer = 1;
   let scoreComputer = 1;
    console.log("Welcome friend")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getplayerChoice();
        const computerSelection = getComputerChoice();  
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection,computerSelection) == "Player") {
            scorePlayer++;
        } else if (checkWinner(playerSelection,computerSelection) == "Computer") {
            scoreComputer++;
        }
    }
    console.log("Game Over Friend!");
    if(scorePlayer > scoreComputer) {
        console.log(`Player wins ${scorePlayer} to ${scoreComputer}`)
    } else if(scoreComputer > scorePlayer) {
        console.log(`Computer wins ${scoreComputer} to ${scorePlayer}`)
    } else {
        console.log("It is a tie, yo")
    }
}

game()
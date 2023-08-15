const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const winTally = document.querySelector("#tallyText");
const winTallyComputer = document.querySelector("#tallyTextComputer");
const finalResult = document.querySelector("#finalResult");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;
let playerTally = 0;
let computerTally = 0;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = `Result: ${checkWinner()}`;
    tallyWins();
    winTally.textContent = `Player Wins: ${playerTally}`;
    winTallyComputer.textContent = `Computer Wins: ${computerTally}`;
    winnerCheck();
    finalResult.textContent = `${winnerCheck()}`;

}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "Rock";
        break;
      case 2:
        computer = "Paper";
        break;
      case 3:
        computer = "Scissors";
        break;
    }
}
function checkWinner(){
    if(player == computer){
      return "Draw";
    }
    else if(computer == "Rock"){
      return (player == "Paper") ? "Player Wins" : "Computer Wins"
    }
    else if(computer == "Paper"){
      return (player == "Scissors") ? "Player Wins" : "Computer Wins"
    }
    else if(computer == "Scissors"){
      return (player == "Rock") ? "Player Wins" : "Computer Wins"
    }
}; 

function tallyWins(){
if (checkWinner()=="Player Wins") {playerTally++;}
else if (checkWinner()=="Computer Wins") {computerTally++};}

function winnerCheck(){
  if (playerTally > 4) {return "GAME OVER, PLAYER IS CHAMPION";}
  else if (computerTally > 4) {return "GAME OVER, COMPUTER IS CHAMPION";}
  else {return "First to 5 wins is champion!"};
  };

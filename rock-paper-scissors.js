const choices = ['rock', 'paper', 'scissors'];
const number = choices.length;

function computerPlay(){
      const randomNum = Math.floor(Math.random() * number);
  const computerChoice = choices[randomNum];
  return computerChoice;
}    
let computerScore = 0;
let playerScore = 0;

function playRound(){
  let computerSelection= computerPlay();
  let playerSelection= prompt("What's your move?", "Rock, paper, or scissors").toLowerCase();
   if ((computerSelection == "rock") && (playerSelection == "scissors")){
    return ("Computer wins!");
  }
  else if ((computerSelection == "rock") && (playerSelection == "paper")){
    return ("Player wins!");
  }
  else if ((computerSelection == "scissors") && (playerSelection == "rock")){
    return ("Player wins!");
  }
  else if ((computerSelection == "scissors") && (playerSelection == "paper")){
    return ("Computer wins!");
  }
  else if ((computerSelection == "paper") && (playerSelection == "scissors")){
    return ("Player wins!");
  }
  else if ((computerSelection == "paper") && (playerSelection == "rock")){
    return ("Computer wins!");
  }
  else {
    return ("It's a tie!");
  }
}

function game(){
  for (i=0; i<=4; i++){
    let result = playRound();
    console.log(result);
    if (result == ("Computer wins!")){
      computerScore++;
    }
    else if (result == "Player wins!"){
      playerScore++;
    }
  }
  if (playerScore > computerScore){
    console.log('You won!');
  }
  else if (computerScore > playerScore){
    console.log('Sorry, you lost');
  }
  else{
    console.log("Game is tied")
  }
}
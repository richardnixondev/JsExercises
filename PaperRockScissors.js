let rock = "rock";
let paper = "paper";
let scissors = "scissors";

// these two variables will be changed to test the conditional
let firstPlayerChoice = rock;
let secondPlayerChoice = scissors;



let firstPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock;
let secondPossibility = firstPlayerChoice === rock && secondPlayerChoice === scissors;
let thirdPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper;

let fourthPossibility = secondPlayerChoice === paper && firstPlayerChoice === rock;
let fifthPossibility = secondPlayerChoice === rock && firstPlayerChoice === scissors;
let sixthPossibility = secondPlayerChoice === scissors && firstPlayerChoice === paper;

let seventhPossibility = firstPlayerChoice === secondPlayerChoice;


if (firstPlayerChoice === "paper" && secondPlayerChoice === "rock") {
    firstPossibility = true;
    console.log("first player won!")
  }
  else if(firstPlayerChoice === "rock" && secondPlayerChoice === "scissors") {
    secondPossibility = true;
    console.log("first player won!")
  }
  else if(firstPlayerChoice === "scissors" && secondPlayerChoice === "paper") {
    thirdPossibility = true;
    console.log("first player won!")
  }else if(secondPlayerChoice === "paper" && firstPlayerChoice === "rock") {
    fourthPossibility = false;
    console.log("Second player won!")
  }
  else if(secondPlayerChoice === "rock" && firstPlayerChoice === "scissors") {
    fifthPossibility = false;
    console.log("Second player won!")
  }
  else if(secondPlayerChoice === "scissors" && firstPlayerChoice === "paper") {
    sixthPossibility = false;
    console.log("Second player won!")
  }
  else if(firstPlayerChoice === secondPlayerChoice) {
    console.log("tie")
  }
  else{
    console.log("something went wrong!")
}
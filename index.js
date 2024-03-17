// LETS GET COMPUTER RANDOM CHOICE
// set of combinations
const Combinations = ["ROCK", "PAPER", "SCISSORS"];
var randomIndex;
// console.log(Combinations.length);
function getComputerChoice()
{
   randomIndex = (Math.floor(Math.random()*Combinations.length));
//    console.log(randomIndex);
   return Combinations[randomIndex];
}
// console.log(getComputerChoice());
let ComputerChoice = getComputerChoice();



// LETS GET USER CHOICE

// setting up the interface in command line for reading input
// import { createInterface } from 'node:readline';
// const Readline = require('node:readline');
// const rl = Readline.createInterface(
//     {
//         input: process.stdin,
//         output: process.stdout
//     }
// )
// rl.question("Enter Either Rock Paper or Scissors: ", function(string)
// {
//     let userInput = string;
//     console.log(userInput);
// })


  let PlayerChoice = (prompt("Enter Either Rock Paper or Scissors: ")).toUpperCase();
//   compare condition
function PlayRound(PC, CC)
{
    if(PC === CC)
    {
        console.log(" It's a DRAW ");
    }
    // not equal cases
    else if(CC === "ROCK")
    {
        switch(PC)
        {
            case "PAPER": 
                console.log("You WON");
                break;
            case "SCISSORS":
                console.log("You LOST");
        }
    }
    else if(CC === "PAPER")
    {
        switch(PC)
        {
            case "ROCK":
                console.log("You LOST");
                break;
            case "SCISSORS":
                console.log("You WON");
        }
    }
    else if(CC === "SCISSORS")
    {
        switch(PC)
        {
            case "ROCK":
                console.log("You WON");
                break;
            case "PAPER":
                console.log("You LOST");
        }
    }
}
PlayRound(PlayerChoice, ComputerChoice);


    
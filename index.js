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
        console.log(" %c It's a DRAW ", "color: Blue;");
    }
    // not equal cases
    else if(CC === "ROCK")
    {
        switch(PC)
        {
            case "PAPER": 
                PrintWIN();
                break;
            case "SCISSORS":
                PrintLOST();
        }
    }
    else if(CC === "PAPER")
    {
        switch(PC)
        {
            case "ROCK":
                PrintLOST();
                break;
            case "SCISSORS":
                PrintWIN();
        }
    }
    else if(CC === "SCISSORS")
    {
        switch(PC)
        {
            case "ROCK":
                PrintWIN();
                break;
            case "PAPER":
                PrintLOST();
        }
    }
}
// custom functions
function PrintLOST()
{
    console.log(" %c You LOST ", "color: red;");
}
function PrintWIN()
{
    console.log(" %c You WON ", "color: green;");
}
PlayRound(PlayerChoice, ComputerChoice);


    
// LETS GET COMPUTER RANDOM CHOICE
// set of combinations
const Combinations = ["ROCK", "PAPER", "SCISSORS"];
var randomIndex;
function getComputerChoice()
{
   randomIndex = (Math.floor(Math.random()*Combinations.length));
   return Combinations[randomIndex];
}

// LETS GET USER CHOICE

// Declaring PC and CC here as global variable so it can be used in all functions and blocks
let PC;
let CC;
//   compare condition
function PlayRound()
{
     PC = (prompt("Enter Either Rock Paper or Scissors: ")).toUpperCase(); //PlayerCHoice
     CC = getComputerChoice();
    if(PC === CC)
    {
        console.log(` Count: "%c ${PlayCount} "`, "color: yellow; font-size: 17px")
        console.log(`%c It's a DRAW, %c Both were ${PC}`,  "color:Green; font-size: 20px" , "color:Orange; font-size:20px");
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
    console.log(` Count: "%c ${PlayCount} "`, "color : yellow; font-size: 17px;");
    console.log(` %c You LOST..... %c Your ${PC} lost over Computer's ${CC}` , "color: red; font-size: 20px; font-weight: 300;", "color: Orange; font-size: 20px;");
}
function PrintWIN()
{
    console.log(` Count: "%c ${PlayCount} "`, "color : yellow; font-size: 17px;")
    console.log(`%c You WON... %c  Your ${PC} won over Computer's   ${CC}`  , "color: green; font-size: 20px", "color: Orange; font-size: 20px;");
}

// Adding COUNTER
var PlayCount = 1;

 function RestartGame()
 {
  if(window.confirm("No more Lives Available, Do you want to Restart the Game?"))
  {
    console.log(" %c Yay! New Game: ", "color: yellow; font-size: 20px")
    PlayCount = 1;
     PLAY();
  } 
  else{
    console.log(" %c ***---- GAME CANCELLED ----***", "color: purple; font-size: 23px");
  }
 }

 function PLAY()
 {
     while(PlayCount<6)
    {
        PlayRound();
        PlayCount++;
    }
    RestartGame();
 }
//  LETS EXECUTE OUR MAIN FUNCTION ();
PLAY();

    
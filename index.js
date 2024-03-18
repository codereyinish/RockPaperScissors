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
let PC;    //Player's Choice
let CC;    //Computer's Choice                                                           
let PlayerPoint = 0;
let CompPoint = 0;
//   compare condition
function PlayRound()
{
     PC = (prompt("Enter Either Rock Paper or Scissors: ")).toUpperCase(); //PlayerCHoice
     CC = getComputerChoice();
    if(PC === CC)
    {
        console.log(` Count: "%c ${PlayCount} "`, "color: yellow; font-size: 17px")
        console.log(`%c It's a DRAW, %c Both were ${PC}`,  "color:Green; font-size: 20px" , "color:Orange; font-size:20px");
        PrintPoints();
    }
    // not equal cases
    // You are user... Used PC in expression instead of CC bcoz , PC can be any out of bound vlaue (in else)
    else if(PC === "ROCK")
    {
        switch(CC)
        {
            case "PAPER": 
                LOSTstatus();
                break;
            case "SCISSORS":
                WINstatus();
        }
    }
    else if(PC === "PAPER")
    {
        switch(PC)
        {
            case "ROCK":
                WINstatus();
                break;
            case "SCISSORS":
                LOSTstatus();
        }
    }
    else if(PC === "SCISSORS")
    {
        switch(CC)
        {
            case "ROCK":
                LOSTstatus();
                break;
            case "PAPER":
                WINstatus();
        }
    }
    // IF PC is out of bound (not Rock, not Paper, not Scissors then)
    else 
    {
        // INVALID USER_INPUT  CASE
        console.log(` Count: "%c ${PlayCount} "`, "color: yellow; font-size: 17px");
        console.log("%c Invlaid Input Entered", "color: red; font-size:18px");
        PrintPoints();
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

 function LOSTstatus()
 {
    CompPoint++;
    PrintLOST();
    // displaying points
    PrintPoints();
    
}
function WINstatus()
{
    PlayerPoint++;
    PrintWIN();
    // displaying points
    PrintPoints();
    
 }
//  DisplayPoint Style
function PrintPoints()
{
    console.log(`%c Player's_Point: ${PlayerPoint} %c Computer's_Point: ${CompPoint}`, "color: #1c87c9; font-size:19px", "color:#7FFFD4; font-size: 19px");
}

// Adding COUNTER
var PlayCount = 1;

 function RestartRound()
 {
  if(window.confirm("No more Lives Available, Do you want to Restart the Game?"))
  {
    console.log(" %c Yay! New Game: ", "color: yellow; font-size: 20px")
    PlayCount = 1;
    PlayerPoint = 0;
    CompPoint = 0;
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
    // end of the round
    PrintAnnouncement();
    RestartRound();
 }

 function PrintAnnouncement()
 {
    (PlayerPoint>CompPoint)?console.log(" %c So the Winner of the Previous Round is YOU ", "color:#800000; font-size:22px"):console.log(" %c The winner of the Previous Round is Computer G", "color:#800000 ; font-size:22px");
 }
//  LETS EXECUTE OUR MAIN FUNCTION ();
PLAY();


    
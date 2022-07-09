//We wake up the beast

const narrator = document.querySelector(" .console")
consoleUpdater("T-800 is online.");

//we store the score
let userScore = 0;
let t800score = 0;

//We make the computer select randomly whaterver it wants

function computerPlay()
{
    let t800move = [ "rock", "paper", "scissors" ];
    let r = Math.floor(Math.random()*3);
    return t800move[r];
}

//We make a function that loads the game round

const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) 
{
   
    //Player chooses Rock
    if( playerSelection === "rock" && computerSelection === "scissors" )
    {
        userScore++;
    } else if ( playerSelection === "rock" && computerSelection === "rock" )
    {
        consoleUpdater("Truce! Rock can't beat Rock");
    } else if ( playerSelection === "rock" && computerSelection === "paper" )
    {
        consoleUpdater("You lose! Paper beats Rock")
        t800score++;
    }

    //Player chooses Paper
    if( playerSelection === "paper" && computerSelection === "scissors" )
    {
        consoleUpdater("You lose! Scissors beat Paper");
        t800score++;
    } else if ( playerSelection === "paper" && computerSelection === "rock" )
    {
        consoleUpdater("You win! Paper beats Rock");
        userScore++;
    } else if ( playerSelection === "paper" && computerSelection === "paper" )
    {
        consoleUpdater("Truce! Paper can't beat Paper");
    }

    //Player chooses Scissors
    if( playerSelection === "scissors" && computerSelection === "scissors" )
    {
        consoleUpdater("Truce! Scissors can't beat Scissors");
    } else if ( playerSelection === "scissors" && computerSelection === "rock" )
    {
        consoleUpdater("You lose! Rock beats Scissors");
        t800score++;
    } else if ( playerSelection === "scissors" && computerSelection === "paper" )
    {
        consoleUpdater("You win! Scissors beat Paper");
        userScore++;
    }

    //Score updates
    if( userScore === 5 )
    {
        console.clear();
        alert("TOBEY LOST!")
        userScore = 0;
        t800score = 0;
    } 
    if ( t800score === 5 )
    {
        console.clear();
        alert("TOBEY WON!")
        userScore = 0;
        t800score = 0;
    }     
}

//
const tScore = document.querySelector(" .tobeyScore")
const uScore = document.querySelector(" .userScore")

function consoleUpdater(string)
{
    narrator.textContent = string;
}

function scoreUpdater()
{
    tScore.textContent = t800score;
    uScore.textContent = userScore;
}

const userSelectionR = document.querySelector(" .option.rock");
userSelectionR.onclick = function(){
    const tobeysmove = computerPlay();
    playRound("rock", tobeysmove);
    scoreUpdater();
};

const userSelectionP = document.querySelector(" .option.paper");
userSelectionP.onclick = function(){
    const tobeysmove = computerPlay();
    playRound("paper", tobeysmove);
    scoreUpdater();
};

const userSelectionS = document.querySelector(" .option.scissors");
userSelectionS.onclick = function(){
    const tobeysmove = computerPlay();
    playRound("scissors", tobeysmove);
    scoreUpdater();
};








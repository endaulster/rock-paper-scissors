//We wake up the beast

console.log("T-800 is online.");

//We make the computer select randomly whaterver it wants

function computerPlay()
{
    let t800move = [ "rock", "paper", "scissors" ];
    let r = Math.floor(Math.random()*3);
    return t800move[r];
}

//We make a function that loads the game round
const computerSelecion = computerPlay();

function tester(playerSelection, computerSelecion){
    console.log("Player move: " + playerSelection);
    console.log("Computer move: " + computerSelecion);
}

function playRound(playerSelection, computerSelection) 
{
    //We deploy a tester to see if its doing what its supossed to
    tester(playerSelection, computerSelecion);
    //Player chooses Rock
    if( playerSelection === "rock" && computerSelecion === "scissors" )
    {
        console.log("You win! Rock beats Scissors");
    } else if ( playerSelection === "rock" && computerSelecion === "rock" )
    {
        console.log("Truce! Rock can't beat Rock");
    } else if ( playerSelection === "rock" && computerSelecion === "paper" )
    {
        console.log("You lose! Paper beats Rock")
    }

    //Player chooses Paper
    if( playerSelection === "paper" && computerSelecion === "scissors" )
    {
        console.log("You lose! Scissors beat Paper");
    } else if ( playerSelection === "paper" && computerSelecion === "rock" )
    {
        console.log("You win! Paper beats Rock");
    } else if ( playerSelection === "paper" && computerSelecion === "paper" )
    {
        onsole.log("Truce! Paper can't beat Paper");
    }

    //Player chooses Scissors
    if( playerSelection === "scissors" && computerSelecion === "scissors" )
    {
        console.log("Truce! Scissors can't beat Scissors");
    } else if ( playerSelection === "scissors" && computerSelecion === "rock" )
    {
        console.log("You lose! Rock beats Scissors");
    } else if ( playerSelection === "scissors" && computerSelecion === "paper" )
    {
        onsole.log("You win! Scissors beat Paper");
    }

}

//For now, the player choosing is going to be basic
let playerSelection = "rock";

playRound(playerSelection, computerSelecion);
//We reported the result


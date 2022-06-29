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

const computerSelection = computerPlay();

//Tester function, just to see if everything is working

function tester(playerSelection, computerSelection){
    console.log("Player move: " + playerSelection);
    console.log("Computer move: " + computerSelection);
}

function playRound(playerSelection, computerSelection) 
{
    //We turn the string to lowercaps

    playerSelection = playerSelection.toLowerCase();

    //We deploy a tester to see if its doing what its supossed to
   
    tester(playerSelection, computerSelection);
    
    //Player chooses Rock
    if( playerSelection === "rock" && computerSelection === "scissors" )
    {
        console.log("You win! Rock beats Scissors");
        userScore++;
    } else if ( playerSelection === "rock" && computerSelection === "rock" )
    {
        console.log("Truce! Rock can't beat Rock");
    } else if ( playerSelection === "rock" && computerSelection === "paper" )
    {
        console.log("You lose! Paper beats Rock")
        t800score++;
    }

    //Player chooses Paper
    if( playerSelection === "paper" && computerSelection === "scissors" )
    {
        console.log("You lose! Scissors beat Paper");
        t800score++;
    } else if ( playerSelection === "paper" && computerSelection === "rock" )
    {
        console.log("You win! Paper beats Rock");
        userScore++;
    } else if ( playerSelection === "paper" && computerSelection === "paper" )
    {
        console.log("Truce! Paper can't beat Paper");
    }

    //Player chooses Scissors
    if( playerSelection === "scissors" && computerSelection === "scissors" )
    {
        console.log("Truce! Scissors can't beat Scissors");
    } else if ( playerSelection === "scissors" && computerSelection === "rock" )
    {
        console.log("You lose! Rock beats Scissors");
        t800score++;
    } else if ( playerSelection === "scissors" && computerSelection === "paper" )
    {
        console.log("You win! Scissors beat Paper");
        userScore++;
    }
    console.log("Player Score: " + userScore);
    console.log("Computer Score: " + t800score);
}

//We make a function that turns 1 round in a 5 round game

function game(playerSelection, computerSelection)
{
    for (let i = 1; i < 6; i++)
    {
        playerSelection = prompt("Choose your weapon for round number " + i);
        playerSelection = playerSelection.toLowerCase();
        let valid = false;

        if ( playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors" )
        {
            valid = true;
        }

        while( valid == false )
        {
            playerSelection = prompt("Choose a VALID weapon for round number " + i);
            playerSelection = playerSelection.toLowerCase();
            if ( playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors" )
            {
                valid = true;
            }
        }
       
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    
    if ( userScore > t800score )
    {
        console.log("Skynet is down");
    } else if ( t800score )
    {
        console.log("Skynet wins");
    } else
    {
        console.log("We are even");
    }
}

//we store the score
let userScore = 0;
let t800score = 0;

game();




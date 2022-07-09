//We wake up the beast

const narrator = document.querySelector(" .console")

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
        consoleUpdater("-Bully Maguire: 'Something's different, I'll figure it out, stop lecturing me, please!'");
        userScore++;
        scoreGlow(MSG);
    } else if ( playerSelection === "rock" && computerSelection === "rock" )
    {
        consoleUpdater("-Bully Maguire: 'Take your hand off me. Now'");
    } else if ( playerSelection === "rock" && computerSelection === "paper" )
    {
        consoleUpdater("-Bully Maguire: 'Stings, doesn't it'")
        t800score++;
        scoreGlow(TSG);
    }

    //Player chooses Paper
    if( playerSelection === "paper" && computerSelection === "scissors" )
    {
        consoleUpdater("-Bully Maguire: 'Stings, doesn't it'")
        t800score++;
        scoreGlow(TSG);
    } else if ( playerSelection === "paper" && computerSelection === "rock" )
    {
        consoleUpdater("-Bully Maguire: 'Something's different, I'll figure it out, stop lecturing me, please!'");
        userScore++;
        scoreGlow(MSG);
    } else if ( playerSelection === "paper" && computerSelection === "paper" )
    {
        consoleUpdater("-Bully Maguire: 'Take your hand off me. Now'");
    }

    //Player chooses Scissors
    if( playerSelection === "scissors" && computerSelection === "scissors" )
    {
        consoleUpdater("-Bully Maguire: 'Take your hand off me. Now'");
    } else if ( playerSelection === "scissors" && computerSelection === "rock" )
    {
        consoleUpdater("-Bully Maguire: 'Stings, doesn't it'")
        t800score++;
        scoreGlow(TSG);
    } else if ( playerSelection === "scissors" && computerSelection === "paper" )
    {
        consoleUpdater("-Bully Maguire: 'Something's different, I'll figure it out, stop lecturing me, please!'");
        userScore++;
        scoreGlow(MSG);
    }

    //Score updates
    if( userScore === 5 )
    {
        consoleUpdater("-Bully Maguire: 'I'm gonna put some dirt in your eye!'");
        alert("TOBEY LOST!")
        userScore = 0;
        t800score = 0;
    } 
    if ( t800score === 5 )
    {
        consoleUpdater("-Bully Maguire: 'I'm gonna put some dirt in your eye!'");
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
    consoleGlow(narrator);
}

function consoleGlow(z){
    z.classList.add("cglow");
    function removetrans(){
        this.classList.remove("cglow");
    }
    z.addEventListener("transitionend", removetrans);
}

function scoreUpdater()
{
    tScore.textContent = t800score;
    uScore.textContent = userScore;
}

function addAndRemove(z){
    z.classList.add("playing");
    function removetrans(){
        this.classList.remove("playing");
    }
    z.addEventListener("transitionend", removetrans);
}

// POINTS

function scoreGlow(z){
    z.classList.add("point");
    function removetrans(){
        this.classList.remove("point");
    }
    z.addEventListener("transitionend", removetrans);
}

const MSG = document.querySelector(" .MS");
const TSG = document.querySelector(" .TS");

// 

const userSelectionR = document.querySelector(" .option.rock");
userSelectionR.onclick = function(){
    const tobeysmove = computerPlay();
    playRound("rock", tobeysmove);
    scoreUpdater();
    addAndRemove(userSelectionR);
};

const userSelectionP = document.querySelector(" .option.paper");
userSelectionP.onclick = function(){
    const tobeysmove = computerPlay();
    playRound("paper", tobeysmove);
    scoreUpdater();
    addAndRemove(userSelectionP);
};

const userSelectionS = document.querySelector(" .option.scissors");
userSelectionS.onclick = function(){
    const tobeysmove = computerPlay();
    playRound("scissors", tobeysmove);
    scoreUpdater();
    addAndRemove(userSelectionS);
};






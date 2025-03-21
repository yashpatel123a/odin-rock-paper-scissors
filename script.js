console.log("Rock Paper Scissors")
let humanScore = 0;
let computerScore = 0;
function getComputerChoice()
{
    const computerChoice = Math.floor(Math.random()*3);
    switch(computerChoice)
    {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
    return "invalid";
}

function getHumanChoice()
{
    const humanChoice = prompt("Enter your Choice \nrock \npaper \nscissors");
    return humanChoice;
}

function getMessage(humanChoice, computerChoice, isWin)
{
    if(isWin === 1)
        return `You Win! ${humanChoice} beats ${computerChoice}`;
    else if(isWin === 0)
        return "Tie!";
    else
        return `You Lose! ${computerChoice} beats ${humanChoice}`;
}
function playRound(humanChoice, computerChoice)
{
    const div = document.querySelector("div");
    const h2Human = document.querySelector(".human");
    const h2Computer = document.querySelector(".computer");
    console.log("Hello");
    console.log(humanChoice);
    humanChoice = humanChoice.toLowerCase();
    switch(humanChoice)
    {
        case "rock":
            if(computerChoice === "paper")
            {
                computerScore++;
                div.textContent = (getMessage(humanChoice, computerChoice, -1));
            }
            else if(computerChoice === "scissors")
            {
                humanScore++;
                div.textContent = (getMessage(humanChoice, computerChoice, 1));
            }
            else
                div.textContent = (getMessage(humanChoice, computerChoice, 0));
            break;
        case "paper":
            if(computerChoice === "rock")
                {
                    humanScore++;
                    div.textContent = (getMessage(humanChoice, computerChoice, 1));
                }
                else if(computerChoice === "scissors")
                {
                    computerScore++;
                    div.textContent = (getMessage(humanChoice, computerChoice, -1));
                }
                else
                div.textContent = (getMessage(humanChoice, computerChoice, 0));
                break;
        case "scissors":
            if(computerChoice === "rock")
                {
                    computerScore++;
                    div.textContent = (getMessage(humanChoice, computerChoice, -1));
                }
                else if(computerChoice === "paper")
                {
                    humanScore++;
                    div.textContent = (getMessage(humanChoice, computerChoice, 1));
                }
                else
                div.textContent = (getMessage(humanChoice, computerChoice, 0));
                break;
        case "reset":
            humanScore = 0;
            computerScore = 0;
            h2Human.textContent = "";
            h2Computer.textContent = "";
            div.textContent = "";
            break;
    }



    h2Human.textContent = `Player Score - ${humanScore}`
    h2Computer.textContent = `Computer Score - ${computerScore}`;
    if(humanScore === 5)
    {
        alert("Player Wins");
        humanScore = 0;
        computerScore = 0;
        h2Human.textContent = "";
        h2Computer.textContent = "";
        div.textContent = "";
    }
    else if(computerScore === 5)
    {
        alert("Computer Wins");
        humanScore = 0;
        computerScore = 0;
        h2Human.textContent = "";
        h2Computer.textContent = "";
        div.textContent = "";
    }
    
}

// function playGame()
// {

//     humanScore = 0;
//     computerScore = 0;
//     let counter = 0;
//     while(counter < 5)
//     {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         console.log(humanSelection, computerSelection);
//         playRound(humanSelection, computerSelection);
//         counter++;
//     }
//     if(humanScore > computerScore)
//     {
//         console.log("You Win!");
//     }
//     else if (humanScore < computerScore)
//     {
//         console.log("You lose!");
//     }
//     else
//         console.log("Tie!");
// }

// playGame();
/*

logic for computer choice
create a function named getComputerChoice
    return string value of "Rock" "Paper" "Scissors"

logic to get human choice
create a new function named getHumanChoice

*/

const button = document.querySelectorAll("button");button.forEach(b => {

    b.addEventListener("click", () => {
        playRound(b.textContent, getComputerChoice());
    });
});

    

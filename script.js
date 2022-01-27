console.log("Hey!");

//////////////////
//GAME MECHANICS//
//////////////////

//game();

/////////////////////////////////////////

//function game()

// uncomment below to restore 5 round functionality
// {
//     let winCounter = 0;
//
//     //plays 5 rounds of RPS
//     for (let i = 1; i <= 5; i++)
//     {
//         console.log(`Round ${i}!`);
//         let result = playRound(playerPlay(), computerPlay());
//         if (result.includes("You win!"))
//             winCounter++;
//
//         console.log(result);
//     }
//
//     console.log(`You won ${winCounter} of 5 rounds!`);
// }


function computerPlay() 
{
    let computerSelection = Math.floor(Math.random() * 3) + 1;
    //console.log(computerSelection);

    computerSelection = numToRPS(computerSelection);
    //console.log(computerSelection);

    return computerSelection;
}

function playerPlay()
{
    return prompt("Enter Rock, Paper, or Scissors");
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    //console.log(playerSelection); 

    if (playerSelection === computerSelection)
        return "It's a tie!";
    else if (playerSelection === "rock")
        {
            if (computerSelection === "paper")
                return "Paper beats Rock! The Computer wins!";
            else 
                return "Rock beats Scissors! You win!";
        }     
        else if (playerSelection === "paper")
        {
            if (computerSelection === "scissors")
                return "Scissors beats Paper! The Computer wins!";
            else 
                return "Paper beats Rock! You win!";
        }
        else if (playerSelection === "scissors")
        {
            if (computerSelection === "rock")
                return "Rock beats Scissors! The Computer wins!";
            else 
                return "Scissors beats Paper! You win!";
        }
        else 
            return "Error: invalid input";
}

function numToRPS(number) 
{
    let RPS = null;
    switch (number)
    { 
        case 1:
            RPS = "rock";
            break;
        case 2:
            RPS = "paper";
            break;
        case 3: 
            RPS = "scissors";
            break;
    }
    //console.log(RPS);
    return RPS;
}


/////////////////////
//JS IMPLEMENTATION//
/////////////////////

const gameButtons = document.querySelectorAll("[data-choice]");

console.log(gameButtons);

//every button click plays a round
gameButtons.forEach(gB => {
    gB.addEventListener('click', e => {
        const choice = gB.dataset.choice;
        let result = playRound(choice, computerPlay());
        console.log(result);
    });
});


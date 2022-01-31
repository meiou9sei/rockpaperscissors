/*
pseudocode

1) user clicks on button, R P or S
2) function to generate random computer choice
3) game function takes user choice, computer choice, determines winner
4) some function creates the result (computer choice, user choice, and winner) onto "history" section of page. puts at start of chain, old ones pushed down.

*/

/*
TODO:
    - record score 
    - create match history (and creating divs for that)
    - create CSS
*/

const RPS = [
    {
        name: "rock",
        win: "scissors",
        tie: "rock",
        loss: "paper",
    },
    {
        name: "paper",
        win: "rock",
        tie: "paper",
        loss: "scissors",
    },
    {
        name: "scissors",
        win: "paper",
        tie: "scissors",
        loss: "rock",
    }
];

// makes RPS buttons selectable
const choices = document.querySelectorAll("[data-choice]");

choices.forEach(choice => {
    choice.addEventListener('click', (e)=>{
        console.log(choice.dataset.choice);
        game(choice.dataset.choice, computerChoice());
    });
});


// game functions

function game(userChoice, pcChoice) {
    //finds from RPS array the corresponding object to user's choice
    const userHand = RPS.find(o => o.name === userChoice);

    if (userHand.win === pcChoice)
        console.log("poggers");
    else if (userHand.tie === pcChoice)
        console.log("meh");
    else if (userHand.loss === pcChoice)
        console.log("not poggies");

}

function computerChoice() {
    let rand = Math.floor(Math.random() * (3 - 0) + 0);
    // console.log(rand);
    return RPS[rand].name;
}


// score keeper
function scoreKeeper() {
    //
    const scoreContainer = document.querySelector("#score-container");
    
}

// match history
function matchHistory() {
    // each card of match history
    const scoreCard = 

}
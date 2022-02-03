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

    Reference: 
    - javascript-intro and 30min3ezpzprojs
*/

const RPS = [
    {
        name: "🗿",
        win: "✂",
        tie: "🗿",
        loss: "📄",
    },
    {
        name: "📄",
        win: "🗿",
        tie: "📄",
        loss: "✂",
    },
    {
        name: "✂",
        win: "📄",
        tie: "✂",
        loss: "🗿",
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

    if (userHand.win === pcChoice) {
        console.log("win");
        matchHistory("winner", "loser", userChoice, pcChoice);
    }

    else if (userHand.tie === pcChoice) {
        console.log("tie");
        matchHistory("tie", "tie", userChoice, pcChoice);
    }
    else if (userHand.loss === pcChoice) {
        console.log("lost");
        matchHistory("loser", "winner", userChoice, pcChoice);
    }

}

function computerChoice() {
    let rand = Math.floor(Math.random() * (3 - 0) + 0);
    // console.log(rand);
    return RPS[rand].name;
}


// SCORE KEEPER
function scoreKeeper() {
    //
    const scoreContainer = document.querySelector("#score-container");
    
}

// MATCH HISTORY
// for matchHistory, pass in winner/loser (classes) for userResult/pcResult
function matchHistory(userResult, pcResult, userChoice, pcChoice) {
    //select container
    const matchHistoryContainer = document.querySelector("#match-history");
    // each card of match history
    const scoreCard = document.createElement('div');
    scoreCard.classList.add('scoreCard');
    //create userTile
    const userTile = document.createElement('div');
    userTile.classList.add(userResult);
    userTile.textContent = `${userChoice}`;
    //create pcTile
    const pcTile = document.createElement('div');
    pcTile.classList.add(pcResult);
    pcTile.textContent = `${pcChoice}`;
    //attatch userTile/pcTile to scoreCard
    scoreCard.appendChild(userTile);
    scoreCard.appendChild(pcTile);
    //add to matchHistoryContainer
    matchHistoryContainer.prepend(scoreCard);
}
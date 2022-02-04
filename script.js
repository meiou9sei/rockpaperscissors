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


    ***redo css from ground up. start with containers layout, then add basic colors and stuff***
    - create CSS
        - last game is bigger than rest (small)
        - have buttons flex-shrink for smaller sizes
            - but max width for widescreen, centered
            - also get rid of button, just have emoji
        - have game buttons shrink properly. maybe use css grid?

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

// make RPS buttons selectable
const choices = document.querySelectorAll("[data-choice]");

choices.forEach(choice => {
    choice.addEventListener('click', (e)=>{
        console.log(choice.dataset.choice);
        game(choice.dataset.choice, computerChoice());
    });
});

// make clear match history functional
const matchHistoryContainer = document.querySelector("#match-history");

const clearMatchHistory = document.querySelector('#clear-match-history');

//clears match history
clearMatchHistory.addEventListener('click', function() {
    matchHistoryContainer.innerHTML = "";
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
    const scoreContainer = document.querySelector("#score-container");
    
}

// MATCH HISTORY
// for matchHistory, pass in winner/loser (classes) for userResult/pcResult
function matchHistory(userResult, pcResult, userChoice, pcChoice) {
    //select container
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
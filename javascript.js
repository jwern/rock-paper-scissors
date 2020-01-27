function computerPlay() {
    let computerChoice = pickRandomNumber(3);

    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function pickRandomNumber(choiceCount) {
    return Math.floor(Math.random() * choiceCount) + 1;
}

function playRound(button) {
    let playerSelection = button.id;
    let computerSelection = computerPlay();

    let youWin = false;

    if (playerSelection === "rock" && computerSelection === "scissors") {
        youWin = true;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        youWin = true;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        youWin = true;
    }

    let container = document.querySelector('.main');
    let winner = document.createElement("p");
    let score = document.querySelector('#score');
    
    if (container.lastChild.tagName === "P") {
        container.removeChild(container.lastChild);
    }

    winner.textContent = victoryMessage(youWin, playerSelection, computerSelection);
    score.textContent = trackScore(winner.textContent);
    container.appendChild(winner);

    return youWin;
}

function trackScore(message) {
    if (message.includes("Win")) {
        playerScore += 1;
    } else if (message.includes("Lose")) {
        computerScore += 1;
    }

    if (playerScore === finalScore) {
        resetScores();
        return `You are the grand winner!`;
    } else if (computerScore === finalScore) {
        resetScores();
        return `The computer wins it all.`;
    } else {
        return `Computer: ${computerScore}, Player: ${playerScore}`;
    }
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
}

function victoryMessage(victoryCondition, playerSelection, computerSelection) {
    playerSelection = capitalizeFirstLetter(playerSelection);
    computerSelection = capitalizeFirstLetter(computerSelection);

    if (playerSelection === computerSelection) {
        return `Tie! You both picked ${playerSelection}.`;
    } else if (victoryCondition === true) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase().concat(string.slice(1));
}

function requestScore() {
    let request = Number(prompt("What would you like to play to?"));

    if (isNaN(request) || request <= 0) {
        requestScore();
    } else {
        return request;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function() {
    playRound(button);
}));

let playerScore = 0;
let computerScore = 0;
let finalScore = requestScore();
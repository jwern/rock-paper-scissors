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

    styleResults(playerSelection, computerSelection, youWin);

    return youWin;
}

function styleResults(playerSelection, computerSelection, youWin) {
    let winner = document.querySelector('#instructions');
    let score = document.querySelector('#score');
    let computerIcon = document.querySelector(`#${computerSelection}`);
    let playerIcon = document.querySelector(`#${playerSelection}`);
    let icons = document.querySelectorAll('button');

    clearBackgrounds(icons);

    winner.innerHTML = victoryMessage(youWin, playerSelection, computerSelection);
    score.innerHTML = trackScore(winner.textContent);

    if (playerSelection === computerSelection) {
        computerIcon.className += ('shared-choice');
    } else {
        computerIcon.className += ('computer-choice');
        playerIcon.className += ('player-choice');
    }

    if (score.textContent.includes("grand winner") || score.textContent.includes("wins it all")) {
        winner.innerHTML = " ";
        finalScore = requestScore();
    }
}

function clearBackgrounds(icons) {
    icons.forEach(button => button.classList.remove('computer-choice', 'player-choice', 'shared-choice'));
}

function trackScore(message) {
    if (message.includes("Win")) {
        playerScore += 1;
    } else if (message.includes("Lose")) {
        computerScore += 1;
    }

    let tempPlayerScore = playerScore;
    let tempComputerScore = computerScore;

    if (playerScore === finalScore) {
        resetScores();
        return `<span class="player-text">${tempPlayerScore}</span> to <span class="computer-text">${tempComputerScore}</span>! You are the grand winner!`;
    } else if (computerScore === finalScore) {
        resetScores();
        return `<span class="computer-text">${tempComputerScore}</span> to <span class="player-text">${tempPlayerScore}</span>! The computer wins it all.`;
    } else {
        return `<span class="computer-text">Computer</span>: ${computerScore}, <span class="player-text">Player</span>: ${playerScore}`;
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
        return `Tie! You both picked <span class="shared-text">${playerSelection}</span>.`;
    } else if (victoryCondition === true) {
        return `You Win! <span class="player-text">${playerSelection}</span> beats <span class="computer-text">${computerSelection}</span>`;
    } else {
        return `You Lose! <span class="computer-text">${computerSelection}</span> beats <span class="player-text">${playerSelection}</span>`;
    }
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase().concat(string.slice(1));
}

function requestScore() {
    let request = Number(prompt("What score would you like to play to?"));

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
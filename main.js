/// COMPUTER NEEDS TO CHOOSE BETWEEN ROCK PAPER OR SCISSORS

function getComputerChoice() {
    let random = Math.random();
    let choice;

    if (random >= 0.66) {
        choice = "rock"
    } else if (random < 0.33) {
        choice = "paper"
    } else { 
        choice = "scissors" 
    }

    return choice;
}

/// PLAYERS NEEDS TO GET PROMPTED A SELECTION

function getPlayerSelection() {
    let choice = prompt("Choose a move!", "Rock");


    if (choice == null || choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors") {
        alert("You Made a Mistake!");
        choice = getPlayerSelection();
    }
    return choice.toLowerCase();
}

/// MOVES NEED TO BE COMPARED

function playRound() {
    let playerChoice = getPlayerSelection();
    let computerChoice = getComputerChoice();

    if (playerChoice == computerChoice) {
        return `This is a tie!`;

    } else if (playerChoice == "rock" && computerChoice == "paper") {
        return `You lost! Paper beats Rock!`;
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        return `You won! Rock beats Scissors!`;

    } else if (playerChoice == "paper" && computerChoice == "rock") {
        return `You won! Paper beats rock!`;
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        return `You lost! Scissors beats Paper!`;

    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        return `You lost! Rock beats Scissors!`;
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        return `You won! Scissors beats Paper!`;
    }
}

/// BEST OF FIVE NEEDS TO BE PLAYED

function playGame() {
    let humanWins = 0;
    let computerWins = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++) {

        let result = playRound();
        console.log(result);
        alert(result)

        // CHECK WHO WON
        if (result.includes("won")) {
            humanWins++;
        } else if (result.includes("lost")) {
            computerWins++;
        } else {
            ties++
        }
    }

        // CALCULATE OVERALL WINNER
        if (humanWins > computerWins) {
            return "The human has won. The world is saved!";
        } else if (computerWins > humanWins) {
            return "The machine revolution has started. No one is safe.";
        } else {
            return "This is a tie.";
        }
    }

/// GET RESULT DISPLAYED   
let gameResult = playGame();
alert(gameResult);
console.log(gameResult);

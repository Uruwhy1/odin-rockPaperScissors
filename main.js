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


const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
      const playerChoice = button.id;
      playGame(playerChoice);
    });
  });


  /// MOVES NEED TO BE COMPARED

  function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    let result;

    if (playerChoice == computerChoice) {
        result = `This is a tie!`;

    } else if (playerChoice == "rock" && computerChoice == "paper") {
        result = `You lost! Paper beats Rock!`;
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        result = `You won! Rock beats Scissors!`;

    } else if (playerChoice == "paper" && computerChoice == "rock") {
        result = `You won! Paper beats rock!`;
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        result = `You lost! Scissors beats Paper!`;

    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        result = `You lost! Rock beats Scissors!`;
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        result = `You won! Scissors beats Paper!`;
    }

    let roundResult = document.createElement('p');
    roundResult.textContent = result;
    document.getElementById('results').appendChild(roundResult);

    return result;
}



/// BEST OF FIVE NEEDS TO BE PLAYED


let humanWins = 0;
let computerWins = 0;
let ties = 0;

function playGame(playerChoice) {

    // CLEAR LOG IF NEW GAME

    if (humanWins + computerWins + ties == 0) {
        document.getElementById('results').innerHTML = '';
    }


    let result = playRound(playerChoice);

    // CHECK WHO WON
    if (result.includes("won")) {
        humanWins++;
    } else if (result.includes("lost")) {
        computerWins++;
    } else {
        ties++
    }

    document.querySelector('.human').textContent = humanWins;
    document.querySelector('.computer').textContent = computerWins;



    if(humanWins + computerWins + ties == 5) {
        let finalResult;
        // CALCULATE OVERALL WINNER
        if (humanWins > computerWins) {
            finalResult = "The human has won. The world is saved!";
        } else if (computerWins > humanWins) {
            finalResult = "The machine revolution has started. No one is safe.";
        } else {
            finalResult = "The game is tied!";
        }

        humanWins = 0;
        computerWins = 0;
        ties = 0;
    

        // INPUT WINNER

        let gameResult = document.createElement('p');
        gameResult.style.backgroundColor = 'blue';
        gameResult.style.color = 'white'
        gameResult.textContent = finalResult;
        document.getElementById('results').appendChild(gameResult);

    }
}


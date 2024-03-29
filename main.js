/// COMPUTER NEEDS TO CHOOSE BETWEEN ROCK PAPER OR SCISSORS

function getComputerChoice() {
    let random = Math.random();
    let choice;

    if (random >= 0.66) {
        choice = "Rock"
    } else if (random < 0.33) {
        choice = "Paper"
    } else { 
        choice = "Scissors" 
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

  const whatBeatsWhat = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper",
  }

  function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    let result;

    if (playerChoice === computerChoice) {
        result = "This is a tie!";
    } else if (whatBeatsWhat[playerChoice] === computerChoice) {
        result = `You won! ${playerChoice} beats ${computerChoice}!`;
    } else {
        result = `You lost! ${computerChoice} beats ${playerChoice}!`;
    }

    let roundResult = document.createElement('p');
    roundResult.textContent = result;

    // Check who wins and apply different styles
    if (result.includes('won')) {
        roundResult.classList.add('won');
    } else if (result.includes('lost')) {
        roundResult.classList.add('lost');
    } else {
        roundResult.classList.add('tie');
    }

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



    if(humanWins + computerWins + ties == 5 || humanWins == 3 || computerWins == 3 || ties == 2 && (computerWins == 2 || humanWins == 2)) {
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


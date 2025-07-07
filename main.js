playGame();

function playGame() {
  var humanScore = 0;
  var computerScore = 0;
  var round = 0;

  while (round < 5) {
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();

    playRound(humanSelection, computerSelection);
    round++;

    console.log("Round: " + round);
    console.log("Player score: " + humanScore);
    console.log("Computer score: " + computerScore);

    function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        console.log("It's a tie!");
      } else {
        let winCondition = false;
        let message = "";

        // Assigns boolean value to winCondition based on computer answer then assigns a message to display during score change
        switch (humanChoice) {
          case "rock":
            winCondition = computerChoice === "scissors" ? true : false;
            message = assignMessage(winCondition, "rock");
            break;
          case "paper":
            winCondition = computerChoice === "rock" ? true : false;
            message = assignMessage(winCondition, "paper");
            break;
          case "scissors":
            winCondition = computerChoice === "paper" ? true : false;
            message = assignMessage(winCondition, "scissors");
            break;
        }

        changeScore(winCondition, message);
      }
    }
  }

  function changeScore(winCondition, message) {
    console.clear();

    if (winCondition === true) {
      console.log(message);
      humanScore++;
    } else {
      console.log(message);
      computerScore++;
    }
  }

  function assignMessage(winCondition, answer) {
    let message = "";

    switch (answer) {
      case "rock":
        if (winCondition) {
          message = "You won! Rock beats scissors.";
        } else {
          message = "You lost. Paper beats rock.";
        }

        break;
      case "paper":
        if (winCondition) {
          message = "You won! Paper beats rock.";
        } else {
          message = "You lost. Scissors beats paper.";
        }

        break;
      case "scissors":
        if (winCondition) {
          message = "You won! Scissors beats paper.";
        } else {
          message = "You lost. Rock beats scissors.";
        }

        break;
    }

    return message;
  }
}

//#region
function getComputerChoice() {
  let computerResult = "";

  // assigns value based on number between 0-2
  switch (getRandomNumber(3)) {
    case 0:
      computerResult = "Rock";
      break;
    case 1:
      computerResult = "Paper";
      break;
    case 2:
      computerResult = "Scissors";
      break;
    default:
      console.log("Error: Number out of bonds");
      break;
  }

  return computerResult;
}

function getHumanChoice() {
  let humanResult = prompt('Please enter either "Rock", "Paper" or "Scissor".');

  return humanResult;
}

function getRandomNumber(max) {
  let number = Math.floor(Math.random() * max);

  return number;
}
//#endregion

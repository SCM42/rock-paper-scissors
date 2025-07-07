var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice)
    {
        console.log("It's a tie!");
    }
    else {
        let winCondition = false;
        
        switch (humanChoice) {
            case "rock":
                winCondition = computerChoice === "scissors" ? true : false;
                break;
            case "paper":
                winCondition = computerChoice === "rock" ? true : false;
                break;
            case "scissors":
                winCondition = computerChoice === "paper" ? true : false;
                break;
        }

        changeScore(winCondition);
    }
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

playRound(humanSelection, computerSelection);

console.log("Player score: " + humanScore);
console.log("Computer score: " + computerScore);

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

function changeScore(winCondition) {
    if (winCondition === true) {
        console.log("You won!");
        score++;
    }
    else {
        console.log("You lose.")
        computerScore++;
    }
}
//#endregion
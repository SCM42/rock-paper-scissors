console.log(getComputerChoice());
getHumanChoice();

//#region
function getComputerChoice() {
    let computerResult = "";
    
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
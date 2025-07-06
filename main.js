console.log(getComputerChoice());


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
    let humanResult = "";
    
    switch (getRandomNumber(3)) {
        case 0: 
            humanResult = "Rock";
            break;
        case 1:
            humanResult = "Paper";
            break;
        case 2:
            humanResult = "Scissors";
            break;
        default:
            console.log("Error: Number out of bonds");
            break;
    }

    return humanResult;
}

function getRandomNumber(max) {
    let number = Math.floor(Math.random() * max);

    return number;
}
//#endregion
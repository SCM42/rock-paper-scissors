# Rock Paper Scissors Project

## Requirements
Write a JavaScript console game for Rock Paper Scissors. Tasks were as follows...

### Create a getComputerChoice() function that assigns random answer.
- I generated a random number between 0 and 3 (exclusive).
- Switch-case statement then assigns an answer based on the number given.
### Create a getHumanChoice() function that prompts user for answer.
- Did as asked. There is no special exception handling for this as we are instructed to just assume the user input the selection as required.
### Declared and initialize two score variables at 0 for the player and computer.
- Created two variables, humanScore and computerScore. Set both at 0.
### Write the gameplay logic for one round.
- Created playRound() function that accepts both the user and computer's answer. Both are converted to lower case when given as an argument.
- Answers are then checked to see if they match and if so, are declared a tie.
- If they do not match, the user's answer is given to a switch statement which then checks to see if there is a win condition based on the computers answer. 
    - Created a winCondition variable. If user wins it is set at true.
    - The assignMessage() function then determines what message to display at the end of the round, depending on the user's answer and if the win condition is true or false.
    - The changeScore() function then displays the message and updates the winner's score by 1.
### Write the game to play through five rounds.
- Not much was changed here other than I had to reorganize my code a little bit to make sure there wasn't any scoping issues and create a new function called playGame().
- Declared a new variable called round that I initialized at 1. I put the playRound() function inside a while loop that iterates while round is less than 6.

## Summary
I was instructed to not waste too much time on styling and additional features and just focus on the tasks given. I have some prior experience already with creating C# console apps so by extension this was not too difficult. This README will most likely be updated when it's time to implement a GUI.
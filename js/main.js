
//---------------------------------------I-N-I-T-A-L-I-Z-I-N-G------------------------------------------------------------------------------
//Initalizing phase
let gameInstruction = [
    // Page 2
    // [0]
    "Pick a number from 01 - 99.",
    // Page 3
    //[1]
    "Add both together to get a new number.",
    // Page 4
    // [2]
    "Subtract your new number from the original number.",
    // Page 5
    // [3]
    // [0]      [1]       [2]      [3]      [4]      [5]      [6]      [7]      [8]      [9]
    ["0 - &", "1 - @", "2 - $", "3 - B", "4 - R", "5 - %", "6 - ^", "7 - &", "8 - *", "9 - #"],
    // Page 6 (Last page)
    // [4]
    ""
];
let hintText = [
    // Page 2
    // [0]
    "when you have your number click next.",
    // Page 3
    // [1]
    "Ex: 14 is 1 + 4 = 5 \n \n click next to proceed.",
    // Page 4
    // [2]
    "Ex: 14 - 5 = 9 \n \n click next to proceed.",
    // Page 5
    //[3]
    "Fine your new number. \n \n Note the symbol beside the number.",
];
//This variable holds all the symbols that the user may get at the end of the game. 
let symbol = ["&", "@", "$", "B", "R", "%", "^", "&", "*", "#"]
// Use variable I to iterate through the indexes of "gameInstruction" & "hintText"
let i = 0;

//--------------------------------------------L-I-S-T-E-N-E-R-S-----------------------------------------------------------------------------
/*
ID: 
    - "instructions" (Text)
    - "next"         (Text)
    - "hint"         (Text)
    - "start"        (Button)
    - "reveal"       (Button)
    - "reset"        (Button)
*/
// Elements:
const instructions = document.getElementById('instruction');
const hint = document.getElementById('hint');

// Button Listeners:

// ID: "next"
const nextButton = document.getElementById('next');
// ID: "start"
const startButton = document.getElementById('start');
// ID: "reset"
const resetButton = document.getElementById('reset');
// ID: "reveal"
const revealButton = document.getElementById('reveal');


// when the user click "Go/play/start" it will start the "startGame" program. 
startButton.addEventListener('click', startGame);
// when the user click  "Next" it will start the "nextCard" program.
nextButton.addEventListener('click', nextCard);
// when the user click "resetGame" it will start the "resetGame" program.
resetButton.addEventListener('click', resetGame);
// when the user click "revealSymbol" it will start the "revealSymbol" program.
revealButton.addEventListener('click', revealSymbol)

//----------------------------------------F-U-N-C-T-I-O-N-S----------------------------------------------------------------------------------


// This will display the first card of the program.
function startGame() {

    instructions.innerHTML = gameInstruction[i];
    hint.innerHTML = hintText[i]
    // This is to show the next button and switch the "startbutton" with the "reset Button"
    nextButton.hidden = false;
    startButton.hidden = true;
    startButton.innerHTML = resetButton.hidden = false;
}
/*
This function goes through the "gameInstructions" & "hintText" array
I added if statements to check the condition of where the array is and
transition the hidden buttons to visible and vice versa. 
*/
function nextCard() {

    // Every time the user clicks the "next" button i will increase. which will cause the indexes to show their value. 

    i++;

    if (i === 3) {
        // IF the programs reaches the index of 3, then next button will be hidden and reveal button will not be hidden. 
        nextButton.hidden = true;
        revealButton.hidden = false;

    }
    // Check if the array as reach the end. 
    if (i < gameInstruction.length - 1) {
        instructions.innerHTML = gameInstruction[i];
        hint.innerHTML = hintText[i]



    }
}
// This function will randomly pick the symbol on the last page. The last function that should run. 
function revealSymbol() {

    /* Definitions:
            - Math.floor: Function returns the largest integer less than or equal to a given number. 
            - Math.random: Function returns a floating-point, pseudo-random number in the range 0 to less than 1 
                           (inclusive of 0, but not 1) with approximately uniform distribution over that range - which 
                            you can then scale to your desire range. 
    */

    let randomValue = Math.floor(Math.random() * gameInstruction.length);



    gameInstruction[4] = symbol[randomValue];


    // Gets ride of the reveal button. Should be at the end of the game. 

    revealButton.hidden = true;
    // This should should show the symbol that the user gets.
    console.log(randomValue);
    instructions.innerHTML = gameInstruction[4];
    hint.innerHTML = "Your symbol is: " + gameInstruction[4];

}
// Refreshes the page. 
function resetGame() {
    location.reload();
}
















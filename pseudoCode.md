
# Mind Reader pseudo Code.

## Objective: 

The user will be able to play a game that the program will attempt to read their mind.


## Steps: 

    START: 
    
    1. The user opens the App.[Start] "Go" (Button)
    2. Program tells the user to pick a number 01-99 (In head 1)
    3. The user hits "Next" (Button)
    4. Program tells the user to add their number together
       Ex. User: 14 (1+4 = 5)
    5. The user hits "next"(Button)
    6. Program tells the user to subtract the new number (from step:4) from the original number. 
    7. The user hits "Next" (Button)
    8. Program will show the number correspond with symbol
    9. User hits "Reveal" button
    10. Program shows the user the predicted symbol. 
    11. User hits "reset" (Button) and will send user back to "step 1"
    
    END. 


## Events: 
    - User hits "Go": Transition to slide 2 (Array 1) (Start of the program).
    - User hits "Next": Transition to the next slide
    - User hits "Reset": Transition back to the beginning (Step 1)
    - User hits "Reveal": Show the user their symbol.

## Objects:
     HTML/CSS
    - 4 Buttons ("Go/Start", "Next", "Reset", "Reveal)
    - 1 Bootstap card
    - 2 Text (h1/p)

     JS
    - 3 Arrays 
    - 1 Integer

## Function (Not in order): 
    
    ```
    function startGame():
        IF: Start button is clicked THEN
            INCREMENT: value of "i"
            Display: 2nd card. 
    ```
    ```
    function nextCard():
        IF: Next button is clicked THEN
        INCREMENT: value of "i"
        Display: next card.

    ```
    ```
    function revealSymbol():
        IF: "i" is at the end of the array THEN
        DISPLAY: "Reveal Button"
        CALCULATE: Random value to get Which index should be selected in Symbol Array. 
        DISPLAY: The symbol
    ```

    ```
    function resetGame():
        IF: Reset Button is clicked THEN
            Refresh the page.
    ```


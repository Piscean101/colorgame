const help = `
Player (You) is the blue hand | Opponent (CPU) is the pink hand
Maximum hand size is 7 cards

Choose up to 2 of your cards to add to the stage. Then choose "BATTLE!" to reveal your opponent's stage and calculate the results. You may draw an additional card for your turn instead of contesting the stage.

Each card has a point value and color value. Each of the 5 colors counters another color, reducing the points both players recieves from card(s) of that color to 0 for the round. 
Red > Blue > Green > Yellow > Purple > Red

Black cards cannot counter or be countered by other colors. 

If a card was not countered, its player wins those points.

example: 

(3,Blue) VS (1,Blue) (2,Red) = +0 VS +2

(1,Green) (1,Green) VS (1,Yellow) (5,Red) = +2 VS +5

THE FIRST PLAYER TO 50 POINTS WINS!

`;

export { help };
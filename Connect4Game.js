// console.log("Connected!")
const p1 = prompt("Player 1 enter your name, you will be blue");
const p2 = prompt("Player 2 enter your name, you will be red");

$('h3').text(p1+": it is your turn, please pick a column to drop your blue chip.");

//function to change cell color after picking column
//grab all cells
let cells = $('td');


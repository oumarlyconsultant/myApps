// console.log("Connected!")
const p1 = prompt("Player 1 enter your name, you will be blue");
const p2 = prompt("Player 2 enter your name, you will be red");

$('h3').text(p1+": it is your turn, please pick a column to drop your blue chip.");

//function turnBlue
function turnBlue(){
    this.toggleClass("turnBlue");
}
//function turnRed
function turnRed(){
    this.toggleClass("turnRed");
}

$('#cell')

let who_play = 1;

//change color of last chip based on who plays
function play(l,k){
    if (k % 2 == 0){
        this.toggleClass("turnRed");

    }else{
        this.toggleClass("turnBlue");
    }
}
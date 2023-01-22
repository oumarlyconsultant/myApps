/* instructions
1- create alert for player instructions - get their names
2- collect all elements of the table - column-wise
3- create change color function
4- for a click on a cell of a column, change most bottom cell color
  - check for most bottom cell
5- create function to check for win
*/

// console.log("Connected!")
//1- create alert for player instructions - get their names
// const p1 = prompt("Player 1 enter your name, you will be blue");
// const p2 = prompt("Player 2 enter your name, you will be red");

//set player color
const color1 = 'rgb(68, 95, 214)';
const color2 = 'rgb(214, 68, 68)';

//2- collect all elements of the table - column-wise
let col = [[],[],[],[],[],[],[]];

for(j=0;j<7;j++){
  for(i=0;i<6;i++){
    col[j].push($('.board').find('tr').eq(i).find('.dot').eq(j))
  }
}

//3- create change color function
function changeColor(colIndex,rowIndex,colorVar){
  col[colIndex][rowIndex].css('background-color',colorVar)
}

//4- for a click on a cell of a column, change most bottom cell color
//check bottom most bottom cell and return index
function bottomCell(colIndex,rowIndex){
  let c = colIndex;
  let r = rowIndex;
  for(i=rowIndex;i<6;i++){
    if(i==0) r = 0;
    else{
      if(col[colIndex][i].css('background-color')==color1 || col[colIndex][i].css('background-color')==color2){
        r = i-1;
      }
    }
  }
  return([c,r])
}

//get the element that was clicked
// let clked = "";
// $('.board').on("click",function (event) {
//   clked = event.target;
// });
let c = 0;
let r = 0;

for(j=0;j<7;j++){
  for(i=0;i<6;i++){
    if (col[j][i].click()){
      c = j;
      r = i;
    }
    }
  }

console.log([c,r]);









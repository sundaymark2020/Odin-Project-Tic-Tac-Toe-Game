
const cells = document.querySelectorAll('.cells');
const resetBtn = document.querySelector('.reset');
//conditions for winning the game//
const winningconditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//each empty array represent each ell//

let board = ['','','','','','','','',''];
let playerOne = 'X';
let playerTwo  = 'O';
let currentTurn = playerOne;

cells.forEach((cell, index) => {
    cell.addEventListener('click',() =>{
        board[index] = currentTurn
        if(currentTurn == playerOne){

        }

    })

    
})





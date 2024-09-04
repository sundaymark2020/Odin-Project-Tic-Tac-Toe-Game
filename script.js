// Select all elements with the class 'cell' and store them in the 'cells' variable.
const cells = document.querySelectorAll(".cell");

// Select the reset button element with the class 'reset'.
const resetBtn = document.querySelector(".reset");

// Array of winning conditions for the game (all possible winning combinations).
const winningconditions = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal from top-left to bottom-right
  [2, 4, 6], // Diagonal from top-right to bottom-left
];

// Initialize an empty board array to represent the game state.
let board = ["", "", "", "", "", "", "", "", ""];

// Define player symbols.
let playerOne = "X";
let playerTwo = "O";

// Set the current turn to playerOne initially.
let currentTurn = playerOne;

// Function to disable all cells, effectively ending the game.
const endGame = () => {
  cells.forEach((cell) => {
    cell.setAttribute("disabled", true);
  });
};

// Function to check if there is a winner.
function checkWinner() {
  // Loop through each winning condition.
  winningconditions.forEach((winningRow) => {
    const [first, second, third] = winningRow; // Destructure the winning row indices.
    const boardRow = [board[first], board[second], board[third]]; // Get the board values at the winning indices.
    
    // Check if all cells in the winning row belong to playerOne.
    const isPlayerOneWinner = boardRow.every((cell) => cell == playerOne);
    
    // Check if all cells in the winning row belong to playerTwo.
    const isPlayerTwoWinner = boardRow.every((cell) => cell == playerTwo);
    
    // Select the element to display the winner.
    const winner = document.body.querySelector(".winner");
    
    // If playerOne wins, display the message and end the game.
    if (isPlayerOneWinner) {
      winner.innerText = "playerOne is the winner";
      endGame();
    } 
    // If playerTwo wins, display the message and end the game.
    else if (isPlayerTwoWinner) {
      winner.innerText = "playerTwo is the winner";
      endGame();
    }
  });
}

function checkTie(){
  const winner = document.body.querySelector(".winner");
  const isBoadFull = board.every((cell)=> cell !== '' )
  if (isBoadFull && winner.innerText == '') {
  winner.innerText = 'it a tie no winner';

  endGame()
  }

}

// Add a click event listener to each cell.
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if(board[index] !== ''){
      return
    }
    // Update the board state with the current player's symbol.
    board[index] = currentTurn;
    
    // Display the current player's symbol in the clicked cell.
    cell.innerText = currentTurn;
    
    // Check for a winner after each move.
    checkWinner();

    checkTie();

    //check for tie//
    // Switch turns between players.
    if (currentTurn == playerOne) {
      currentTurn = playerTwo;
    } else {
      currentTurn = playerOne;
    }
  });
});



// Function to reset the game state.
const resetGame = () => {
  // Clear the board array.
  board = ["", "", "", "", "", "", "", "", ""];
  
  // Clear the contents of each cell and re-enable them.
  cells.forEach((cell) => {
    cell.innerText = "";
    cell.removeAttribute("disabled");
  });
  
  // Reset the current turn to playerOne.
  currentTurn = playerOne;
  
  // Clear the winner message.
  const winner = document.body.querySelector(".winner");
  winner.innerText = "";
};

// Add a click event listener to the reset button to reset the game.
resetBtn.addEventListener("click", resetGame);


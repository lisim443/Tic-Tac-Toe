const gameStatus = document.querySelector(".status");
const gameMessage = document.querySelector(".game-message");

let currentPlayer = "X";

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const drawMessage = "It's a draw!";
const winMessage = "Player " + currentPlayer + " has won!";

const cells = document.querySelectorAll(".cell");

function changePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

cells.forEach(function (cell) {
  cell.onclick = function () {
    cell.textContent = currentPlayer;
    changePlayer();
  };
});

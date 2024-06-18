let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');

function placeMarker(cellIndex) {
    if (gameActive && board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        cells[cellIndex].innerText = currentPlayer;
        
        if (checkWin(currentPlayer)) {
            statusDisplay.innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
            return;
        }
        
        if (isBoardFull()) {
            statusDisplay.innerText = "It's a draw!";
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusDisplay.innerText = `Player ${currentPlayer}'s turn`;
    }
}

function checkWin(player) {
    return winCombinations.some(combination => {
        return combination.every(index => {
            return board[index] === player;
        });
    });
}

function isBoardFull() {
    return board.every(cell => cell !== '');
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    statusDisplay.innerText = `Player ${currentPlayer}'s turn`;

    cells.forEach(cell => {
        cell.innerText = '';
    });
}

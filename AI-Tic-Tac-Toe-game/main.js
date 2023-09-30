document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById("game-board");
    const message = document.getElementById("message");
    const restartButton = document.getElementById("restart-button");

    let currentPlayer = "X";
    let board = ["", "", "", "", "", "", "", "", ""];
    let gameActive = true;

    function checkWin() {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                gameActive = false;
                message.textContent = `${currentPlayer} wins!`;
                return;
            }
        }

        if (!board.includes("")) {
            gameActive = false;
            message.textContent = "It's a draw!";
        }
    }

    function handleClick(index) {
        if (board[index] === "" && gameActive) {
            board[index] = currentPlayer;
            renderBoard();
            checkWin();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }

    function renderBoard() {
        gameBoard.innerHTML = "";
        board.forEach((cell, index) => {
            const cellElement = document.createElement("div");
            cellElement.classList.add("game-cell");
            cellElement.textContent = cell;
            cellElement.addEventListener("click", () => handleClick(index));
            gameBoard.appendChild(cellElement);
        });
    }

    renderBoard();

    restartButton.addEventListener("click", () => {
        board = ["", "", "", "", "", "", "", "", ""];
        gameActive = true;
        message.textContent = "";
        currentPlayer = "X";
        renderBoard();
    });
});

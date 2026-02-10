const board = document.getElementById("board");

const pieces = {
  r: "♜", n: "♞", b: "♝", q: "♛", k: "♚", p: "♟",
  R: "♖", N: "♘", B: "♗", Q: "♕", K: "♔", P: "♙"
};

const initialBoard = [
  "rnbqkbnr",
  "pppppppp",
  "........",
  "........",
  "........",
  "........",
  "PPPPPPPP",
  "RNBQKBNR"
];

function drawBoard() {
  board.innerHTML = "";
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const square = document.createElement("div");
      square.className = "square " + ((x + y) % 2 === 0 ? "white" : "black");

      const piece = initialBoard[y][x];
      if (piece !== ".") {
        square.textContent = pieces[piece];
      }

      board.appendChild(square);
    }
  }
}

drawBoard();

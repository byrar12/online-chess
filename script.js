const board = document.getElementById("board");

const pieces = [
  "♜","♞","♝","♛","♚","♝","♞","♜",
  "♟","♟","♟","♟","♟","♟","♟","♟",
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  "♙","♙","♙","♙","♙","♙","♙","♙",
  "♖","♘","♗","♕","♔","♗","♘","♖"
];

for (let i = 0; i < 64; i++) {
  const square = document.createElement("div");
  square.className = "square " + ((Math.floor(i / 8) + i) % 2 === 0 ? "white" : "black");
  square.textContent = pieces[i];
  board.appendChild(square);
}

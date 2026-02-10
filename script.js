const board = document.getElementById("board");
const statusText = document.getElementById("status");
const createBtn = document.getElementById("createRoom");
const joinBtn = document.getElementById("joinRoom");
const roomInput = document.getElementById("roomInput");

let roomCode = null;
let role = null;

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

function drawBoard() {
  board.innerHTML = "";
  for (let i = 0; i < 64; i++) {
    const sq = document.createElement("div");
    sq.className = "square " + ((Math.floor(i/8)+i)%2 ? "black":"white");
    sq.textContent = pieces[i];
    board.appendChild(sq);
  }
}

createBtn.onclick = () => {
  roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
  role = "white";
  statusText.textContent = `방 코드: ${roomCode} (상대 대기 중)`;
};

joinBtn.onclick = () => {
  if (!roomInput.value) return alert("방 코드를 입력하세요");
  roomCode = roomInput.value.toUpperCase();
  role = "black";
  statusText.textContent = `방 참가 완료 (흑)`;
};

drawBoard();

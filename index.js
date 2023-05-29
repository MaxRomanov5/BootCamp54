const table = document.querySelector(".game");
let player = "o";
const playerName = document.querySelector(".gamePlayer");
const squares = [...document.querySelectorAll("td")];

table.addEventListener("click", fieldChange);

function fieldChange(evt) {
  if (evt.target.nodeName !== "TD") {
    return;
  }
  if (evt.target.textContent === "") {
    evt.target.textContent = player;
    console.log(evt.target.textContent);
    player === "o" ? (player = "x") : (player = "o");
    playerName.textContent = `Current Move: ${player}`;
  }
  //   evt.target.textContent = player;

  //   player === "o" ? (player = "x") : (player = "o");
  //   playerName.textContent = `Current Move: ${player}`;
  checkResults();
}

function checkResults() {
  if (
    squares[0].textContent === squares[1].textContent &&
    squares[1].textContent === squares[2].textContent &&
    squares[1].textContent !== ""
  ) {
    winner(squares[1].textContent);
  }
  if (
    squares[3].textContent === squares[4].textContent &&
    squares[4].textContent === squares[5].textContent &&
    squares[3].textContent !== ""
  ) {
    winner(squares[3].textContent);
  }
  if (
    squares[6].textContent === squares[7].textContent &&
    squares[7].textContent === squares[8].textContent &&
    squares[8].textContent !== ""
  ) {
    winner(squares[8].textContent);
  }
  if (
    squares[0].textContent === squares[3].textContent &&
    squares[3].textContent === squares[6].textContent &&
    squares[6].textContent !== ""
  ) {
    winner(squares[6].textContent);
  }
  if (
    squares[1].textContent === squares[4].textContent &&
    squares[4].textContent === squares[7].textContent &&
    squares[1].textContent !== ""
  ) {
    winner(squares[1].textContent);
  }
  if (
    squares[2].textContent === squares[5].textContent &&
    squares[5].textContent === squares[8].textContent &&
    squares[8].textContent !== ""
  ) {
    winner(squares[8].textContent);
  }
  if (
    squares[0].textContent === squares[4].textContent &&
    squares[4].textContent === squares[8].textContent &&
    squares[0].textContent !== ""
  ) {
    winner(squares[0].textContent);
  }
  if (
    squares[2].textContent === squares[4].textContent &&
    squares[4].textContent === squares[6].textContent &&
    squares[6].textContent !== ""
  ) {
    winner(squares[6].textContent);
  }
}

function winner(xo) {
  console.log(`${xo} wins`);
  squares.map((square) => (square.textContent = ""));
}

let counter = 0;

function counterActivate() {
  counter += 1;
  if (counter >= 9) {
    counter = 0;
    squares.map((square) => (square.textContent = ""));
    console.log("nobody wins, try again!");
  }
}
table.addEventListener("click", counterActivate);

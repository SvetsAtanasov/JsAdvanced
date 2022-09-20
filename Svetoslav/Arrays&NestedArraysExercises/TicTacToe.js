function solve(moves) {
  const instantiateBoard = () => {
    const board = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ];

    return board;
  };

  const printBoard = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i].join("\t"));
    }
  };

  const checkWin = (board) => {
    const diagonalLeft = 0;
    const diagonalRight = board.length - 1;
    let playerWins = "";

    for (let i = 0; i < board.length; i++) {
      const col = board[i];

      if ((col[i] && col[i + 1]) === "O") {
        playerWins = "O";
      } else {
        playerWins = "";
        break;
      }
    }

    return playerWins;
  };

  let board = instantiateBoard();

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    const coordinates = move.split(" ");
    const x = coordinates[0];
    const y = coordinates[1];

    if (i % 2 === 0) {
      board[x][y] = "X";

      if (checkWin(board) === "X") {
        console.log(`Player X wins!`);
        break;
      }
    } else {
      board[x][y] = "O";

      if (checkWin(board) === "O") {
        console.log(`Player O wins!`);
        break;
      }
    }
  }

  printBoard(board);
}

solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);

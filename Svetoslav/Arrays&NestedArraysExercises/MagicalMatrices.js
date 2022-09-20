function solve(matrix) {
  const sum = matrix[0].reduce((prev, curr) => prev + curr);
  let isMagical = false;
  let rowSum = 0;
  let colSum = 0;

  for (let i = 0; i < matrix.length; i++) {
    const col = matrix[i];
    rowSum = 0;
    colSum = 0;

    for (let j = 0; j < col.length; j++) {
      const row = col[j];
      rowSum += row;
    }

    for (let k = 0; k < matrix.length; k++) {
      const col = matrix[k][i];
      colSum += col;
    }

    if (sum === rowSum && sum === colSum) {
      isMagical = true;
    } else {
      isMagical = false;
      break;
    }
  }

  return isMagical;
}

solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);

solve([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);

solve([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);

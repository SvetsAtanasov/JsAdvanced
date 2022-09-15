function solve(array) {
  let start = 0;
  let end = array.length - 1;
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  for (let i = 0; i < array.length; i++) {
    leftDiagonal += array[i][start];
    rightDiagonal += array[i][end];

    start++;
    end -= 1;
  }

  const diagonals = [leftDiagonal, rightDiagonal];

  console.log(diagonals.join(" "));
}

solve([
  [20, 40],
  [10, 60],
]);

solve([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);

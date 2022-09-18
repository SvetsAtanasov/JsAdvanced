function solve(array) {
  let pairs = 0;

  for (let i = 0; i < array.length; i++) {
    const row = array[i];

    for (let j = 0; j < row.length; j++) {
      const col = row[j];

      if (i !== array.length - 1) {
        if (col === row[j + 1]) pairs++;
        if (col === array[i + 1][j]) pairs++;
      } else if (col === row[j + 1] || col === array[i][j + 1]) pairs++;
    }
  }

  return pairs;
}

solve([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);

solve([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);

solve([
  [2, 2, 5, 7, 4],
  [4, 0, 5, 3, 4],
  [2, 5, 5, 4, 2],
]);

solve([[2, 2, 2, 2]]);

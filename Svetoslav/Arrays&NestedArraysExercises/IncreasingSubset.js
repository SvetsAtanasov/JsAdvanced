function solve(array) {
  let currentBiggest = 0;
  let subset = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (currentBiggest <= element) {
      currentBiggest = element;
      subset.push(currentBiggest);
    }
  }

  return subset;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);

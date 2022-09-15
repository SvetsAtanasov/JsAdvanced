function solve(array) {
  const newArr = array
    .filter((x, idx) => idx % 2 === 1)
    .map((x) => x * 2)
    .reverse();

  return newArr;
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);

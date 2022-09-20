function solve(array, number) {
  const everyNthElement = array.filter((x, idx) => idx % number === 0);

  return everyNthElement;
}

solve(["5", "20", "31", "4", "20"], 2);

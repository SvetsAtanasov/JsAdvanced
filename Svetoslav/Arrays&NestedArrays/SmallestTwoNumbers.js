function solve(array) {
  array.sort((a, b) => a - b);
  const smallestNums = [array[0], array[1]];

  console.log(smallestNums.join(" "));
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);

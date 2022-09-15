function solve(array) {
  array.sort((a, b) => a - b);

  const half = array.length / 2;
  const bigger = array.length % 2 === 1 ? Math.floor(half) : half;
  const biggerHalf = array.slice(bigger, array.length);

  return biggerHalf;
}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);

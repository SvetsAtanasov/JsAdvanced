function solve(array) {
  const firstIndex = Number(array[0]);
  const lastIndex = Number(array[array.length - 1]);
  const sum = firstIndex + lastIndex;

  return sum;
}

solve(["20", "30", "40"]);

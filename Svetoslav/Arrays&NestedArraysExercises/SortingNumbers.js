function solve(numbers) {
  let insertIndex = 1;
  numbers.sort((a, b) => a - b);

  for (let i = 0; i < numbers.length; i++) {
    const temp = numbers.pop();
    numbers.splice(insertIndex, 0, temp);
    insertIndex += 2;
  }

  return numbers;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

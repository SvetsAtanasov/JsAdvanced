function solve(array, rotations) {
  const start = 0;
  const end = array.length - 1;

  for (let i = 0; i < rotations; i++) {
    const element = array.pop();
    array.unshift(element);
  }

  console.log(array.join(' '));
}

solve(["1", "2", "3", "4"], 2);
solve(["Banana", "Orange", "Coconut", "Apple"], 15);

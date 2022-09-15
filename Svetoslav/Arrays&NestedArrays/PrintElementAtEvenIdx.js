function solve(params) {
  const arrayOfNumbers = [...params];

  const newArrayOfNumbers = arrayOfNumbers.filter((x, idx) => idx % 2 === 0)

  console.log(newArrayOfNumbers.join(' '));
}

solve(["1", "2", "3", "4"]);

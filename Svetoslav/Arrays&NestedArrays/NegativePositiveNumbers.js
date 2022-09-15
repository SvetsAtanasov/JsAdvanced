function solve(array) {
  let numberArr = [];
  array.filter((x) => (x < 0 ? numberArr.unshift(x) : numberArr.push(x)));

  console.log(numberArr.join("\n"));
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);

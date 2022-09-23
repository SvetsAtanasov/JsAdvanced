function solve(x) {
  let numAsString = x.toString();
  let sum = 0;
  const firstDigit = numAsString[0];
  let isSame = true;

  for (let index = 0; index < numAsString.length; index++) {
    if (firstDigit !== numAsString[index]) {
      isSame = false;
    }

    sum += Number(numAsString[index]);
  }

  console.log(isSame);
  console.log(sum);
}

function solve(year, month, day) {
  let initialDate = new Date(year, month - 1, day - 1);

  console.log(
    `${initialDate.getFullYear()}-${
      initialDate.getMonth() + 1
    }-${initialDate.getDate()}`
  );
}

solve(2016, 10, 1);

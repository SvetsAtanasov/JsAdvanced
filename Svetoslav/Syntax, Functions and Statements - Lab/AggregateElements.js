function AggregateElements(params) {
  const numbersArray = params;

  const sumNumbers = (numbers) => {
    let sum = 0;

    numbers.forEach((num) => {
      sum += num;
    });

    return sum;
  };

  const sumInverse = (numbers) => {
    let inversedSum = 0;

    numbers.forEach((num) => {
      inversedSum += 1 / num;
    });

    return inversedSum;
  };

  const concat = (numbers) => {
    let numberString = "";

    numbers.forEach((num) => {
      numberString += num;
    });

    return numberString;
  };

  const numberSum = sumNumbers(numbersArray);
  const inversedNumberSum = sumInverse(numbersArray);
  const numberString = concat(numbersArray);

  console.log(numberSum);
  console.log(inversedNumberSum);
  console.log(numberString);
}

AggregateElements([1, 2, 3]);
AggregateElements([2, 4, 8, 16]);

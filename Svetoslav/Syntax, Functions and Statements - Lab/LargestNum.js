function LargestNum(...nums) {
  const numbers = [...nums];
  let firstNum = numbers[0];
  let largestNum = 0;

  for (let i = 1; i < numbers.length; i++) {
    const currNum = numbers[i];

    if (firstNum > currNum) {
      largestNum = firstNum;
    } else {
      largestNum = currNum;
      firstNum = currNum;
    }
  }

  console.log(`The largest number is ${largestNum}.`);
}

LargestNum(5, -3, 16);
LargestNum(-3, -5, -22.5);

function LargestNum(...nums) {
  const numbers = [...nums];
  const largestNum = Math.max(...numbers);

  console.log(largestNum);
}

LargestNum(5, -3, 16);
LargestNum(-3, -5, -22.5);

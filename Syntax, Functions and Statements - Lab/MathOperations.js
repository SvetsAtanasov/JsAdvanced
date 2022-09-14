function MathOperations(...params) {
  const [a, b, operator] = [...params];
  let result = 0;

  switch (operator) {
    case "+":
      result = a + b;
      break;

    case "-":
      result = a - b;
      break;

    case "*":
      result = a * b;
      break;

    case "/":
      result = a / b;
      break;

    case "%":
      result = a % b;
      break;

    case "**":
      result = a ** b;
      break;
  }

  console.log(result);
}

MathOperations(5, 6, "+");
MathOperations(3, 5.5, "*");

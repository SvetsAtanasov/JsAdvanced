function SumOfNumbers(...params) {
  const [a, b] = [...params];
  let result = 0;

  for (let i = Number(a); i <= b; i++) {
    result += i;
  }

  console.log(result);
}

SumOfNumbers("1", "5");
SumOfNumbers("-8", "20");

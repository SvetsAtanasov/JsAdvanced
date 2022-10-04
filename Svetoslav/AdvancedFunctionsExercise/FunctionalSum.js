function add(num) {
  let sum = num;

  function calc(n) {
    sum += n;
    return calc;
  }

  calc.toString = () => sum;

  return calc;
}

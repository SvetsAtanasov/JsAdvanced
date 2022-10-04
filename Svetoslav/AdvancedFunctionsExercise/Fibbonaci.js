function fib() {
  let n1 = 0,
    n2 = 1,
    nextTerm;

  function calc() {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;

    return n1;
  }

  return calc;
}

let func = fib();

console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());

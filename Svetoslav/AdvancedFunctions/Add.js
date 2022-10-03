function solve(a) {
  let num = a;

  return function add(n) {
    return num + n;
  };
}

let add5 = solve(5);
console.log(add5(2));
console.log(add5(3));

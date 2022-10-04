function calculator() {
  return {
    num1: null,
    num2: null,
    res: null,
    init(selector1, selector2, resultSelector) {
      this.num1 = document.querySelector(selector1);
      this.num2 = document.querySelector(selector2);
      this.res = document.querySelector(resultSelector);
    },
    add() {
      const fNum = Number(this.num1.value);
      const sNum = Number(this.num2.value);

      this.res.value = fNum + sNum;
    },
    subtract() {
        const fNum = Number(this.num1.value);
        const sNum = Number(this.num2.value);
  
        this.res.value = fNum - sNum;
    }
  };
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
console.log(calculate.num1);

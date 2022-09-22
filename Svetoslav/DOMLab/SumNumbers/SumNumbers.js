function calc() {
  const firstNum = document.getElementById("num1").value;
  const secondNum = document.getElementById("num2").value;
  const result = document.getElementById("sum");

  result.value = Number(firstNum) + Number(secondNum);
}

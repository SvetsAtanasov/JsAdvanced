function subtract() {
  const firstInputValue = document.getElementById("firstNumber").value;
  const secondInputValue = document.getElementById("secondNumber").value;

  const result = document.getElementById("result");

  result.textContent = Number(firstInputValue) - Number(secondInputValue);
}

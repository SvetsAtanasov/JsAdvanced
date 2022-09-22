function sumTable() {
  const result = document.getElementById("sum");
  const prices = document.querySelectorAll("tbody tr td");
  let sum = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    const element = prices[i];

    if (i % 2 === 1) {
      sum += Number(element.textContent);
    }
  }

  result.textContent = sum;
}

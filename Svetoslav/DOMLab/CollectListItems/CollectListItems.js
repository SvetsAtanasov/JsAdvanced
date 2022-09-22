function solve() {
  const list = document.querySelectorAll("ul#items li");
  const input = document.querySelector("#result");
  let extractText = "";

  for (const item of list) {
    extractText += item.textContent + " \n";
  }

  input.value = extractText;
}

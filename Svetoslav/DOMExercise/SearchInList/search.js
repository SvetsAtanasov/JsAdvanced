function search() {
  const result = document.getElementById("result");
  const inputField = document.getElementById("searchText");
  const elements = Array.from(document.getElementById("towns").children).filter(
    (x) => x.textContent.match(inputField.value)
  );
  result.textContent = `${elements.length} matches found`;

  for (const element of elements) {
    element.style.cssText = "font-weight: bold; text-decoration: underline";
  }
}

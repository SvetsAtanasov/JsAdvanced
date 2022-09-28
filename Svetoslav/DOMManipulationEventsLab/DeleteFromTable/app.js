function deleteByEmail() {
  const elements = Array.from(document.querySelectorAll("tr"));
  const result = document.getElementById("result");
  const input = document.querySelector("input").value.trim();

  const res = elements.find((x) => x.textContent.match(input));

  if (input === "" || res === undefined) {
    result.textContent = "Not found.";
    return;
  }

  res.remove();
  result.textContent = "Deleted.";
}

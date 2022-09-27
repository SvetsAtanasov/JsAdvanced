function focused() {
  const inputs = Array.from(document.querySelectorAll("input"));

  inputs.map((x) => x.addEventListener("focus", focused) | x.addEventListener("blur", blurred));

  function focused(event) {
    event.target.parentElement.classList.add("focused");
  }

  function blurred(event) {
    event.target.parentElement.classList.remove("focused");
  }
}

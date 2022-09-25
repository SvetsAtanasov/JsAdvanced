function toggle() {
  const button = document.querySelector(".button");
  const extra = document.getElementById("extra");
  let isShown = extra.style.display === "none";

  if (isShown) {
    button.textContent = "Less";
    extra.style.display = "block";
  } else {
    button.textContent = "More";
    extra.style.display = "none";
  }
}

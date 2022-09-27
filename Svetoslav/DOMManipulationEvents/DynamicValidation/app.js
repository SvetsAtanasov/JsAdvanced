function validate() {
  const emailInput = document.getElementById("email");
  emailInput.addEventListener('change', validate);

  function validate() {
    const pattern = new RegExp(/([a-z])*\@([a-z])*\.([a-z]{2,4})*/g);

    emailInput.value.match(pattern) !== null
      ? emailInput.classList.remove("error")
      : emailInput.classList.add("error");
  }
}

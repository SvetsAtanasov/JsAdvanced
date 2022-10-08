function validate() {
  const inputField = document.getElementById("email");

  inputField.addEventListener("change", () => {
    const value = inputField.value;

    if (
      !value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      inputField.classList.add("error");
      return;
    }

    inputField.classList.remove("error");
  });
}

function validate() {
  const submitForm = document.getElementById("submit");
  const library = {
    validateUsername() {
      const usernameField = document.getElementById("username");
      const value = usernameField.value;

      if (!value.match(/^[A-Za-z0-9]{3,20}$/)) {
        usernameField.style.borderColor = "red";
        return false;
      }

      usernameField.style.borderColor = "";
      return true;
    },
    passwordValidation() {
      const passwordField = document.getElementById("password");
      const passwordValue = passwordField.value;
      const confirmPasswordField = document.getElementById("confirm-password");
      const confirmPasswordValue = confirmPasswordField.value;

      if (passwordValue !== confirmPasswordValue) {
        passwordField.style.borderColor = "red";
        confirmPasswordField.style.borderColor = "red";
        return false;
      }

      if (
        (passwordValue.match(/^[\w]{5,15}$/) &&
          confirmPasswordValue.match(/^[\w]{5,15}$/)) === null
      ) {
        passwordField.style.borderColor = "red";
        confirmPasswordField.style.borderColor = "red";
        return false;
      }

      passwordField.style.borderColor = "";
      confirmPasswordField.style.borderColor = "";
      return true;
    },
    validateEmail() {
      const emailField = document.getElementById("email");
      const value = emailField.value;

      if (!value.match(/^[^@.]+@[^@]*\.[^@]*$/)) {
        emailField.style.borderColor = "red";
        return false;
      }

      emailField.style.border = "";
      return true;
    },
    companyNumberValidate() {
      const companyNumberField = document.getElementById("companyNumber");
      const value = companyNumberField.value;

      if (!(value >= 1000 && value <= 9999)) {
        companyNumberField.style.borderColor = "red";
        return false;
      }

      companyNumberField.style.borderColor = "";
      return true;
    },
  };

  isCompanyChecked();
  submitForm.addEventListener("click", validate);

  function validate(e) {
    e.preventDefault();

    const valid = document.getElementById("valid");

    library.validateUsername();
    library.validateEmail();
    library.passwordValidation();
    if (isCompanyChecked()) {
      library.companyNumberValidate();
    }

    if (isCompanyChecked()) {
      if (
        !library.validateUsername() ||
        !library.validateEmail() ||
        !library.passwordValidation() ||
        !library.companyNumberValidate()
      ) {
        valid.style.display = "none";
      } else {
        valid.style.display = "block";
      }
    } else {
      if (
        !library.validateUsername() ||
        !library.validateEmail() ||
        !library.passwordValidation()
      ) {
        valid.style.display = "none";
      } else {
        valid.style.display = "block";
      }
    }
  }

  function isCompanyChecked() {
    const companyCheck = document.getElementById("company");

    companyCheck.addEventListener("change", revealField);

    function revealField() {
      const companyFieldSet = document.getElementById("companyInfo");

      if (!companyCheck.checked) {
        companyFieldSet.style.display = "none";
        return;
      }

      companyFieldSet.style.display = "block";
    }

    return companyCheck.checked;
  }
}

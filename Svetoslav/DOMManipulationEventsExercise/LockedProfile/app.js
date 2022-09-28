function lockedProfile() {
  const btns = Array.from(document.querySelectorAll("button"));

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const parentChildren = Array.from(e.target.parentElement.children);
      const contentToShow = parentChildren.find((x) => x.tagName === "DIV");
      console.log(contentToShow);
      const isUnlocked = parentChildren.find(
        (x) => x.value === "unlock"
      ).checked;

      if (isUnlocked) {
        if (contentToShow.style.display === "") {
          contentToShow.style.display = "block";
          btn.textContent = "Hide it";
          return;
        }

        contentToShow.style.display = "";
        btn.textContent = "Show more";

        return;
      }

      btn.setAttribute("disabled", true);
    });
  });
}

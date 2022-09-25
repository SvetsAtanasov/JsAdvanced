function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const searchField = document.getElementById("searchField").value;
    const rows = Array.from(document.querySelectorAll("tbody tr td"));
    const filtered =
      searchField !== ""
        ? rows
            .filter((x) => x.textContent.match(searchField))
            .map((x) => {
              x.parentElement.classList.add("select");
            })
        : [];
  }
}

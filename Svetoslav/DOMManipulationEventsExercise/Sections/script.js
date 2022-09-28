function create(words) {
  const content = document.getElementById("content");
  const strings = [...words];

  strings.forEach((word) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = word;
    p.style.display = "none";

    div.appendChild(p);
    content.appendChild(div);

    div.addEventListener("click", () => {
      div.firstElementChild.style.display = "block";
    });
  });
}

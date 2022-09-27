function addItem() {
  const input = document.getElementById("newItemText").value;
  const list = document.getElementById("items");

  const li = document.createElement("li");
  li.textContent = input;

  const link = document.createElement("a");
  link.textContent = "[Delete]";
  link.href = "#";
  link.addEventListener("click", deleteElement);

  li.appendChild(link);

  if (input === "") return;
  list.appendChild(li);

  function deleteElement(event) {
    event.target.parentElement.remove();
  }
}

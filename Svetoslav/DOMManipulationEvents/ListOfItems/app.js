function addItem() {
  const list = document.getElementById("items");
  const inputs = document.getElementsByTagName("input");
  const inputText = inputs[0].value;
  
  list.innerHTML += `<li>${inputText}</li>`;
}

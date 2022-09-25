function generateReport() {
  const textArea = document.getElementById("output");
  const inputs = Array.from(document.querySelectorAll("input"));
  const rows = Array.from(document.querySelectorAll("tbody > tr"));
  const json = [];

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const inputText = input.parentElement.textContent;
    const isChecked = input.checked;
    const prop = inputText.charAt(0).toLowerCase() + inputText.slice(1).trimEnd();

    if (isChecked) {
      for (let j = 0; j < rows.length; j++) {
        const row = rows[j].children[i].textContent;
        const obj = {};
        obj[prop] = row;

        if (json.find((x, idx) => idx === j) !== undefined) {
          const newObj = json.find((x, idx) => idx === j);
          newObj[prop] = row;
          json[j] = newObj;
        } else {
          json.push(obj);
        }
      }
    }
  }

  textArea.value = JSON.stringify(json);
}

function solve() {
  const textAreas = document.querySelectorAll("textarea");
  const inputArea = textAreas[0];
  const resultArea = textAreas[1];

  const buttons = document.querySelectorAll("button");
  const generateBtn = buttons[0];
  const buyBtn = buttons[1];

  generateBtn.addEventListener("click", generateProducts);
  buyBtn.addEventListener("click", buy);

  function generateProducts() {
    const objects = JSON.parse(inputArea.value);
    const tBody = document.querySelector("tbody");

    for (const obj of objects) {
      const tr = document.createElement("tr");

      for (const key of Object.keys(obj)) {
        const td = document.createElement("td");

        if (key === "img") {
          const img = document.createElement("img");
          img.src = obj[key];
          td.appendChild(img);
          tr.insertBefore(td, tr.firstElementChild);
        } else {
          const p = document.createElement("p");
          p.textContent = obj[key];
          td.appendChild(p);
          tr.appendChild(td);
        }
      }

      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      const td = document.createElement("td");
      td.appendChild(checkBox);
      tr.appendChild(td);

      tBody.appendChild(tr);
    }
  }

  function buy() {
    const furniture = Array.from(document.querySelectorAll("tbody > tr"));
    const th = Array.from(document.querySelectorAll("th"));
    const values = th.slice(1, th.length - 1);

    const receipt = {
      items: [],
      totalPrice: 0,
      avgFactor: 0,
    };

    for (const furnitureItem of furniture) {
      const furnitureItems = Array.from(furnitureItem.children).slice(
        1,
        furnitureItem.children.length - 1
      );
      const isChecked =
        furnitureItem.children[4].firstElementChild.checked === true
          ? true
          : false;

      for (let i = 0; i < furnitureItems.length; i++) {
        const itemValue = furnitureItems[i].textContent;

        if (isChecked) {
          if (values[i].textContent === "Name") {
            receipt.items.push(itemValue.trim());
          } else if (values[i].textContent === "Price") {
            receipt.totalPrice += Number(itemValue);
          } else {
            receipt.avgFactor += Number(itemValue);
          }
        }
      }
    }

    resultArea.value += `Bought furniture: ${receipt.items.join(", ")}\n`;
    resultArea.value += `Total price: ${receipt.totalPrice.toFixed(2)}\n`;
    resultArea.value += `Average decoration factor: ${
      receipt.avgFactor / receipt.items.length
    }`;
  }
}

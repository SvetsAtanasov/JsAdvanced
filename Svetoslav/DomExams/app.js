window.addEventListener("load", solve);

function solve() {
  const strong = document.getElementById("profit");
  const publish = document.getElementById("publish");
  let make = document.getElementById("make");
  let model = document.getElementById("model");
  let year = document.getElementById("year");
  let fuel = document.getElementById("fuel");
  let sellingPrice = document.getElementById("selling-price");
  let originalCost = document.getElementById("original-cost");

  publish.addEventListener("click", publishOffer);

  function publishOffer(e) {
    e.preventDefault();

    const tBody = document.querySelector("tbody");

    if (
      make.value === "" ||
      model.value === "" ||
      year.value === "" ||
      fuel.value === "" ||
      originalCost.value === "" ||
      sellingPrice.value === "" ||
      Number(originalCost.value) > Number(sellingPrice.value)
    ) {
      return;
    }

    const vals = [make, model, year, fuel, originalCost, sellingPrice];
    const tr = document.createElement("tr");
    tr.className = "row";

    tBody.appendChild(tr);

    vals.forEach((val) => {
      const td = document.createElement("td");
      td.textContent = val.value;
      tr.appendChild(td);
      val.value = "";
    });

    const editBtn = document.createElement("button");
    editBtn.addEventListener("click", edit);
    editBtn.className = "action-btn edit";
    editBtn.textContent = "Edit";

    const sellBtn = document.createElement("button");
    sellBtn.addEventListener("click", sell);
    sellBtn.className = "action-btn sell";
    sellBtn.textContent = "Sell";

    const td = document.createElement("td");
    td.appendChild(editBtn);
    td.appendChild(sellBtn);
    tr.appendChild(td);
  }

  function edit(e) {
    const tr = e.target.parentElement.parentElement;
    const vals = [make, model, year, fuel, originalCost, sellingPrice];

    vals.forEach((x, idx) => {
      x.value = Array.from(tr.children)[idx].textContent;
    });

    tr.remove();
  }

  function sell(e) {
    const ul = document.getElementById("cars-list");
    const tr = e.target.parentElement.parentElement;
    const [make, model, year, petrol, originalCost, sellingPrice] = Array.from(
      tr.children
    );
    console.log(originalCost.textContent);
    const li = document.createElement("li");
    li.className = "each-list";
    const carModelSpan = document.createElement("span");
    carModelSpan.textContent = make.textContent + " " + model.textContent;
    const yearSpan = document.createElement("span");
    yearSpan.textContent = year.textContent;
    const profitSpan = document.createElement("span");
    profitSpan.textContent =
      Number(sellingPrice.textContent) - Number(originalCost.textContent);

    li.appendChild(carModelSpan);
    li.appendChild(yearSpan);
    li.appendChild(profitSpan);
    ul.appendChild(li);

    const profit = Number(strong.textContent) + Number(profitSpan.textContent);

    strong.textContent = profit.toFixed(2);
    tr.remove();
  }
}

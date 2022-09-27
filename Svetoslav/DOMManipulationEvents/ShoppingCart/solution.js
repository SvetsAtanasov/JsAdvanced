function solve() {
  const checkoutBtn = document.querySelector(".checkout");
  const textArea = document.querySelector("textarea");
  const products = Array.from(document.querySelectorAll(".product"));
  const addBtns = Array.from(document.querySelectorAll(".add-product"));
  const basket = [];

  checkoutBtn.addEventListener("click", checkout);
  addBtns.map((x) => x.addEventListener("click", add));

  function checkout() {
    checkoutBtn.setAttribute("disabled", true);
    addBtns.map((x) => x.setAttribute("disabled", true));

    let initialValue = 0;
    basket.forEach(
      (x) =>
        (initialValue += Number(x.productPrice) * Number(x.productQuantity))
    );

    const products = [];
    basket.forEach((x) => products.push(x.productName));

    textArea.value += `You bought ${products.join(
      ", "
    )} for ${initialValue.toFixed(2)}.`;
  }

  function add(event) {
    const res = products.filter(
      (x) => x === event.target.parentElement.parentElement
    );

    const productName = res[0].children[1].firstElementChild.textContent;
    const productPrice = Number(res[0].children[3].textContent).toFixed(2);
    const obj = { productName, productPrice: 0, productQuantity: 1 };
    obj.productPrice = productPrice;

    textArea.value += `Added ${productName} for ${productPrice} to the cart.\n`;

    if (basket.some((x) => x.productName === productName)) {
      basket.find((x) => x.productName === productName).productQuantity++;
      return;
    }

    basket.push(obj);
  }
}

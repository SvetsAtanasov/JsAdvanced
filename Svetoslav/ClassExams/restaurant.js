class Restaurant {
  constructor(budget) {
    this.budgetMoney = budget;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(productsToBuy) {
    productsToBuy.forEach((productToBuy) => {
      let productName = "";

      if (productToBuy.split(" ").length > 3) {
        let [
          productNameFirstHalf,
          productNameSecondHalf,
          productQuantity,
          productTotalPrice,
        ] = productToBuy.split(" ");
        productName = productNameFirstHalf + " " + productNameSecondHalf;
        productQuantity = Number(productQuantity);
        productTotalPrice = Number(productTotalPrice);
      }

      let [productNameFirstHalf, productQuantity, productTotalPrice] =
        productToBuy.split(" ");
      productName = productNameFirstHalf;
      productQuantity = Number(productQuantity);
      productTotalPrice = Number(productTotalPrice);

      if (productTotalPrice > this.budgetMoney) {
        this.history.push(
          `There was not enough money to load ${productQuantity} ${productName}`
        );

        return;
      }

      if (this.stockProducts[productName] !== undefined) {
        this.stockProducts[productName].productQuantity += productQuantity;
        this.budgetMoney -= productTotalPrice;

        this.history.push(
          `Successfully loaded ${productQuantity} ${productName}`
        );
        return;
      }

      this.stockProducts[productName] = { productQuantity, productTotalPrice };
      this.budgetMoney -= productTotalPrice;

      this.history.push(
        `Successfully loaded ${productQuantity} ${productName}`
      );
    });

    return this.history.join("\n");
  }

  addToMenu(meal, neededProducts, price) {
    if (this.menu[meal] !== undefined) {
      return `The ${meal} is already in the our menu, try something different.`;
    } else {
      this.menu[meal] = {
        products: neededProducts.map((neededProduct) => {
          let productName = "";

          if (neededProduct.split(" ").length > 2) {
            let [productNameFirstHalf, productNameSecondHalf, productQuantity] =
              neededProduct.split(" ");
            productName = productNameFirstHalf + " " + productNameSecondHalf;
            productQuantity = Number(productQuantity);
          }

          let [productNameFirstHalf, productQuantity] =
            neededProduct.split(" ");
          productName = productNameFirstHalf;
          productQuantity = Number(productQuantity);

          return { productName, productQuantity };
        }),
        price: Number(price),
      };

      if (Object.keys(this.menu).length === 1) {
        return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
      } else if (
        Object.keys(this.menu).length === 0 ||
        Object.keys(this.menu).length >= 2
      ) {
        return `Great idea! Now with the ${meal} we have ${
          Object.keys(this.menu).length
        } meals in the menu, other ideas?`;
      }
    }
  }

  showMenu() {
    const meals = [];

    for (const [key, value] of Object.entries(this.menu)) {
      meals.push(`${key} - $ ${value.price}`);
    }

    if (Object.keys(this.menu).length === 0)
      return "Our menu is not ready yet, please come later...";

    return meals.join("\n");
  }

  makeTheOrder(meal) {
    if (this.menu[meal] === undefined)
      return `There is not ${meal} yet in our menu, do you want to order something else?`;

    const neededProductsForMeal = this.menu[meal].products;

    const hasNeededProducts = () => {
      let hasProducts = false;

      for (const neededProduct of neededProductsForMeal) {
        const neededProductName = neededProduct.productName;
        const neededProductQuantity = neededProduct.productQuantity;

        if (
          this.stockProducts[neededProductName] !==
            neededProduct.neededProductName &&
          this.stockProducts[neededProductName].productQuantity >=
            neededProductQuantity
        ) {
          hasProducts = true;
        } else if (
          this.stockProducts[neededProductName] === undefined ||
          this.stockProducts[neededProductName].productQuantity <
            neededProductQuantity
        ) {
          hasProducts = false;
          break;
        }
      }

      return hasProducts;
    };

    if (hasNeededProducts() === true) {
      for (const neededProduct of neededProductsForMeal) {
        const neededProductName = neededProduct.productName;
        const neededProductQuantity = neededProduct.productQuantity;

        this.stockProducts[neededProductName].productQuantity -=
          neededProductQuantity;
      }

      this.budgetMoney += this.menu[meal].price;

      return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }

    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
  }
}

// let kitchen = new Restaurant(1000);
// console.log(
//   kitchen.loadProducts([
//     "Banana 10 5",
//     "Banana 20 10",
//     "Strawberries 50 30",
//     "Yogurt 10 10",
//     "Yogurt 500 1500",
//     "Honey 5 50",
//   ])
// );
// console.log(kitchen.budgetMoney);

// let kitchen = new Restaurant(1000);
// console.log(
//   kitchen.addToMenu(
//     "frozenYogurt",
//     ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
//     9.99
//   )
// );
// console.log(
//   kitchen.addToMenu(
//     "Pizza",
//     [
//       "Flour 0.5",
//       "Oil 0.2",
//       "Yeast 0.5",
//       "Salt 0.1",
//       "Sugar 0.1",
//       "Tomato sauce 0.5",
//       "Pepperoni 1",
//       "Cheese 1.5",
//     ],
//     15.55
//   )
// );
// console.log(
//   kitchen.addToMenu(
//     "Pizza",
//     [
//       "Flour 0.5",
//       "Oil 0.2",
//       "Yeast 0.5",
//       "Salt 0.1",
//       "Sugar 0.1",
//       "Tomato sauce 0.5",
//       "Pepperoni 1",
//       "Cheese 1.5",
//     ],
//     15.55
//   )
// );
// console.log(kitchen.showMenu());

let kitchen = new Restaurant(1000);
console.log(
  kitchen.loadProducts([
    "Flour 1",
    "Oil 1",
    "Yeast 1",
    "Salt 1",
    "Sugar 1",
    "Tomato sauce 0.5",
    "Pepperoni 1",
    "Cheese 1.5",
  ])
);

function solve(cities) {
  const newCities = [...cities];
  const library = {};

  for (const city of newCities) {
    let [townName, productName, productPrice] = city.split(" | ");
    productPrice = Number(productPrice);

    if (library[productName] === undefined) {
      library[productName] = { townName, productName, productPrice };
    } else {
      if (library[productName].productPrice > productPrice) {
        library[productName].townName = townName;
        library[productName].productPrice = productPrice;
      }
    }
  }

  for (const obj of Object.values(library)) {
    console.log(`${obj.productName} -> ${obj.productPrice} (${obj.townName})`);
  }
}

solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);

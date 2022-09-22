function solve(products) {
  const newProducts = [...products];

  function factory(arr) {
    const library = [];

    for (const item of arr) {
      const [productName, productPrice] = item.split(" : ");
      const obj = { productName, productPrice };
      library.push(obj);
    }

    return library;
  }

  const libraryItems = factory(newProducts);
  const sortedLibraryItems = libraryItems.sort((a, b) =>
    a.productName.localeCompare(b.productName)
  );

  const sortedLibrary = {};

  for (const sortedItem of sortedLibraryItems) {
    if (sortedLibrary[sortedItem.productName[0]] === undefined) {
      sortedLibrary[sortedItem.productName[0]] = [sortedItem];
    } else {
      sortedLibrary[sortedItem.productName[0]].push(sortedItem);
    }
  }

  for (const key in sortedLibrary) {
    console.log(key);

    for (const item of sortedLibrary[key]) {
      console.log(` ${item.productName}: ${item.productPrice}`);
    }
  }
}

solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

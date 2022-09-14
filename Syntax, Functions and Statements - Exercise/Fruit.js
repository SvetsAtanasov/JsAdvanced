function Fruit(fruit, grams, pricePerKg) {
  const weightInKg = grams / 1000;
  const priceOfOranges = (weightInKg * pricePerKg).toFixed(2);

  return console.log(
    `I need $${priceOfOranges} to buy ${weightInKg.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

Fruit("orange", 2500, 1.8);
Fruit("apple", 1563, 2.35);

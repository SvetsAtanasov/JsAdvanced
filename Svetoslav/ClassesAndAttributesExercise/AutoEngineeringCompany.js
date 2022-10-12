function solve(args) {
  const cars = {};

  putInDictionary(args);
  printCars(cars);

  function putInDictionary(args) {
    for (const string of args) {
      const tokens = string.split(" | ");
      const brand = tokens[0];
      const model = tokens[1];
      const produced = Number(tokens[2]);

      if (cars[brand] === undefined) cars[brand] = [];

      if (cars[brand].some((x) => x.model === model)) {
        cars[brand].find((x) => x.model === model).produced += produced;
        continue;
      }

      const obj = { model, produced };
      cars[brand].push(obj);
    }
  }

  function printCars(dictionary) {
    for (const [key, value] of Object.entries(dictionary)) {
      console.log(key);

      for (const car of value) {
        console.log(`###${car.model} -> ${car.produced}`);
      }
    }
  }
}

solve([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);

solve([
  "Mercedes-Benz | 50PS | 123",
  "Mini | Clubman | 20000",
  "Mini | Convertible | 1000",
  "Mercedes-Benz | 60PS | 3000",
  "Hyunday | Elantra GT | 20000",
  "Mini | Countryman | 100",
  "Mercedes-Benz | W210 | 100",
  "Mini | Clubman | 1000",
  "Mercedes-Benz | W163 | 200",
]);

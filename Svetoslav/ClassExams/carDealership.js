class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (model === "" || horsepower < 0 || price < 0 || mileage < 0) {
      throw new Error("Invalid input!");
    }

    this.availableCars.push({
      model,
      horsepower,
      price,
      mileage,
    });

    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    let price = 0;
    const car = this.availableCars.find((x) => x.model === model);

    if (car === undefined) {
      throw new Error(`${model} was not found!`);
    }

    if (car.mileage <= desiredMileage) {
      price = car.price;
    } else if (Math.abs(car.mileage - desiredMileage) <= 40000) {
      price += car.price - car.price * (5 / 100);
    } else if (Math.abs(car.mileage - desiredMileage) > 40000) {
      price += car.price - car.price * (10 / 100);
    }

    this.availableCars = this.availableCars.filter((x) => x.model !== model);
    car.price = price;
    this.soldCars.push(car);
    this.totalIncome += price;

    return `${model} was sold for ${price.toFixed(2)}$`;
  }

  currentCar() {
    const result = [
      "-Available cars:",
      ...this.availableCars.map((x) => {
        return `---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(
          2
        )} km - ${x.price.toFixed(2)}$`;
      }),
    ];

    if (this.availableCars.length === 0) return "There are no available cars";

    return result.join("\n");
  }

  salesReport(criteria) {
    if (criteria === "horsepower") {
      this.soldCars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
    } else if (criteria === "model") {
      this.soldCars = this.soldCars.sort((a, b) => {
        if (a.model > b.model) return 1;
        if (b.model > a.model) return -1;

        return 0;
      });
    } else {
      throw new Error("Invalid criteria!");
    }

    const result = [
      `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
      `-${this.soldCars.length} cars sold:`,
      ...this.soldCars.map((x) => {
        return `---${x.model} - ${x.horsepower} HP - ${x.price.toFixed(2)}$`;
      }),
    ];

    return result.join("\n");
  }
}

// let dealership = new CarDealership("SoftAuto");
// console.log(dealership.addCar("Toyota Corolla", 100, 3500, 190000));
// console.log(dealership.addCar("Mercedes C63", 300, 29000, 187000));
// console.log(dealership.addCar("", 120, 4900, 240000));
// let dealership = new CarDealership("SoftAuto");
// dealership.addCar("Toyota Corolla", 100, 3500, 190000);
// dealership.addCar("Mercedes C63", 300, 29000, 187000);
// dealership.addCar("Audi A3", 120, 4900, 240000);
// console.log(dealership.sellCar("Toyota Corolla", 230000));
// console.log(dealership.sellCar("Mercedes C63", 110000));
// let dealership = new CarDealership("SoftAuto");
// dealership.addCar("Toyota Corolla", 100, 3500, 190000);
// dealership.addCar("Mercedes C63", 300, 29000, 187000);
// dealership.addCar("Audi A3", 120, 4900, 240000);
// console.log(dealership.currentCar());
let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
dealership.sellCar("Toyota Corolla", 230000);
dealership.sellCar("Mercedes C63", 110000);
console.log(dealership.salesReport("model"));

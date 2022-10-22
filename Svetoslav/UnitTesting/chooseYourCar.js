const { assert } = require("chai");

const chooseYourCar = {
  choosingType(type, color, year) {
    if (year < 1900 || year > 2022) {
      throw new Error(`Invalid Year!`);
    } else {
      if (type == "Sedan") {
        if (year >= 2010) {
          return `This ${color} ${type} meets the requirements, that you have.`;
        } else {
          return `This ${type} is too old for you, especially with that ${color} color.`;
        }
      }
      throw new Error(`This type of car is not what you are looking for.`);
    }
  },
  brandName(brands, brandIndex) {
    let result = [];
    if (
      !Array.isArray(brands) ||
      !Number.isInteger(brandIndex) ||
      brandIndex < 0 ||
      brandIndex >= brands.length
    ) {
      throw new Error("Invalid Information!");
    }
    for (let i = 0; i < brands.length; i++) {
      if (i !== brandIndex) {
        result.push(brands[i]);
      }
    }
    return result.join(", ");
  },
  carFuelConsumption(distanceInKilometers, consumptedFuelInLiters) {
    let litersPerHundredKm = (
      (consumptedFuelInLiters / distanceInKilometers) *
      100
    ).toFixed(2);

    if (
      typeof distanceInKilometers !== "number" ||
      distanceInKilometers <= 0 ||
      typeof consumptedFuelInLiters !== "number" ||
      consumptedFuelInLiters <= 0
    ) {
      throw new Error("Invalid Information!");
    } else if (litersPerHundredKm <= 7) {
      return `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`;
    } else {
      return `The car burns too much fuel - ${litersPerHundredKm} liters!`;
    }
  },
};

describe("Tests for chooseYourCar", () => {
  describe("Testing the function choosingType", () => {
    it("Tests that should return errors", () => {
      const expectedRes = "Invalid Year!";

      assert.throw(() => {
        chooseYourCar.choosingType("Sedan", "cyan", 1899);
      }, expectedRes);

      assert.throw(() => {
        chooseYourCar.choosingType("Sedan", "cyan", 1895);
      }, expectedRes);

      assert.throw(() => {
        chooseYourCar.choosingType("Sedan", "cyan", 2024);
      }, expectedRes);

      assert.throw(() => {
        chooseYourCar.choosingType("Sedan", "cyan", 2023);
      }, expectedRes);
    });

    it("Should meet the requirements and go into the first statement", () => {
      const expectedResult =
        "This green Sedan meets the requirements, that you have.";

      assert.equal(
        chooseYourCar.choosingType("Sedan", "green", 2022),
        expectedResult
      );

      assert.equal(
        chooseYourCar.choosingType("Sedan", "green", 2021),
        expectedResult
      );

      assert.equal(
        chooseYourCar.choosingType("Sedan", "green", 2010),
        expectedResult
      );

      assert.equal(
        chooseYourCar.choosingType("Sedan", "green", 2011),
        expectedResult
      );
    });

    it("Type should return message that car is too old", () => {
      const expectedResult =
        "This Sedan is too old for you, especially with that orange color.";

      assert.equal(
        chooseYourCar.choosingType("Sedan", "orange", 2009),
        expectedResult
      );

      assert.equal(
        chooseYourCar.choosingType("Sedan", "orange", 1999),
        expectedResult
      );

      assert.equal(
        chooseYourCar.choosingType("Sedan", "orange", 1900),
        expectedResult
      );
    });

    it("Should return a message not the car you are looking for", () => {
      const expectedResult =
        "This type of car is not what you are looking for.";

      assert.throw(() => {
        chooseYourCar.choosingType("Wagon", "grey", 2009);
      }, expectedResult);

      assert.throw(() => {
        chooseYourCar.choosingType("Wagon", "grey", 2010);
      }, expectedResult);

      assert.throw(() => {
        chooseYourCar.choosingType("Hatch Back", "grey", 2018);
      }, expectedResult);

      assert.throw(() => {
        chooseYourCar.choosingType("Hatch Back", "grey", 2019);
      }, expectedResult);

      assert.throw(() => {
        chooseYourCar.choosingType("Hatch Back", "grey", 2020);
      }, expectedResult);
    });
  });

  describe("Tests for brandName", () => {
    it("Should return errors", () => {
      const expectedResult = "Invalid Information!";

      assert.throw(() => {
        chooseYourCar.brandName("pesho", "1");
      }, expectedResult);

      assert.throw(() => {
        chooseYourCar.brandName(["BMW, Audi"], "1");
      }, expectedResult);

      assert.throw(() => {
        chooseYourCar.brandName(["BMW, Audi"], -1);
      }, expectedResult);

      assert.throw(() => {
        chooseYourCar.brandName(["BMW, Audi"], 2);
      }, expectedResult);

      assert.throw(() => {
        chooseYourCar.brandName(["BMW, Audi"], 3);
      }, expectedResult);

      assert.throw(() => {
        chooseYourCar.brandName(["BMW, Audi"], 1.1);
      }, expectedResult);
      assert.throw(() => {
        chooseYourCar.brandName(["BMW, Audi"], "1.1");
      }, expectedResult);
    });

    it("Function should return result of string with added cars", () => {
      const expectedResult = "";
      const expectedResult1 = ["Opel", "Lada", "Jeep"];
      const expectedResult2 = ["Opel", "Lada", "Nissan"];

      assert.equal(chooseYourCar.brandName(["Opel"], 0), expectedResult);

      assert.equal(
        chooseYourCar.brandName(["Opel", "Lada", "Nissan", "Jeep"], 2),
        expectedResult1.join(", ")
      );

      assert.equal(
        chooseYourCar.brandName(["Opel", "Lada", "Nissan", "Jeep"], 3),
        expectedResult2.join(", ")
      );
    });
  });

  describe("Testing the function carFuelConsumption", () => {
    it("Should throw errors", () => {
      const expectedResult = "Invalid Information!";

      assert.throw(() => {
        chooseYourCar.carFuelConsumption(["pesho"], 5);
      }, expectedResult);

      assert.throw(() => {
        chooseYourCar.carFuelConsumption(-100, 5);
      }, expectedResult);

      assert.throw(() => {
        chooseYourCar.carFuelConsumption(0, 5);
      }, expectedResult);

      assert.throw(() => {
        chooseYourCar.carFuelConsumption(-1, 5);
      }, expectedResult);

      assert.throw(() => {
        chooseYourCar.carFuelConsumption(5, true);
      }, expectedResult);

      assert.throw(() => {
        chooseYourCar.carFuelConsumption(5, 0);
      }, expectedResult);

      assert.throw(() => {
        chooseYourCar.carFuelConsumption(5, -1);
      }, expectedResult);
    });

    it("Should return a message that the car is efficient enough", () => {
      const expctetResult = "The car is efficient enough, it burns 0.10 liters/100 km.";
      const expctetResult1 = "The car is efficient enough, it burns 1.00 liters/100 km.";
      const expctetResult2 = "The car is efficient enough, it burns 6.99 liters/100 km.";
      const expctetResult3 = "The car is efficient enough, it burns 7.00 liters/100 km.";
    
      assert.equal(chooseYourCar.carFuelConsumption(100, 0.1), expctetResult);
      assert.equal(chooseYourCar.carFuelConsumption(100, 1), expctetResult1);
      assert.equal(chooseYourCar.carFuelConsumption(100, 6.99), expctetResult2);
      assert.equal(chooseYourCar.carFuelConsumption(100, 7), expctetResult3);
    });

    it("Should return a message that the car consumes too much fuel", () => {
      const expctetResult = "The car burns too much fuel - 8.00 liters!";
      const expctetResult1 = "The car burns too much fuel - 8.10 liters!";
      const expctetResult2 = "The car burns too much fuel - 9.00 liters!";
      const expctetResult3 = "The car burns too much fuel - 99.90 liters!";
      const expctetResult4 = "The car burns too much fuel - 100.00 liters!";

      assert.equal(chooseYourCar.carFuelConsumption(100, 8), expctetResult);
      assert.equal(chooseYourCar.carFuelConsumption(100, 8.1), expctetResult1);
      assert.equal(chooseYourCar.carFuelConsumption(100, 9), expctetResult2);
      assert.equal(chooseYourCar.carFuelConsumption(100, 99.9), expctetResult3);
      assert.equal(chooseYourCar.carFuelConsumption(100, 100), expctetResult4);
    });
  });
});

const { it } = require("mocha");
const { assert } = require("chai");

const rentCar = {
  searchCar(shop, model) {
    let findModel = [];
    if (Array.isArray(shop) && typeof model == "string") {
      for (let i = 0; i < shop.length; i++) {
        if (model == shop[i]) {
          findModel.push(shop[i]);
        }
      }
      if (findModel.length !== 0) {
        return `There is ${findModel.length} car of model ${model} in the catalog!`;
      } else {
        throw new Error("There are no such models in the catalog!");
      }
    } else {
      throw new Error("Invalid input!");
    }
  },
  calculatePriceOfCar(model, days) {
    let catalogue = {
      Volkswagen: 20,
      Audi: 36,
      Toyota: 40,
      BMW: 45,
      Mercedes: 50,
    };

    if (typeof model == "string" && Number.isInteger(days)) {
      if (catalogue.hasOwnProperty(model)) {
        let cost = catalogue[model] * days;
        return `You choose ${model} and it will cost $${cost}!`;
      } else {
        throw new Error("No such model in the catalog!");
      }
    } else {
      throw new Error("Invalid input!");
    }
  },
  checkBudget(costPerDay, days, budget) {
    if (
      !Number.isInteger(costPerDay) ||
      !Number.isInteger(days) ||
      !Number.isInteger(budget)
    ) {
      throw new Error("Invalid input!");
    } else {
      let cost = costPerDay * days;
      if (cost <= budget) {
        return `You rent a car!`;
      } else {
        return "You need a bigger budget!";
      }
    }
  },
};

describe("Rent Car Unit Tests", () => {
  describe("searchCar Tests", () => {
    it("errors", () => {
      const exp = "Invalid input!";

      assert.throw(() => rentCar.searchCar("pesho", "Mercedes"), exp);
      assert.throw(() => rentCar.searchCar(["Mercedes", "Ford"], 1), exp);
      assert.throw(() => rentCar.searchCar("pesho", 1), exp);
    });

    it("shop is empty array", () => {
      const exp = `There are no such models in the catalog!`;

      assert.throw(() => rentCar.searchCar([], "Mercedes"), exp);
      assert.throw(
        () => rentCar.searchCar(["Ford", "Lada", "Audi"], "Mercedes"),
        exp
      );
    });

    it("foundModels not empty", () => {
      const exp = `There is 1 car of model Mercedes in the catalog!`;
      const exp1 = `There is 2 car of model Mercedes in the catalog!`;
      const exp2 = `There is 3 car of model Mercedes in the catalog!`;

      assert.equal(
        rentCar.searchCar(["Mercedes", "Lada", "Audi"], "Mercedes"),
        exp
      );
      assert.equal(
        rentCar.searchCar(["Mercedes", "Mercedes", "Audi"], "Mercedes"),
        exp1
      );
      assert.equal(
        rentCar.searchCar(["Mercedes", "Mercedes", "Mercedes"], "Mercedes"),
        exp2
      );
    });
  });

  describe("calculatePriceOfCar tests", () => {
    it("errors", () => {
      const exp = `Invalid input!`;
      const exp1 = "No such model in the catalog!";

      assert.throw(() => rentCar.calculatePriceOfCar(0, 5), exp);
      assert.throw(() => rentCar.calculatePriceOfCar("Mercedes", 1.1), exp);
      assert.throw(() => rentCar.calculatePriceOfCar(true, 1.1), exp);
      assert.throw(() => rentCar.calculatePriceOfCar("Ford", 5), exp1);
    });

    it("calculated cost", () => {
      const exp = `You choose Mercedes and it will cost $0!`;
      const exp1 = `You choose Toyota and it will cost $200!`;
      const exp2 = `You choose Audi and it will cost $360!`;

      assert.equal(rentCar.calculatePriceOfCar("Mercedes", 0), exp);
      assert.equal(rentCar.calculatePriceOfCar("Toyota", 5), exp1);
      assert.equal(rentCar.calculatePriceOfCar("Audi", 10), exp2);
    });
  });

  describe("checkBudget tests", () => {
    it("errors", () => {
      const exp = "Invalid input!";

      assert.throw(() => rentCar.checkBudget(1.1, 5, 500), exp);
      assert.throw(() => rentCar.checkBudget(true, 5, 500), exp);
      assert.throw(() => rentCar.checkBudget(30, 1.1, 500), exp);
      assert.throw(() => rentCar.checkBudget(30, "pesho", 500), exp);
      assert.throw(() => rentCar.checkBudget(30, 5, 1.1), exp);
      assert.throw(() => rentCar.checkBudget(30, 5, [true, {}, "pesho"]), exp);
    });

    it("rent a car", () => {
      const exp = "You rent a car!";

      assert.equal(rentCar.checkBudget(50, 5, 500), exp);
      assert.equal(rentCar.checkBudget(50, 10, 500), exp);
    });

    it("need bigger budget", () => {
      const exp = "You need a bigger budget!";

      assert.equal(rentCar.checkBudget(50, 11, 500), exp);
    });
  });
});

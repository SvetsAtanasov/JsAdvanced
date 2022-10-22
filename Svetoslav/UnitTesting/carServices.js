const { assert } = require("chai");

const carService = {
  isItExpensive(issue) {
    if (issue === "Engine" || issue === "Transmission") {
      return `The issue with the car is more severe and it will cost more money`;
    } else {
      return `The overall price will be a bit cheaper`;
    }
  },
  discount(numberOfParts, totalPrice) {
    if (typeof numberOfParts !== "number" || typeof totalPrice !== "number") {
      throw new Error("Invalid input");
    }

    let discountPercentage = 0;

    if (numberOfParts > 2 && numberOfParts <= 7) {
      discountPercentage = 15;
    } else if (numberOfParts > 7) {
      discountPercentage = 30;
    }

    let result = (discountPercentage / 100) * totalPrice;

    if (numberOfParts <= 2) {
      return "You cannot apply a discount";
    } else {
      return `Discount applied! You saved ${result}$`;
    }
  },
  partsToBuy(partsCatalog, neededParts) {
    let totalSum = 0;

    if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
      throw new Error("Invalid input");
    }
    neededParts.forEach((neededPart) => {
      partsCatalog.map((obj) => {
        if (obj.part === neededPart) {
          totalSum += obj.price;
        }
      });
    });

    return totalSum;
  },
};

describe("carServices unit tests", () => {
  describe("Is it expensive function", () => {
    it("Severe issue Engine", () => {
      const exp =
        "The issue with the car is more severe and it will cost more money";

      assert.equal(carService.isItExpensive("Engine"), exp);
    });

    it("Severe issue Transmission", () => {
      const exp =
        "The issue with the car is more severe and it will cost more money";

      assert.equal(carService.isItExpensive("Transmission"), exp);
    });

    it("Overall price cheaper Signal Light car part", () => {
      const exp = "The overall price will be a bit cheaper";

      assert.equal(carService.isItExpensive("Signal Light"), exp);
    });

    it("Test with differen than string input", () => {
      const exp = "The overall price will be a bit cheaper";

      assert.equal(carService.isItExpensive(0), exp);
    });
  });

  describe("Discount function", () => {
    it("NumberOfParts error invalid input", () => {
      const exp = "Invalid input";

      assert.throw(() => {
        carService.discount("pesho", 5);
      }, exp);
    });

    it("totalPrice error invalid input", () => {
      const exp = "Invalid input";

      assert.throw(() => {
        carService.discount(2, "pesho");
      }, exp);
    });

    it("numberOfParts > 2 ^^ <= 7", () => {
      const exp = "Discount applied! You saved 7.5$";

      assert.equal(carService.discount(7, 50), exp);
      assert.equal(carService.discount(6, 50), exp);
      assert.equal(carService.discount(3, 50), exp);
    });

    it("numberOfParts > 7", () => {
      const exp = "Discount applied! You saved 15$";

      assert.equal(carService.discount(8, 50), exp);
      assert.equal(carService.discount(9, 50), exp);
      assert.equal(carService.discount(10, 50), exp);
    });

    it("numberOfParts <= 2", () => {
      const exp = "You cannot apply a discount";

      assert.equal(carService.discount(2, 50), exp);
      assert.equal(carService.discount(1, 50), exp);
      assert.equal(carService.discount(0, 50), exp);
    });
  });

  describe("partsToBuy function", () => {
    it("partsCatalog not an array error", () => {
      const exp = "Invalid input";

      assert.throw(() => {
        carService.partsToBuy(0, ["Transmission", "Engine"]);
      }, exp);
    });

    it("neededParts not an array error", () => {
      const exp = "Invalid input";

      assert.throw(() => {
        carService.partsToBuy(
          [
            { part: "Transmission", price: 50 },
            { part: "Engine", price: 70 },
          ],
          0
        );
      }, exp);
    });

    it("Total price 120", () => {
      const exp = 120;

      assert.equal(
        carService.partsToBuy(
          [
            { part: "Transmission", price: 50 },
            { part: "Engine", price: 70 },
          ],
          ["Transmission", "Engine", "Part"]
        ),
        exp
      );
    });

    it("Total price 0", () => {
      const exp = 0;

      assert.equal(
        carService.partsToBuy(
          [
            { part: "Transmission", price: 50 },
            { part: "Engine", price: 70 },
          ],
          []
        ),
        exp
      );

      assert.equal(carService.partsToBuy([], ["Transmission", "Engine"]), exp);
    });

    it("Negative", () => {
      const exp = -150;

      assert.equal(
        carService.partsToBuy(
          [
            { part: "Transmission", price: -100 },
            { part: "Engine", price: -50 },
          ],
          ["Transmission", "Engine"]
        ),
        exp
      );
    });
  });
});

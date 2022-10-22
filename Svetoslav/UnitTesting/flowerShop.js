const { assert } = require("chai");

const flowerShop = {
  calcPriceOfFlowers(flower, price, quantity) {
    if (
      typeof flower != "string" ||
      !Number.isInteger(price) ||
      !Number.isInteger(quantity)
    ) {
      throw new Error("Invalid input!");
    } else {
      let result = price * quantity;
      return `You need $${result.toFixed(2)} to buy ${flower}!`;
    }
  },
  checkFlowersAvailable(flower, gardenArr) {
    if (gardenArr.indexOf(flower) >= 0) {
      return `The ${flower} are available!`;
    } else {
      return `The ${flower} are sold! You need to purchase more!`;
    }
  },
  sellFlowers(gardenArr, space) {
    let shop = [];
    let i = 0;
    if (
      !Array.isArray(gardenArr) ||
      !Number.isInteger(space) ||
      space < 0 ||
      space >= gardenArr.length
    ) {
      throw new Error("Invalid input!");
    } else {
      while (gardenArr.length > i) {
        if (i != space) {
          shop.push(gardenArr[i]);
        }
        i++;
      }
    }
    return shop.join(" / ");
  },
};

describe("flowerShop tests", () => {
  describe("calcPriceOfFlowers tests", () => {
    it("errors", () => {
      const exp = "Invalid input!";

      assert.throw(() => flowerShop.calcPriceOfFlowers(true, 5, 10), exp);
      assert.throw(() => flowerShop.calcPriceOfFlowers("Rose", 1.1, 10), exp);
      assert.throw(
        () => flowerShop.calcPriceOfFlowers("Rose", "pesho", 10),
        exp
      );
      assert.throw(() => flowerShop.calcPriceOfFlowers("Rose", 1, 1.1), exp);
      assert.throw(() => flowerShop.calcPriceOfFlowers("Rose", 1, true), exp);
    });

    it("calc price", () => {
      const exp = `You need $10.00 to buy rose!`;
      const exp1 = `You need $0.00 to buy rose!`;
      const exp2 = `You need $100.00 to buy rose!`;

      assert.equal(flowerShop.calcPriceOfFlowers("rose", 5, 2), exp);
      assert.equal(flowerShop.calcPriceOfFlowers("rose", 5, 0), exp1);
      assert.equal(flowerShop.calcPriceOfFlowers("rose", 20, 5), exp2);
    });
  });

  describe("checkFlowersAvailable", () => {
    it("general tests", () => {
      const exp = `The rose are available!`;
      const exp1 = `The clover are sold! You need to purchase more!`;

      assert.equal(
        flowerShop.checkFlowersAvailable("rose", [
          "rose",
          "lilie",
          "tulip",
          "gold clover",
        ]),
        exp
      );
      assert.equal(
        flowerShop.checkFlowersAvailable("rose", [
          "tulip",
          "lilie",
          "rose",
          "gold clover",
        ]),
        exp
      );
      assert.equal(
        flowerShop.checkFlowersAvailable("clover", [
          "tulip",
          "lilie",
          "rose",
          "gold clover",
        ]),
        exp1
      );
    });
  });

  describe("sellFlowers tests", () => {
    it("errors", () => {
      const exp = "Invalid input!";

      assert.throw(() => flowerShop.sellFlowers(true, 5), exp);
      assert.throw(() => flowerShop.sellFlowers([], 0), exp);
      assert.throw(() => flowerShop.sellFlowers([], 5), exp);
      assert.throw(() => flowerShop.sellFlowers(["rose"], 1.1), exp);
      assert.throw(() => flowerShop.sellFlowers(["rose"], true), exp);
      assert.throw(() => flowerShop.sellFlowers(["rose"], -1), exp);
    });

    it("return shop", () => {
      const exp = ["tulip", "clover", "sunflower"];
      const exp1 = ["rose", "clover", "sunflower"];
      const exp2 = ["rose", "tulip", "sunflower"];
      const exp3 = ["rose", "tulip", "clover", ""];

      assert.equal(
        flowerShop.sellFlowers(["rose", "tulip", "clover", "sunflower"], 0),
        exp.join(" / ")
      );
      assert.equal(
        flowerShop.sellFlowers(["rose", "tulip", "clover", "sunflower"], 1),
        exp1.join(" / ")
      );
      assert.equal(
        flowerShop.sellFlowers(["rose", "tulip", "clover", "sunflower"], 2),
        exp2.join(" / ")
      );
      assert.equal(
        flowerShop.sellFlowers(["rose", "tulip", "clover", "sunflower", ""], 3),
        exp3.join(" / ")
      );
    });
  });
});

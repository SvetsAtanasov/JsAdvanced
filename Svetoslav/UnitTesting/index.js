const { expect } = require("chai");
const { it } = require("mocha");
const [
  sum,
  isSymmetric,
  rgbToHexColor,
  createCalculator,
  lookupChar,
  isOddOrEven,
  mathEnforcer,
] = require("./program");

describe("sum", () => {
  it("arraySum", () => {
    expect(sum([1, 2, 3])).to.equal(6);
  });
});

describe("Tests for isSymmetric(arr)", () => {
  describe("Regular cases", () => {
    // odd count - numbers only
    it("should return true on isSymmetric([1,2,1])", () => {
      expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    // even count - numbers only
    it("should return false on isSymmetric([1,2,-1])", () => {
      expect(isSymmetric([1, 2, -1])).to.be.false;
    });

    // odd count - numbers only
    it("should return true on isSymmetric([10,20,20,10])", () => {
      expect(isSymmetric([10, 20, 20, 10])).to.be.true;
    });

    // even count - numbers only
    it("should return false on isSymmetric([10,20,30,10])", () => {
      expect(isSymmetric([10, 20, 30, 10])).to.be.false;
    });

    // odd count - mixed types
    it('should return true on isSymmetric(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
      expect(
        isSymmetric([
          "pesho",
          new Date(2016, 8, 15),
          false,
          new Date(2016, 8, 15),
          "pesho",
        ])
      ).to.be.true;
    });

    // even count - mixed types
    it('should return false on isSymmetric(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
      expect(isSymmetric(["pesho", new Date(2016, 8, 15), false, "pesho"])).to
        .be.false;
    });
  });

  describe("Tests for isSymmetric(arr) - Edge cases", () => {
    // number and string representation of the same number
    it('should return false on isSymmetric(["2",2])', () => {
      expect(isSymmetric(["2", 2])).to.be.false;
    });

    // 1 item
    it("should return true on isSymmetric([2])", () => {
      expect(isSymmetric([2])).to.be.true;
    });

    // []
    it("should return true on isSymmetric([])", () => {
      expect(isSymmetric([])).to.be.true;
    });

    // string instead []
    it('should return false on isSymmetric("hello")', () => {
      expect(isSymmetric("hello")).to.be.false;
    });

    // [[], [], []]
    it("should return true on isSymmetric([[1,2], [2], [1,2]])", () => {
      expect(isSymmetric([[1, 2], [2], [1, 2]])).to.be.true;
    });
  });
});

describe("Tests for the RGB TO HEX task", function () {
  describe("General test", function () {
    it("should return #100C0D for (16, 12, 13)", function () {
      expect(rgbToHexColor(16, 12, 13)).to.equal("#100C0D");
    });
  });

  describe("Test lowest possible input: zeros", function () {
    it("test with zeros", function () {
      expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });
  });

  describe("Test highest possible input: 255", function () {
    it("test with 255", function () {
      expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    });
  });

  describe("Invalid input -negative number", function () {
    it("should be undefined", function () {
      expect(typeof rgbToHexColor(-16, 12, 13)).to.equal("undefined");
    });
  });

  describe("Invalid input -negative number", function () {
    it("should be undefined", function () {
      expect(typeof rgbToHexColor(16, -12, 13)).to.equal("undefined");
    });
  });

  describe("Invalid input -negative number", function () {
    it("should be undefined", function () {
      expect(typeof rgbToHexColor(16, 12, -13)).to.equal("undefined");
    });
  });

  describe("Invalid input out of the Range", function () {
    it("should be undefined", function () {
      expect(typeof rgbToHexColor(266, 12, 13)).to.equal("undefined");
    });
  });

  describe("Invalid input: string", function () {
    it("should be undefined", function () {
      expect(typeof rgbToHexColor("266", 12, 13)).to.equal("undefined");
    });
  });

  describe("Invalid input: fractional numbers", function () {
    it("should be undefined", function () {
      expect(typeof rgbToHexColor(3.13, 12, 13)).to.equal("undefined");
    });
  });

  describe("No input test", function () {
    it("no input test", function () {
      expect(rgbToHexColor()).to.be.undefined;
    });
  });
});

describe("Tests for createCalculator task", () => {
  describe("general test for add", () => {
    it("return 5", () => {
      let calculator = createCalculator();
      calculator.add(5);
      let result = calculator.get();

      expect(result).to.equal(5);
    });
  });

  describe("general test for subtract", () => {
    it("return 0", () => {
      let calculator = createCalculator();
      calculator.add(5);
      calculator.subtract(5);
      let result = calculator.get();

      expect(result).to.equal(0);
    });
  });

  describe("NaN test for add", () => {
    it("return NaN", () => {
      let calculator = createCalculator();
      calculator.add("pesho");
      let result = calculator.get();

      expect(result).to.be.NaN;
    });
  });

  describe("NaN test for subtract", () => {
    it("return NaN", () => {
      let calculator = createCalculator();
      calculator.subtract("pesho");
      let result = calculator.get();

      expect(result).to.be.NaN;
    });
  });

  describe("Add negative numbers", () => {
    it("return -5", () => {
      let calculator = createCalculator();
      calculator.add(-5);
      let result = calculator.get();

      expect(result).to.equal(-5);
    });
  });

  describe("Subtract negative numbers", () => {
    it("return 10", () => {
      let calculator = createCalculator();
      calculator.subtract(-5);
      calculator.subtract(-5);
      let result = calculator.get();

      expect(result).to.equal(10);
    });
  });
});

//

describe("lookUpChar unit tests", () => {
  describe("general test", () => {
    it("return a", () => {
      const input = "salad";
      const idx = 1;
      const res = lookupChar(input, idx);

      expect(res).to.equal("a");
    });
  });

  describe("not a string for input", () => {
    it("return undefined", () => {
      const input = 1;
      const idx = 1;
      const res = lookupChar(input, idx);

      expect(res).to.be.undefined;
    });
  });

  describe("not an integer for idx", () => {
    it("return undefined", () => {
      const input = "apple";
      const idx = 1.1;
      const res = lookupChar(input, idx);

      expect(res).to.be.undefined;
    });
  });

  describe("string len less than idx", () => {
    it("return Incorrect index", () => {
      const input = "ap";
      const idx = 3;
      const res = lookupChar(input, idx);

      expect(res).to.equal("Incorrect index");
    });
  });

  describe("idx less than 0", () => {
    it("return Incorrect index", () => {
      const input = "apple";
      const idx = -1;
      const res = lookupChar(input, idx);

      expect(res).to.equal("Incorrect index");
    });
  });
});

//

describe("isOddOrEven", () => {
  describe("general test even", () => {
    it("return even", () => {
      const str = "even";
      const res = isOddOrEven(str);

      expect(res).to.equal("even");
    });
  });

  describe("general test odd", () => {
    it("return odd", () => {
      const str = "odd";
      const res = isOddOrEven(str);

      expect(res).to.equal("odd");
    });
  });

  describe("input not a string", () => {
    it("return undefined", () => {
      const str = 1;
      const res = isOddOrEven(str);

      expect(res).to.be.undefined;
    });
  });

  describe("no string provided", () => {
    it("return even", () => {
      const str = "";
      const res = isOddOrEven(str);

      expect(res).to.equal("even");
    });
  });
});

//

describe("mathEnforcer unit tests", () => {
  describe("add function tests", () => {
    it("general test for add", () => {
      const res = mathEnforcer.addFive(5);

      expect(res).to.equal(10);
    });

    it("add negative number", () => {
      const res = mathEnforcer.addFive(-5);

      expect(res).to.equal(0);
    });

    it("add not a number", () => {
      const res = mathEnforcer.addFive("pesho");

      expect(res).to.be.undefined;
    });

    it("add with float", () => {
      const res = mathEnforcer.addFive(5.1);

      expect(res).to.be.closeTo(10.1, 0.01);
    });

    it("add to 0", () => {
      const res = mathEnforcer.addFive(0);

      expect(res).to.equal(5);
    });

    it("add to negative number greater than 5", () => {
      const res = mathEnforcer.addFive(-10);

      expect(res).to.equal(-5);
    });
  });

  describe("subtract function tests", () => {
    it("general test for subtract", () => {
      const res = mathEnforcer.subtractTen(20);

      expect(res).to.equal(10);
    });

    it("subtract smaller number than 10", () => {
      const res = mathEnforcer.subtractTen(5);

      expect(res).to.equal(-5);
    });

    it("subtract not a number", () => {
      const res = mathEnforcer.subtractTen("pesho");

      expect(res).to.be.undefined;
    });

    it("subtract with float", () => {
      const res = mathEnforcer.subtractTen(20.1);

      expect(res).to.be.closeTo(10.1, 0.01);
    });

    it("subtract from 0", () => {
      const res = mathEnforcer.subtractTen(0);

      expect(res).to.equal(-10);
    });

    it("subtract negative number", () => {
      const res = mathEnforcer.subtractTen(-10);

      expect(res).to.equal(-20);
    });
  });

  describe("sum function tests", () => {
    it("general test for sum", () => {
      const res = mathEnforcer.sum(20, 20);

      expect(res).to.equal(40);
    });

    it("sum negative numbers", () => {
      const res = mathEnforcer.sum(-20, -20);

      expect(res).to.equal(-40);
    });

    it("sum floats", () => {
      const res = mathEnforcer.sum(4.9, 5.2);

      expect(res).to.be.closeTo(10.1, 0.01);
    });

    it("sum first number to not be a number", () => {
      const res = mathEnforcer.sum("pesho", 5.2);

      expect(res).to.be.undefined;
    });

    it("sum second number to not be a number", () => {
      const res = mathEnforcer.sum(4.9, "4");

      expect(res).to.be.undefined;
    });

    it("sum 0 and negative", () => {
      const res = mathEnforcer.sum(0, -5);

      expect(res).to.equal(-5);
    });

    it("sum 0 and 0", () => {
      const res = mathEnforcer.sum(0, 0);

      expect(res).to.equal(0);
    });

    it("sum -0 and -0", () => {
      const res = mathEnforcer.sum(-0, -0);

      expect(res).to.equal(0);
    });
  });
});

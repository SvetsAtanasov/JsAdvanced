const { expect, assert } = require("chai");

class PaymentPackage {
  constructor(name, value) {
    this.name = name;

    this.value = value;

    this.VAT = 20; // Default value

    this.active = true; // Default value
  }

  get name() {
    return this._name;
  }
  set name(newValue) {
    if (typeof newValue !== "string") {
      throw new Error("Name must be a non-empty string");
    }
    if (newValue.length === 0) {
      throw new Error("Name must be a non-empty string");
    }
    this._name = newValue;
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (typeof newValue !== "number") {
      throw new Error("Value must be a non-negative number");
    }
    if (newValue < 0) {
      throw new Error("Value must be a non-negative number");
    }
    this._value = newValue;
  }
  get VAT() {
    return this._VAT;
  }
  set VAT(newValue) {
    if (typeof newValue !== "number") {
      throw new Error("VAT must be a non-negative number");
    }
    if (newValue < 0) {
      throw new Error("VAT must be a non-negative number");
    }
    this._VAT = newValue;
  }
  get active() {
    return this._active;
  }
  set active(newValue) {
    if (typeof newValue !== "boolean") {
      throw new Error("Active status must be a boolean");
    }
    this._active = newValue;
  }
  toString() {
    const output = [
      `Package: ${this.name}` + (this.active === false ? " (inactive)" : ""),
      `- Value (excl. VAT): ${this.value}`,

      `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`,
    ];
    return output.join("\n");
  }
}

describe("PaymentPackage class test", () => {
  describe("test value", () => {
    it("throw an error with string as value", () => {
      try {
        const pack = new PaymentPackage("test", "s");
      } catch (error) {
        expect(error.message).to.equal("Value must be a non-negative number");
      }
    });

    it("throw an error with negative value", () => {
      try {
        const pack = new PaymentPackage("test", -5);
      } catch (error) {
        expect(error.message).to.equal("Value must be a non-negative number");
      }
    });
  });

  describe("test with second arg", () => {
    it("throw an error with empty string as first arg", () => {
      try {
        const pack = new PaymentPackage("", 5);
      } catch (error) {
        expect(error.message).to.equal("Name must be a non-empty string");
      }
    });

    it("throw an error with empty number as first arg", () => {
      try {
        const pack = new PaymentPackage(2, 5);
      } catch (error) {
        expect(error.message).to.equal("Name must be a non-empty string");
      }
    });
  });

  describe("test with VAT", () => {
    it("throw an error with setting VAT to something different than number", () => {
      try {
        const pack = new PaymentPackage("pack", 5);
        pack.VAT = "s";
      } catch (error) {
        expect(error.message).to.equal("VAT must be a non-negative number");
      }
    });

    it("throw an error with setting VAT to a negative number", () => {
      try {
        const pack = new PaymentPackage("pack", 5);
        pack.VAT = -1;
      } catch (error) {
        expect(error.message).to.equal("VAT must be a non-negative number");
      }
    });
  });
});

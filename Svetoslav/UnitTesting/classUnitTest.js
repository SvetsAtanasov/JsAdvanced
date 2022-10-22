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
  describe("general test", () => {
    it("print object name property", () => {
      const pack = new PaymentPackage("test", 5);

      expect(pack._name).to.equal("test");
    });

    it("print object name property", () => {
      const pack = new PaymentPackage("test", 0);
      pack.value = 0;

      expect(pack._value).to.equal(0);
    });

    it("print object value property", () => {
      const pack = new PaymentPackage("test", 5);

      expect(pack._value).to.equal(5);
    });

    it("print default VAT", () => {
      const pack = new PaymentPackage("test", 5);

      expect(pack._VAT).to.equal(20);
    });

    it("print default active", () => {
      const pack = new PaymentPackage("test", 5);

      expect(pack._active).to.be.true;
    });
  });

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

    it("set value to 50", () => {
      const pack = new PaymentPackage("test", 5);
      pack.value = 50;

      expect(pack.value).to.equal(50);
    });

    it("throw an error setter with negative value", () => {
      try {
        const pack = new PaymentPackage("test", 5);
        pack.value = -50;
      } catch (error) {
        expect(error.message).to.equal("Value must be a non-negative number");
      }
    });

    it("throw an error setter with not a number", () => {
      try {
        const pack = new PaymentPackage("test", 5);
        pack.value = true;
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

    it("throw an error setting name to different than string", () => {
      try {
        const pack = new PaymentPackage("test", 5);
        pack.name = 5;
      } catch (error) {
        expect(error.message).to.equal("Name must be a non-empty string");
      }
    });

    it("throw an error setting name to empty string", () => {
      try {
        const pack = new PaymentPackage("test", 5);
        pack.name = "";
      } catch (error) {
        expect(error.message).to.equal("Name must be a non-empty string");
      }
    });

    it("set value to test1", () => {
      try {
        const pack = new PaymentPackage("test", 5);
        pack.name = "test1";
      } catch (error) {
        expect(error.message).to.equal("test1");
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

    it("print changed VAT property", () => {
      const pack = new PaymentPackage("pack", 5);
      pack.VAT = 50;

      expect(pack.VAT).to.equal(50);
    });
  });

  describe("test active property", () => {
    it("throw error for setting value diff than boolean", () => {
      try {
        const pack = new PaymentPackage("pack", 5);
        pack.active = "pesho";
      } catch (error) {
        expect(error.message).to.equal("Active status must be a boolean");
      }
    });

    it("set value to false", () => {
      try {
        const pack = new PaymentPackage("pack", 5);
        pack.active = false;
      } catch (error) {
        expect(error.message).to.be.false;
      }
    });
  });

  describe("print result", () => {
    it("with active", () => {
      const package = new PaymentPackage("HR Services", 1500);

      expect(package.toString()).to.equal(
        "Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800"
      );
    });

    it("with inactive", () => {
      const package = new PaymentPackage("HR Services", 1500);
      package.active = false;

      expect(package.toString()).to.equal(
        "Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800"
      );
    });

    it("with array of objects", () => {
      const first = new PaymentPackage("HR Services", 1500);

      let output = [
        "Package: HR Services",
        "- Value (excl. VAT): 1500",
        "- Value (VAT 20%): 1800",
      ];

      expect(first.toString()).to.equal(output.join("\n"));
    });
  });
});

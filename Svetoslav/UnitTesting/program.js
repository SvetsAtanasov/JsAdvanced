function sum(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += Number(num);
  }

  return sum;
}

function isSymmetric(arr) {
  if (!Array.isArray(arr)) {
    return false; // Non-arrays are non-symmetric
  }

  let reversed = arr.slice(0).reverse(); // Clone and reverse

  let equal = JSON.stringify(arr) == JSON.stringify(reversed);

  return equal;
}

function rgbToHexColor(red, green, blue) {
  if (!Number.isInteger(red) || red < 0 || red > 255) {
    return undefined; // Red value is invalid
  }

  if (!Number.isInteger(green) || green < 0 || green > 255) {
    return undefined; // Green value is invalid
  }
  if (!Number.isInteger(blue) || blue < 0 || blue > 255) {
    return undefined; // Blue value is invalid
  }
  return (
    "#" +
    ("0" + red.toString(16).toUpperCase()).slice(-2) +
    ("0" + green.toString(16).toUpperCase()).slice(-2) +
    ("0" + blue.toString(16).toUpperCase()).slice(-2)
  );
}

function createCalculator() {
  let value = 0;

  return {
    add: function (num) {
      value += Number(num);
    },

    subtract: function (num) {
      value -= Number(num);
    },

    get: function () {
      return value;
    },
  };
}

//

function isOddOrEven(string) {
  if (typeof string !== "string") {
    return undefined;
  }

  if (string.length % 2 === 0) {
    return "even";
  }

  return "odd";
}

//

function lookupChar(string, index) {
  if (typeof string !== "string" || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }
  return string.charAt(index);
}

let mathEnforcer = {
  addFive: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return undefined;
    }
    return num1 + num2;
  },
};

module.exports = [
  sum,
  isSymmetric,
  rgbToHexColor,
  createCalculator,
  lookupChar,
  isOddOrEven,
  mathEnforcer
];

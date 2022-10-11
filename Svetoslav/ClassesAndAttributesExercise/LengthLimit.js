class Stringer {
  constructor(string, length) {
    this.innerString = string;
    this.innerLength = length;
  }

  get len() {
    return this.innerLength;
  }

  set len(value) {
    if (value < 0) value = 0;

    this.innerLength = value;
  }

  increase(l) {
    this.len += l;
  }

  decrease(l) {
    this.len -= l;
  }

  toString() {
    if (this.len === 0) return "...";

    if (this.innerString.length > this.len) {
      return this.innerString.substring(0, this.len) + "...";
    }

    return this.innerString;
  }
}

const test = new Stringer("Test", 5);
console.log(test.toString());

test.decrease(3);
console.log(test.toString());

test.decrease(5);
console.log(test.toString());

test.increase(4);
console.log(test.toString());

// const test1 = new Stringer("Test", 5);
// console.log(test1.toString());

// test1.increase(3);
// console.log(test1.toString());

// test1.decrease(5);
// console.log(test1.toString());

// test1.increase(4);
// console.log(test1.toString());

// console.log(test1.length);

// test1.decrease(8);
// console.log(test1.toString());
// console.log(test1.length);

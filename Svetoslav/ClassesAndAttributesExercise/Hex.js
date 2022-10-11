class Hex {
  constructor(value) {
    this.value = value;
  }

  valueOf() {
    return this.value;
  }

  plus(obj) {
    const newObj = new Hex(this.value);
    newObj.value += obj.value;

    return newObj;
  }

  minus(obj) {
    const newObj = new Hex(this.value);
    newObj.value -= obj.value;

    return newObj;
  }

  parse(str) {
    return parseInt(str, 16);
  }

  toString() {
    return `0x${this.value.toString(16).toUpperCase()}`;
  }
}

const FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
const a = new Hex(10);
const b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === "0xF");
console.log(FF.parse("AAA"));

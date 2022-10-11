"use strict";

class List {
  constructor(size = 0) {
    this.array = [];
    this.size = size;
  }

  get arraySize() {
    return this.size;
  }

  set arraySize(value) {
    this.size = value;
  }

  add(element) {
    this.array.push(element);
    this.array = this.array.sort((a, b) => a - b);
    this.arraySize = this.array.length;
  }

  remove(index) {
    if (index < 0 || index > this.array.length - 1)
      throw new Error("Invalid Index");

    const newArr = this.array.filter((x, idx) => idx !== index);

    this.array = newArr;
    this.arraySize = this.array.length;
  }

  get(index) {
    if (index < 0 || index > this.array.length - 1)
      throw new Error("Invalid Index");

    return this.array.filter((x, idx) => idx === index)[0];
  }
}

const list = new List();

list.add(7);
list.add(6);
list.add(5);
console.log(list.get(-1));
console.log(list.size);
list.remove(-1);
console.log(list.size);

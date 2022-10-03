function solution() {
  return {
    str: "",

    append(string) {
      this.str += string;
    },
    removeStart(n) {
      this.str = this.str.slice(n, this.str.length);
    },
    removeEnd(n) {
      this.str = this.str.slice(0, -n);
    },
    print() {
      console.log(this.str);
    },
  };
}

let firstZeroTest = solution();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();
secondZeroTest.append("123");
secondZeroTest.append("45");
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

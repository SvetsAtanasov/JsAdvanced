function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
    get fullName() {
      return this.firstName + " " + this.lastName;
    },
    set fullName(value) {
      let parts = value.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    },
  };
}

let a = createPerson("Albert", "Simpson");
let actual = a.fullName;
let expected = "Albert Simpson";
a.firstName = "Simon";
console.log(actual)
let actualFullName = a.fullName;
let expectedFullName = "Simon Simpson";
a.fullName = "Peter";
console.log(actualFullName)

let b = a.firstName;
let expectedB = "Simon";
console.log(b)
let v = a.lastName;
let expectedV = "Simpson";
console.log(v)

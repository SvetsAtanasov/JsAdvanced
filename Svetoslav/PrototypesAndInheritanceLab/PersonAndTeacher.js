function obj() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }

    toString() {
      return `Person (name: ${this.name}, email: ${this.email})`;
    }
  }

  class Teacher extends Person {
    constructor(teacherName, teacherEmail, subject) {
      super(teacherName, teacherEmail);
      this.subject = subject;
    }

    toString() {
      const base = super.toString().split(/[()]/)[1];
      return `Teacher (${base}, subject: ${this.subject})`;
    }
  }

  class Student extends Person {
    constructor(studentName, studentEmail, course) {
      super(studentName, studentEmail);
      this.course = course;
    }

    toString() {
      const base = super.toString().split(/[()]/)[1];
      return `Student (${base}, course: ${this.course})`;
    }
  }

  return {
    Person,
    Teacher,
    Student,
  };
}

const person = new Person("Pesho", "@abv.bg", "js");
console.log(person.toString());
const teacher = new Teacher("Pesho", "@abv.bg", "js");
console.log(teacher.toString());
const student = new Student("Pesho", "@abv.bg", "js");
console.log(student.toString());

"use strict";

class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(...args) {
    for (const v of args) {
      if (v === "" || v === undefined || v === null)
        throw new Error("Invalid input!");
    }

    const [name, salary, position, department] = args;

    if (salary < 0) throw new Error("Invalid input!");

    if (this.departments[department] === undefined) {
      this.departments[department] = {
        employees: [{ name, salary, position }],
        averageSalary: salary,
      };

      return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    const emp = { name, salary, position };
    this.departments[department].employees.push(emp);
    this.departments[department].averageSalary += salary;

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let bestString = "";

    this.calcAvgSalary();
    const bestDepartment = this.getBestDepartment();
    bestDepartment.employees.sort((a, b) => {
      if (a.salary > b.salary) return -1;
      if (b.salary > a.salary) return 1;

      if (a.name > b.name) return 1;
      if (b.name > a.name) return -1;

      return 0;
    });

    bestString +=
      `Best Department is: ${bestDepartment.department}\n` +
      `Average salary: ${bestDepartment.averageSalary.toFixed(2)}`;

    for (const emp of bestDepartment.employees) {
      bestString += `\n${emp.name} ${emp.salary} ${emp.position}`;
    }

    return bestString;
  }

  calcAvgSalary() {
    for (const [key, value] of Object.entries(this.departments)) {
      value.averageSalary /= value.employees.length;
    }
  }

  getBestDepartment() {
    let bestDepartment = {
      department: undefined,
      employees: [],
      averageSalary: 0,
    };

    for (const [key, value] of Object.entries(this.departments)) {
      if (bestDepartment.averageSalary < value.averageSalary) {
        bestDepartment.department = key;
        bestDepartment.averageSalary = value.averageSalary;
        bestDepartment.employees = value.employees;
      }
    }

    return bestDepartment;
  }
}

const c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

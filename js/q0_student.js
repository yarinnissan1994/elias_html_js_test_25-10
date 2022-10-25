import { Person } from "./q0_person.js";
export class Student extends Person {
  constructor(firstName, lastName, age, grade) {
    super(firstName, lastName, age);
    this.grade = grade;
  }
  printGrade() {
    console.log(`your grade is:${this.grade}`);
  }
}

const student1 = new Student("Yarin", "Abraham", 28, "A+");

student1.printFullName();
student1.printAge();
student1.printGrade();

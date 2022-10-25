export class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  printFullName() {
    console.log(`your name is ${this.firstName} ${this.lastName}`);
  }
  printAge() {
    console.log(`you are ${this.age} years old`);
  }
}

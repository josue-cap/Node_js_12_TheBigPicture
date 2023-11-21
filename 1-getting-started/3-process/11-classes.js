class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}!`);
  }
}

class Student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }
  greet() {
    console.log(`Hello ${this.name} from ${this.level}`);
  }
}

const o1 = new Person("Josue");
const o2 = new Student("Emiliano", "1st Grade");
const o3 = new Student("Leonardo", "3th Grade");

o3.greet = () => console.log("Im special!");

o1.greet();
o2.greet();
o3.greet();

class Person {
  age: number;
  name: string;
  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }
}
const p = new Person(20, "好好好");
const p1 = new Person(67, "姐姐家");

console.log(p.name, "p");
console.log(p1.age, "p1");

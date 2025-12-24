// Static in ts
// Static keyword is used to make a property in a class to not accessible to the object

class Parent {
  static id: number | string;
  username: string;
  constructor(id: number | string, username: string) {
    Parent.id = id;
    this.username = username;
  }
}
const p1 = new Parent(1, "Surya");
// you cant access the id by object as it marked with static keyword
console.log(p1.id); // undefined
// you can access it by class itself
console.log(Parent.id); // 1

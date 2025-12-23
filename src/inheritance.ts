// Inheritance in Ts
// Inheritance is one of the main pillar of object programming language.
// Inheritance means child class can inherit parent class properties and method
// it increase the reusability, code readability, no junky code

class Parent {
  id: number | string;
  username: string;
  constructor(id: number | string, username: string) {
    this.id = id;
    this.username = username;
  }
  getDetails() {
    return {id:this.id, username:this.username};
  }
}

class Child extends Parent {
  getParentDetailsFromChild() {
    return {id:this.id, username:this.username};
  }
}

const child = new Child(1, "heysuryaaaa");
console.log(child.getDetails());
console.log(child.getParentDetailsFromChild());

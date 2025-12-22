// number type in ts
// To define number type to a variable we use :number
var a: number = 20;
var a: number = 40;
// var can be re.init and redeclare unlike let and const variables.
console.log(a);

function userAge(currentYear: number, userBirthYear: number): number {
  return currentYear - userBirthYear;
}
let age = userAge(2025, 2000);
console.log("user age:", age);

// additions
var item = 20;
var item2 = "40";
console.log("addition", item + item2);
console.log("addition", item + +item2);
console.log("addition", item + Number(item2));

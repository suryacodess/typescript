// tuples - With tuples we can define the type of the variable
let str: string = "Surya prakash";
let num: number = 1212;
let arr: number = 2323; //error because, arr supposed to store array not number
let arr1: [number, string, number, number] = [1, "2", 3, 4];
let userId: number = Number("12");
let userVisited: boolean = true;

// enums - With enums we can create variables or properties and easily fetch them all at once, also know as enumerations.
enum errorsMessage {
  notFoundError = "401 Not found error",
  successfull = "200 Successfull",
  failed = "402 Failed",
  serverError = "500 Internal Server",
}

// any
let c: any;
c = 12;
c = "sdsd";
c = [12, 2121, 2121, 212];

// void - void is used for functions which returns nothing
function sum(): void {
  console.log("sum");
}
sum();

// Inference type and Annotation type -
// Inference type is where we dont declare the type of the variable
let d = 20;
let de = "SURYA PRAKASH";
let dex = [1, 2, 3, 4, 5];

// Annotation type is where you declare the type of the variable
let s: string = "Surya Prakash";
let strs: string | number | boolean = "Surya";
let obj: { firstName: string; number: number } = {
  firstName: "Surya Prakash",
  number: 9100682587,
};

// Interfaces and types Aliases
// In interfaces we can define the object structure, what type of the properties can be decalared its like a blueprint
// of a building
interface user {
  firstName: string;
  secondName: string;
  id: number;
}
interface admin extends user {
  admin: boolean;
}
function getUser(user: user): void {
  console.log("User id :", user.id);
  console.log("First name :", user.firstName);
  console.log("Second name :", user.secondName);
}
function getUserWithAdmin(obj: admin): void {
  console.log("User admin :", obj.admin);
  console.log("User id :", obj.id);
  console.log("User first name :", obj.firstName);
  console.log("User second id :", obj.secondName);
}
getUser({ firstName: "Surya", secondName: "Prakash", id: 0 });
console.log("");
getUserWithAdmin({
  firstName: "Surya",
  secondName: "Prakash",
  id: 0,
  admin: true,
});

// Interface merger
interface a {
  name: string;
}
interface a {
  mobile: string;
}
function ab(obj: a) {
  console.log(obj.name);
  console.log(obj.mobile);
}
ab({ name: "Sura", mobile: "9100682587" });

// Type Aliases
type snb = string | number | boolean;
let x: snb = d;
let m: snb = 22;
let n: snb = true;

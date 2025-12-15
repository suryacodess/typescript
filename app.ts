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

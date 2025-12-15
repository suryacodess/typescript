"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tuples - With tuples we can define the type of the variable
let str = "Surya prakash";
let num = 1212;
let arr = 2323; //error because, arr supposed to store array not number
let arr1 = [1, "2", 3, 4];
let userId = Number("12");
let userVisited = true;
// enums - With enums we can create variables or properties and easily fetch them all at once, also know as enumerations.
var errorsMessage;
(function (errorsMessage) {
    errorsMessage["notFoundError"] = "401 Not found error";
    errorsMessage["successfull"] = "200 Successfull";
    errorsMessage["failed"] = "402 Failed";
    errorsMessage["serverError"] = "500 Internal Server";
})(errorsMessage || (errorsMessage = {}));
// any
let c;
c = 12;
c = "sdsd";
c = [12, 2121, 2121, 212];
// void - void is used for functions which returns nothing
function sum() {
    console.log("sum");
}
sum();
// Inference type and Annotation type -
// Inference type is where we dont declare the type of the variable
let d = 20;
let de = "SURYA PRAKASH";
let dex = [1, 2, 3, 4, 5];
// Annotation type is where you declare the type of the variable
let s = "Surya Prakash";
let strs = "Surya";
let obj = {
    firstName: "Surya Prakash",
    number: 9100682587,
};
function getUser(user) {
    console.log("User id :", user.id);
    console.log("First name :", user.firstName);
    console.log("Second name :", user.secondName);
}
function getUserWithAdmin(obj) {
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
//# sourceMappingURL=app.js.map
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
//# sourceMappingURL=app.js.map
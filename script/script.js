"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// types - primitives and non-primitives
let a = "Surya Prakash";
let b = 123;
let c = [1, 2, 3];
let d = [1, "1", true];
let e = {
    firstName: "Surya",
    secondName: "Prakash",
    id: 1,
};
let userVisited = true;
// void type which returns nothing
function abc(a, b) {
    console.log(a, b);
}
abc("number", 23);
// returns obj
function abc2(a, b) {
    return { a, b };
}
let abc2Val = abc2("number", 23);
console.log(abc2Val);
function getAccDetails(acc) {
    let { id, username } = acc;
    return { id, username };
}
let userAccDetails = getAccDetails({ id: 1, username: "heysuryaaaa" });
console.log(userAccDetails);
let userLogin = true;
// typescript is built over the top of the javascript, every codes written inside the ts, will run in js wher ever runs
// typescript knows js very well.
// Inference - where we dont declare or put the type of the variable
let name = "Surya prakash";
let id = 123;
let userCheckCookie = true;
let userChecks = [true, false];
let userDetails = {
    username: name,
    id: id,
    userCheckCookie: userCheckCookie,
    userChecks: userChecks,
};
console.log(userDetails);
//# sourceMappingURL=script.js.map
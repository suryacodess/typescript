"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=script.js.map
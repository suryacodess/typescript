// types - primitives and non-primitives
let a: string = "Surya Prakash";
let b: number = 123;
let c: [number, number, number] = [1, 2, 3];
let d: [number, string, boolean] = [1, "1", true];
let e: { firstName: string; secondName: string; id: number } = {
  firstName: "Surya",
  secondName: "Prakash",
  id: 1,
};
let userVisited: boolean = true;

// void type which returns nothing
function abc(a: string, b: number): void {
  console.log(a, b);
}
abc("number", 23);

// returns obj
function abc2(a: string, b: number): { a: string; b: number } {
  return { a, b };
}
let abc2Val = abc2("number", 23);
console.log(abc2Val);

// interfaces
interface acc {
  username: string;
  id: number;
}
function getAccDetails(acc: acc) {
  let { id, username } = acc;
  return { id, username };
}
let userAccDetails = getAccDetails({ id: 1, username: "heysuryaaaa" });
console.log(userAccDetails);

// type
type userStatus = string | number | boolean;
let userLogin: userStatus = true;

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

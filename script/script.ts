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

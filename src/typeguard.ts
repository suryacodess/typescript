// Typeguard in ts

let a: string | boolean | number = 2;
// narrowing down here the a variable using typeof
if (typeof a === "string") {
  console.log("a is string", a);
} else if (typeof a === "boolean") {
  console.log("a is boolean", a);
} else if (typeof a === "number") {
  console.log("a is number", a);
}

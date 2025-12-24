// Generics in ts
// With Generics we can create reusable components with different type of data without loosing type safety

function getDetails<T>(arg: T): T {
  return arg;
}
let str = getDetails("Surya"); // input is string output is also string
let bool = getDetails(true); // input is boolean output is also boolean
let num = getDetails(0); // input is number output is also number
let arr = getDetails([1, 2, 3, 4, 5]); // input is array output is also array

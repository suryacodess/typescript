// Null and Undefined data types
// Null means no value present in the variable
// Undefined means variable is not defined and you trying to access it.
// to define these we use :null and :undefined

var a: null | undefined | boolean | number; // union type
a = 1000;
console.log(a);

var a2: undefined | number; // union type
a2 = 2000;
console.log(a2);

var b: undefined = undefined;
console.log(b);

var c;
console.log(c); // undefined

let d;
console.log(d); // undefined

// const e; // error
// console.log(e);

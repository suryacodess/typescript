// Arrays type in ts
// to define array type we use :[]
let a: [] = [];
// only string
let names: string[] = ["surya", "prakash", "srigada"];
// only numbers
let nums: number[] = [1, 2, 3, 4, 5, 6];

// this is tuple where an array store values in an order where types are defined
let tuples: [string, boolean, string[], number[]] = [
  "surya",
  true,
  names,
  nums,
];
console.log(tuples);

// this is Union type
let union: string | boolean | [] | number | {} = [];
let union2: (string | boolean | [] | number | {})[] = [
  a,
  1,
  "Surya Prakash",
  1,
  2,
  true,
  [1, 1, 2, 2, names, tuples, tuples, nums],
  { names, nums, tuples },
  {},
];
console.log(union);
console.log(union2);

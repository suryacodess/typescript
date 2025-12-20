// In any programing languages there are data types, data types are one of the key topics
// in any programing language.

// data types are two types
// 1. Primitive
// 2. Non-Primitive

// Primitive data types - stores only one type of data
// Non Primitive data types - stores multiple type of data
// Special Type - Any, Void, Never, Unknown

// Primitive Type -
let id: number = 9100;
let username: string = "Surya Prakash";
let userVisited: boolean = true;

// Non Primitive Type -
let techStack: string[] = [
  "React.Js",
  "Astro.Js",
  "TypeScript",
  "Javascript",
  "HTML",
  "Css",
];
let userDetails: {
  id: number;
  username: string;
  userVisited: boolean;
  techStack: string[];
} = {
  id,
  username,
  userVisited,
  techStack,
};
let userDetails2: [number, string, boolean, {}] = [
  id,
  username,
  userVisited,
  userDetails,
];
let undefineVariable: undefined = undefined;
let nullVariable: null = null;

// Special Type -
// Void which returns nothing
function abc(): void {
  console.log("void type");
}
// Any which can be any data type
function abc2(): any {
  return 232;
}
// Unkown which we are not expecting
function abc3(): unknown {
  return undefined;
}
// Never which returns never
function abc4(): never {
  throw new Error("which returns never");
}

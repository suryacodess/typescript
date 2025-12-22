// Boolean type in ts
// to define boolean type we use :boolean
let a: boolean = false;
a = true;
let b: boolean = true;
console.log(a, b);

const userVisited: boolean = true;
function userVisitedOrNot(userVisited: boolean): boolean {
  return userVisited;
}
let userUserVisited = userVisitedOrNot(userVisited);
console.log(userUserVisited);

let bool: boolean = true;
let boolToStr: string = bool.toString();
console.log(typeof boolToStr);



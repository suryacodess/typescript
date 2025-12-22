// Union type in ts
// A variable can be any type of value when its declared.

var userVisited: boolean | undefined = true;
var a: string | number = "true";
var b: number[] | undefined = [1, 1, 1];
let arr: [number | string | boolean | {} | []] = [{ a, b, userVisited }];
console.log(arr);

function getDet(
  arr: number | boolean | string | number[]
): number | string | number[] | boolean {
  return arr;
}
console.log(getDet([1, 2, 3]));
console.log(getDet("Surya"));
console.log(getDet(1));
console.log(getDet(true));
